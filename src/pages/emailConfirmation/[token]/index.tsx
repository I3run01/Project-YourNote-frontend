import { useEffect, useState } from 'react'
import { EmailConfirmationToken } from '../../../styles/emailConfirmationToken'
import { Auth } from '../../../Auth/request'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../../redux/slice/userSlice';
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
        
        let response = JSON.parse(await new Auth().confirmationEmail(String(token)))

        if(response.status == 200) {
            dispatch(changeUser(response.data))
            return router.push('/dashboard')
        }

        alert(response.data.message)

        setIsLoanding(false)

        return router.push('/signup')
    }

    useEffect(() => {
        request()
    }, [token])

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