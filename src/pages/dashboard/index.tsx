import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store'
import { Auth } from '../../Auth/request'
import { Loading } from '../../components/loading'
import { changeUser } from '../../redux/slice/userSlice'
import { DashboardDiv } from '../../styles/dashboardDiv'
import Layout from '../../Layout/layout'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();

    useEffect(() => {
        middleware()
    }, [])

    const middleware = async () => {

        if(user) return
        
        setIsLoanding(true)

        let response = JSON.parse(await new Auth().user())

        console.log(response)

        setIsLoanding(false)

        if(response.status != 200  || response.data.status !== 'Active') {
            return router.push('/signin')
        }

        dispatch(changeUser(response.data))

        console.log(response.status)
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