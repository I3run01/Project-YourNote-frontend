import { ReactElement } from "react"
import { LeftMenu } from '../Layout/leftMenu'

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {

    return (
        <>
            <div>
                <LeftMenu/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout