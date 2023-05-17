import dynamic from "next/dynamic"

const MyEditor = dynamic(() =>import('../../components/Editor/myEditor'), {
    ssr: false
} )

const Text = () => {

    return (
        <MyEditor/>
    )
}

export default Text