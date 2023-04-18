import { useSelector } from 'react-redux'
import { InitialMenuStyled } from './styled'
import { RootState } from '@/store'
import Link from 'next/link'

export const InitionalMenu = () => {
    const theme = useSelector((state: RootState) => state.theme.value)

    return (
        <InitialMenuStyled
        theme={theme}>
            <div id='container'>
                <div className='signin'>
                    <Link href={'/signin'}>Sign In</Link>
                </div>
                <div className='signup'>
                    <Link href={'/signup'}>Sign Up</Link>
                </div>
            </div>
        </InitialMenuStyled>
    )
}
