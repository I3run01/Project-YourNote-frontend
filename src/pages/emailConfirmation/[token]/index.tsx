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

    useEffect(() => {
        request()
    }, [token])

    const request = async () => {
        setIsLoanding(true)

        console.log(token)
        
        if(!token) {
            return
        }
        
        let response = JSON.parse(await new Auth().confirmationEmail(String(token)))

        if(response.status == 200) {
            return router.push('/dashboard')
        }

        else if (response.message) return alert(response.message)

        else if (response.data && response.data.message) {
            return alert(response.data.message)
        }
        
        alert('something wrong happened')

        return router.push('/signup')
    }

    

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