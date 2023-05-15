import { ReactElement } from "react"
import { LeftMenu } from './leftMenu'
import { RightMenu } from './rightMenu'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { LayoutStyled } from './layoutStyled'

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <>
            <LayoutStyled isDark={isDark}>
                <LeftMenu/>
                
                <main id="main">
                    {children}
                </main>
                
                <RightMenu/>
            </LayoutStyled>
        </>
    )
}

export default Layout