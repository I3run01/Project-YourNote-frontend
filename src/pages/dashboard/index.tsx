import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { DashboardDiv } from '../../styles/dashboardDiv'
import { useRouter } from 'next/router';
import Layout from '../../Layout/layout'

const dashboard = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()

    useEffect(() => {
        if(!user) router.push('./middlewarePage')
    }, [])

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