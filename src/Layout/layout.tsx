import { ReactElement } from "react"
import { LeftMenu } from './leftMenu'
import { RightMenu } from './rightMenu'
import { LayoutStyled } from './layoutStyled'

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {
    return (
        <LayoutStyled>
            <LeftMenu/>
            {children}
            <RightMenu/>
        </LayoutStyled>
    )
}

export default Layout