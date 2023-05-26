import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { changeUser } from '../../../redux/slice/userSlice'

import { useRouter } from 'next/router';

import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { DashboardFilesFilesDiv } from '../../../styles/dashboardFiles'
import { response } from './responseOBJ'
import IDE from '../../../components/IDE'
import Layout from '../../../Layout/layout'

import { ImageInterface } from '../../../components/imageInterface'
import { filesType } from '@/types/files'

import MyEditor from '../../../components/Editor/myEditor'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const [fileState, setFileState] = useState<filesType>(
        {id: '', title: '', usersAccessIDs: [], content: []}
    )
    const [ex, setEx] = useState<any>()
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
        setFileState(response)
    }

    const changeFileParagraph = (paragraphIndex: number, newText: string) => {
      
        setFileState(prevState => {
            const newState = {...prevState};
    
            const content = newState?.content[paragraphIndex];
            if (!content || content.type !== 'paragraph') {
                console.error(`Content at index ${paragraphIndex} is not a paragraph`);
                return prevState;
            }
    
            content.text = newText;
    
            return newState;
        });
        
    };

    const changeFileCode = (Index: number, newCode: string) => {
      
        setFileState(prevState => {
            const newState = {...prevState};
    
            const content = newState?.content[Index];
            if (!content || content.type !== 'IDE') {
                console.error(`Content at index ${Index} is not a programming code`);
                return prevState;
            }
    
            content.code = newCode

            console.log(fileState)
    
            return newState;
        });
        
    };
    


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
                                                initialTXT={item.text}
                                                index={index}
                                                onDataReceived={changeFileParagraph}
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
                                            <IDE 
                                                defaultValue={item.code} 
                                                index={index}
                                                onDataReceived={changeFileCode}
                                            />
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