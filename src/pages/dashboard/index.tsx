import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../Layout/layout'
import { changeAuth } from '@/slice/authSLice';

const dashboard = () => {
    const router = useRouter()
    const auth = useSelector((state: RootState) => state.auth.value)
    const dispatch = useDispatch();

    useEffect(() => {
        middleware()
    }, [])

    const middleware = async () => {

        if(auth) return

        let response = await Auth.user()
        let json = JSON.parse(response)

        dispatch(changeAuth(true))

        if(!json.data) return router.push('/signin')
    }

    return (
        <Layout
            children={
                <>
                    Dashbaord
                </>
            }
        />
    )
}

export default dashboard