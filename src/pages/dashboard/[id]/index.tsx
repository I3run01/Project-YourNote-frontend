import { useEffect, useState } from 'react'
import dynamic from "next/dynamic"

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { changeUser } from '../../../redux/slice/userSlice'
import { setFile } from '../../../redux/slice/fileSlice'

import { useRouter } from 'next/router';

import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { DashboardFilesFilesDiv } from '../../../styles/dashboardFiles'
import { response } from './responseOBJ'
import IDE from '../../../components/IDE'
import Layout from '../../../Layout/layout'

import { ImageInterface } from '../../../components/imageInterface'


const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const fileState = useSelector((state: RootState) => state.file.data)
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch();
    const { id } = router.query; 

    useEffect(() => {
        middleware()
    }, [])

    useEffect(() => {
        getFileData()
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
        if (id) console.log(id)

        dispatch(setFile(response))
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
                                        <div className='IDE' key={index}>
                                            <IDE defaultValue={item.code} index={index}/>
                                        </div>
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