import { useSelector } from 'react-redux'
import { TopMenuDiv } from './styled'
import { RootState } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { fetchUser } from '@/redux/slice/userSlice' 
import Link from 'next/link'
import { useEffect } from 'react'

export const TopMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const user = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <TopMenuDiv
        isDark={isDark}>
            <div id='topMenuContainer'>
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
        </TopMenuDiv>
    )
}
