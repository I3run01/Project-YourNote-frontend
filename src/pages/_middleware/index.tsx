import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { fetchUser } from '../../redux/slice/userSlice'

const middleware = () => {
    const router = useRouter()
    const user = useSelector((state: RootState) => state.user.user)
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
        <div>
            Loading 
        </div>
    )
}

export default middleware