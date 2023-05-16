import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store'
import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { changeUser } from '../../../redux/slice/userSlice'
import { DashboardDiv } from '../../../styles/dashboardDiv'
import Layout from '../../../Layout/layout'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const [file, setFile] = useState<object>({})
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        middleware()
    }, [])

    useEffect(() => {
        sendParam()
    }, [id])

    const middleware = async () => {

        if(user) return
        
        setIsLoanding(true)

        let response = JSON.parse(await new Auth().user())

        console.log(response.data)

        setIsLoanding(false)

        if(response.status != 200  || response.data.status !== 'Active') {
            return router.push('/signin')
        }

        dispatch(changeUser(response.data))

        console.log(response.status)

    }

    const sendParam = () => {
        if (id) console.log(id)
    }

    return (
        <>
            {isLoading === true && <Loading/>}

            <Layout
                children={
                    <>
                        <DashboardDiv isDark={isDark}>
                            <h1> Create or select some file</h1>    
                        </DashboardDiv>
                    </>
                }
            />
        </>      
    )
}

export default dashboard