import { ReactElement } from "react"
import { LeftMenu } from './leftMenu'
import { RightMenu } from './rightMenu'

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {

    return (
        <>
            <div>
                <LeftMenu/>
                <RightMenu/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout