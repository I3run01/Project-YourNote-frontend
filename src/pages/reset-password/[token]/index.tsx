import { ResetPasswordDiv } from '../../../styles/reset-password'
import { useEffect, useState } from 'react'
import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../../public/images/backButton.svg'

const ResetPassword = () => {
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPasswordPassword] = useState<string>('')
    const [mathPassword, setMatchPassword] = useState<boolean>(false)
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()

    const { token } = router.query

    useEffect(() => {
        if(password === repeatPassword && password) setMatchPassword(true)
        else setMatchPassword(false)
    }, [password, repeatPassword])

    const signinRequest = async () => {

        if(!mathPassword) return

        setIsLoanding(true)

        let response = await new Auth().resetPassword(String(token), password)
        let json = JSON.parse(response)

        setIsLoanding(false)

        if (json.status == 200 && json.data.status === 'Active'){
            return router.push('/dashboard')
        }

        alert(json.data.message)   
    }

    return (
        <>
            {(isLoading || !token) && <Loading/>}
        
            <ResetPasswordDiv
                mathPassword={mathPassword}
            >
                <form id='container'>
                    <Link href={'/signin'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <input type="password" placeholder='new password' name='Password'
                    onChange={(event)=>{setPassword(event.target.value)}}/>
                    <p className='mathPassword'>{mathPassword ? "Password match" : "Passwords do not match"}</p>

                    <input type="password" placeholder='repeat the password' name='repeatPassword'
                    onChange={(event)=>{setRepeatPasswordPassword(event.target.value)}}/>

                    <p className='mathPassword'>{mathPassword ? "Password match" : "Passwords do not match"}</p>

                    { token &&
                        <div id='submit' onClick={signinRequest}>Submit</div>
                    }
                </form>
            </ResetPasswordDiv>
        </>
    )
}

export default ResetPassword