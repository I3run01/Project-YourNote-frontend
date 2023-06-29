import { fetchUser } from '../../redux/slice/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store'
// import { MiddlewarePageDiv } from '../../styles/MiddlewarePage.module'
import { MidDiv } from '../../styles/Mid.module'
import { Loading } from '../../components/loading'

const middlewarePage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        const middleware = async () => {

            if(!user) return
    
            if('data' in user && user.status === 200  && user.data.status === 'Active') {
                return router.back()
            }
    
            router.push('./signin')    
        }

        middleware()
    }, [user])

    return (
            <MidDiv
                isDark={isDark}
            >
                <Loading/>
            </MidDiv>
    )
}

export default middlewarePage