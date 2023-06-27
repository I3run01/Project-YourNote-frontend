import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { fetchUser } from '../../../redux/slice/userSlice'
import { useRouter } from 'next/router';
import { Loading } from '../../../components/loading'
import { DashboardFilesDiv } from '../../../styles/dashboardFiles'
import { Title } from '../../../components/Title/title'
import IDE from '../../../components/IDE'
import Layout from '../../../Layout/layout'
import MyEditor from '../../../components/Editor/myEditor'
import { ImageInterface } from '../../../components/imageInterface'
import { filesType } from '@/types/files'
import { FilesRequest } from '../../../Request/filesRequests'


const dashboard = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [fileState, setFileState] = useState<filesType>(
        {id: '', title: '', content: []}
    )
    const filesTitle = useSelector((state: RootState) => state.filesTitles.files)
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch();
    const { id } = router.query; 

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        middleware()
    }, [user])

    useEffect(() => {
        getFileData()
    }, [id, filesTitle])

    useEffect(() => {
        setTimeout(() => {
            getFileData()
        }, 50)
    }, filesTitle)

    useEffect(() => {
        console.log(fileState)
    }, [fileState])

    const middleware = async () => {

        if(!user) return

        if('data' in user && user.status === 200  && user.data.status === 'Active') {
            return setIsAuth(true)
        }

        router.push('/signin')    
    }

    const getFileData = async () => {
        if (!id) return

        let response = JSON.parse(await new FilesRequest().getSpecificFile(id as string))
        setFileState(response.data)
    }

    const changeTitle = (newTitle: string) => {
        setFileState(prevState => {
            const newState = {...prevState}

            newState.title = newTitle

            return newState
        })
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

    const changeImage = (Index: number, imageCode64: string) => {
        setFileState(prevState => {
            const newState = {...prevState};
    
            const content = newState?.content[Index];
            if (!content || content.type !== 'image') {
                console.error(`Content at index ${Index} is not a image code 64`);
                return prevState;
            }
    
            content.codeBase64 = imageCode64

            return newState;
        });
    };

    return (
        <>
            {!isAuth === true && <Loading/>}

            {isAuth &&
                <Layout
                    children={
                        <>
                            <DashboardFilesDiv isDark={isDark}>
                                
                                <Title
                                    title={fileState?.title}
                                    onDataReceived={changeTitle}
                                />

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
                                                    src={item.codeBase64}
                                                    index={index}
                                                    onDataReceived={changeImage}
                                                    alt=""
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
                            </DashboardFilesDiv>
                        </>
                    }
                />
            }
        </>      
    )
}

export default dashboard