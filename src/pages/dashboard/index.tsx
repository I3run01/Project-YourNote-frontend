import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/store'
import { Auth } from '../../Auth/request'
import { Loading } from '../../components/loading'
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

        let response = await new Auth().user()
        let json = JSON.parse(response)

        console.log(json.data)

        setIsLoanding(false)

        if(json.status != 200  || json.data.status !== 'Active') {
            return router.push('/signin')
        }

        console.log(json.status)

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