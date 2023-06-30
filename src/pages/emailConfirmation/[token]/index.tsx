import { useEffect, useState } from 'react'
import { EmailConfirmationTokenDiv } from '../../../styles/EmailConfirmationToken.module'
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
        
        if(!token) return
        
        try {
            let response = JSON.parse(await new Auth().confirmationEmail(String(token)))
            setIsLoanding(false)

            return router.push('/dashboard')

        } catch (err: any) {
            setIsLoanding(false)
            
            if (err?.data && err.data?.message) {
                alert(err.data.message)
            }
            
            else if (err.message) alert(err.message)

            else alert('something wrong happened')
    
            return router.push('/signup')
        }

    }
   return (
        <>
            {isLoading && <Loading/>}

            <EmailConfirmationTokenDiv>
                <div id='container'>
                    <p>
                        Just relax 😎<br />
                        We are doing all the work <br />
                    </p>

                </div>
            </EmailConfirmationTokenDiv>
        </>
    )
}

export default EmailConfirmation