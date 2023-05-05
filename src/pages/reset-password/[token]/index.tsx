import { useEffect, useState } from 'react'
import { ResetPassword } from '../../../styles/reset-password'
import { Auth } from '../../../Auth/request'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { changeAuth } from '@/slice/authSLice';
import { Loading } from '../../../components/loading'

const EmailConfirmation = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    
    const { token } = router.query

    const [isLoading, setIsLoanding] = useState<boolean>(false)

    const request = async () => {
        setIsLoanding(true)

        console.log(token)
        
        if(!token) {
            return
        }
        
        let response = await new Auth().confirmationEmail(String(token))

        let json = JSON.parse(response)

        if(json.status == 200) {
            dispatch(changeAuth(true))
            return router.push('/dashboard')
        }

        alert(json.data.message)

        setIsLoanding(false)

        return router.push('/signup')
    }

    useEffect(() => {
        request()
    }, [token])

    return (
        <>
            {isLoading && <Loading/>}

            <ResetPassword>
                <div id='container'>
                    <p>
                        Just relax 😎<br />
                        We are doing all the work <br />
                    </p>

                </div>
            </ResetPassword>
        </>
    )
}

export default EmailConfirmation