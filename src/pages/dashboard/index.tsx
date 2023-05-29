import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { fetchUser } from '../../redux/slice/userSlice'

import { useRouter } from 'next/router';

import { Loading } from '../../components/loading'
import { DashboardDiv } from '../../styles/dashboardDiv'
import Layout from '../../Layout/layout'

const dashboard = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter()
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        middleware()
    }, [user])

    const middleware = async () => {

        if(!user) return

        if('data' in user && user.status === 200  && user.data.status === 'Active') {
            return setIsAuth(true)
        }

        router.push('/signin')    
    }

    return (
        <>
            {!isAuth === true && <Loading/>}
            
            {isAuth &&
                <Layout
                    children={
                        <>
                            <DashboardDiv isDark={isDark}>
                                <h1> Create or select some file</h1>    
                            </DashboardDiv>
                        </>
                    }
                />
            }
            
        </>      
    )
}

export default dashboard