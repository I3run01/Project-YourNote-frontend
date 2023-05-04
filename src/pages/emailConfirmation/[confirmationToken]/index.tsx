import { useEffect, useState } from 'react'
import { EmailConfirmationToken } from '../../../styles/emailConfirmationToken'
import { Auth } from '../../../Auth/request'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { changeAuth } from '@/slice/authSLice';
import { Loading } from '../../../components/loading'

const EmailConfirmation = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    
    const { confirmationToken } = router.query

    const [isLoading, setIsLoanding] = useState<boolean>(false)

    const request = async () => {
        setIsLoanding(true)

        console.log(confirmationToken)
        
        if(!confirmationToken) {
            return
        }
        
        let response = await new Auth().confirmationEmail(String(confirmationToken))

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
    }, [confirmationToken])

    return (
        <>
            {isLoading && <Loading/>}

            <EmailConfirmationToken>
                <div id='container'>
                    <p>
                        Just relax 😎<br />
                        We are doing all the work <br />
                    </p>

                </div>
            </EmailConfirmationToken>
        </>
    )
}

export default EmailConfirmation