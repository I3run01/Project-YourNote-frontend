import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/store'
import { Auth } from '../../Auth/request'
import { Loading } from '../../components/loading'
import { changeUser } from '../../slice/userSlice'
import Layout from '../../Layout/layout'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()
    const auth = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch();

    useEffect(() => {
        middleware()
    }, [])

    const middleware = async () => {

        if(auth) return
        
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

    return (
        <>
            {isLoading === true && <Loading/>}

            <Layout
                children={
                    <>
                        Dashboard
                    </>
                }
            />
        </>      
    )
}

export default dashboard