import { ReactElement } from "react"
import { LeftMenu } from './leftMenu'
import { RightMenu } from './rightMenu'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { LayoutStyled, MainStyled } from './layoutStyled'

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <>
            <LayoutStyled>
                <LeftMenu/>
                
                <MainStyled id="main" isDark={isDark}>
                    {children}
                </MainStyled>

                <RightMenu/>
            </LayoutStyled>
        </>
    )
}

export default Layout