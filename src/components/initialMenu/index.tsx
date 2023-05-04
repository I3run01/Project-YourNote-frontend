import { useSelector } from 'react-redux'
import { InitialMenuStyled } from './styled'
import { RootState } from '@/store'
import Link from 'next/link'

export const InitionalMenu = () => {
    const theme = useSelector((state: RootState) => state.theme.value)
    const auth = useSelector((state: RootState) => state.auth.value)

    return (
        <InitialMenuStyled
        theme={theme}>
            <div id='container'>
                {!auth &&
                    <>
                        <div className='signin'>
                            <Link href={'/signin'}>Sign In</Link>
                        </div>
                        <div className='signup'>
                            <Link href={'/signup'}>Sign Up</Link>
                        </div>
                    </>
                }
                {auth &&
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
