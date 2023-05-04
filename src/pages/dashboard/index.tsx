import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/store'
import { changeAuth } from '@/slice/authSLice';
import { Auth } from '../../Auth/request'
import { Loading } from '../../components/loading'
import Layout from '../../Layout/layout'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()
    const auth = useSelector((state: RootState) => state.auth.value)
    const dispatch = useDispatch();

    useEffect(() => {
        middleware()
    }, [])

    const middleware = async () => {

        setIsLoanding(true)

        if(auth) return

        let response = await new Auth().user()
        let json = JSON.parse(response)

        setIsLoanding(false)

        if(json.status != 200  || json.data.status !== 'Active') {
            dispatch(changeAuth(true))
            return router.push('/signin')
        }

    }

    return (
        <>
            {isLoading && <Loading/>}

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