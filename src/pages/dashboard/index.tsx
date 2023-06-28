import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { DashboardDiv } from '../../styles/dashboardDiv'
import Layout from '../../Layout/layout'

const dashboard = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const user = useSelector((state: RootState) => state.user.user)
    const router = useRouter()

    useEffect(() => {
        if(user) return
        router.push('./_middleware')
    }, [user])

    return (
        <Layout
            children={
                <>
                    <DashboardDiv isDark={isDark}>
                        <h1> Create or select some file</h1>    
                    </DashboardDiv>
                </>
            }
        />             
    )
}

export default dashboard