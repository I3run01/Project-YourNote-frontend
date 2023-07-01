import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layout/layout';
import { SettingsDiv } from '../../styles/Settings.module';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { changeTheme } from '@/redux/slice/themeSlice';
import { useQueries } from "react-query";
import { Auth } from '@/Auth/request'
import { useEffect } from 'react';

const Settings = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const router = useRouter();
    const dispatch = useDispatch();

    const [logout, deleteUser] = useQueries([
        {
          queryKey: 'logout',
          queryFn: async () => {
            const response = JSON.parse(await new Auth().signOut());
            router.push('../')
            return response.data;
          },
          enabled: false
        },
        {
            queryKey: 'deleteAccount',
            queryFn: async () => {
              const response = JSON.parse(await new Auth().deleteAccount());
              router.push('../')
              return response.data;
            },
            enabled: false
          },
      ]);

    useEffect(() => {
        const err = logout.error as any;

        if(!err) return

        if (err?.data?.message)  return alert(err.data.message);
           
        else if (err?.message) alert(err.message)

        else alert('Something wrong happened');
    }, [logout.error])

    useEffect(() => {
        const err = deleteUser.error as any;

        if(!err) return

        if (err?.data?.message)  return alert(err.data.message);
           
        else if (err?.message) alert(err.message)

        else alert('Something wrong happened');
    }, [deleteUser.error])

    const deleteAccount = async () => {
        const isUserConfirmed = window.confirm("Are you sure you want to delete this account?");
        
        if(isUserConfirmed) deleteUser.refetch()
        return
    }

    return (
        <Layout
            children={
                <SettingsDiv isDark={isDark}>
                    <div className='back' onClick={() => router.back()}>Back</div>
                    <div className='clickable' onClick={() => dispatch(changeTheme())}>
                        <p>Change theme</p>
                    </div>
                    <div className='clickable' onClick={() => {logout.refetch()}}>
                        <p>Sign out</p>
                    </div>
                    <div className='clickable' onClick={deleteAccount}>
                        <p>Delete account</p>
                    </div>
                </SettingsDiv>
            }
        />
    );
}

export default Settings;
