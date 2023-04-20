import { ReactElement } from "react"

type props = {
    children: ReactElement
}

const Layout = ({children}: props) => {

    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default Layout