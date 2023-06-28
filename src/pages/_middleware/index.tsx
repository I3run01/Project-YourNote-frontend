import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { fetchUser } from '../../redux/slice/userSlice'
import { MiddlewareStyled } from '../../styles/_middleware.module'
import { Loading } from '../../components/loading/index'

const middleware = () => {
    const router = useRouter()
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();

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
        <MiddlewareStyled
            isDark={isDark}
        >
            <Loading/>
        </MiddlewareStyled>
    )
}

export default middleware