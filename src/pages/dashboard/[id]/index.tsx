import { useEffect, useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store'
import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { changeUser } from '../../../redux/slice/userSlice'
import { setFile } from '../../../redux/slice/fileSlice'
import { DashboardFilesFilesDiv } from '../../../styles/dashboardFiles'
import { filesType } from '../../../types/files'
import { response } from './responseOBJ'
import { ImageInterface } from '../../../components/imageInterface'
<<<<<<< HEAD
<<<<<<< HEAD
import IDE from '../../../components/IDE'
=======
>>>>>>> parent of 763e69c (c)
=======
>>>>>>> parent of 763e69c (c)
import Layout from '../../../Layout/layout'
import dynamic from "next/dynamic"

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const [fileState, setFileState] = useState<filesType | null>(null)
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch();
    const { id } = router.query; 

    useEffect(() => {
        middleware()
        getFileData()
    }, [])

    useEffect(() => {
        sendParam()
    }, [id])

    const MyEditor = dynamic(() =>import('../../../components/Editor/myEditor'), {
        ssr: false
    } )

    const middleware = async () => {

        if(user) return
        
        setIsLoanding(true)

        let response = JSON.parse(await new Auth().user())

        console.log(response.data)

        setIsLoanding(false)

        if(response.status != 200  || response.data.status !== 'Active') {
            return router.push('/signin')
        }

        dispatch(changeUser(response.data))

        console.log(response.status)

    }

    const getFileData = async () => {
        setFileState(response)
        dispatch(setFile(response))
    }

    const sendParam = () => {
        if (id) console.log(id)
    }

    return (
        <>
            {isLoading === true && <Loading/>}

            <Layout
                children={
                    <>
                        <DashboardFilesFilesDiv isDark={isDark}>
                            <h1>{fileState?.title}</h1> 
                            {fileState?.content.map((item, index) => {

                                if (item.type === 'paragraph') {
                                    return (
                                        <div key={index}>
                                            <MyEditor
                                            initialTXT= {item.text}
                                            index={index}
                                            />
                                        </div>
                                    )
                                }

                                else if (item.type === 'image') {
                                    return (
                                        <div className='image' key={index}>
                                            <ImageInterface 
                                                src={item.codeBase64} alt=""
                                            />
                                        </div>
                                    )
                                }

                                else if (item.type === 'IDE') {
                                    return (
                                        <div className='IDE' key={index}>IDE</div>
                                    )
                                }

                            })}
                        </DashboardFilesFilesDiv>
                    </>
                }
            />
        </>      
    )
}

export default dashboard