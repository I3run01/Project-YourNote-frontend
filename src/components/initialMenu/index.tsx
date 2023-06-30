import { useSelector } from 'react-redux'
import { InitialMenuStyled } from './styled'
import { RootState } from '@/redux/store'
import Link from 'next/link'

export const InitionalMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const user = useSelector((state: RootState) => state.user.user)

    console.log(user)

    return (
        <InitialMenuStyled
        isDark={isDark}>
            <div id='container'>
                {!user &&
                    <>
                        <div className='signin'>
                            <Link href={'/signin'}>Sign In</Link>
                        </div>
                        <div className='signup'>
                            <Link href={'/signup'}>Sign Up {user}</Link>
                        </div>
                    </>
                }
                {user &&
                    <>
                        <div className='dashboard'>
                            <Link href={'/dashboard'}>Dashboard</Link>
                        </div>
                    </>
                }
            </div>
        </InitialMenuStyled>
    )
}
