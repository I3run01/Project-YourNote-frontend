import { useEffect, useState, Fragment } from 'react'
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
import { NewItem } from '../../../components/NewItem/newItem'
import { ParagraphContent, IDEContent, ImageContent } from '@/types/files'

const dashboard = () => {
    const nullFileState =  {_id: '', title: '', content: []}
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [fileState, setFileState] = useState<filesType>(nullFileState)
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
    }, [id])

    useEffect(() => {
        setTimeout(() => {
            getFileData()
        }, 50)

        console.log(fileState)
    }, [filesTitle])

    useEffect(() => {
        sendFileState()
    }, [fileState])

    let sendFileState = async () => {
        if(!id) return

        let response = await new FilesRequest().updateContent(
            id as string,
            fileState.content
        )

        let json = JSON.parse(response)

        if(json.status !== 200) console.log(json.data)
    }

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

        if(response.status === 200) {
            return setFileState(response.data)
        }
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

    const addNewParagraph = (index: number) => {
        let newParagraph: ParagraphContent = {
            type: 'paragraph',
            text: 'Write here a new paragraph'
        }
    
        setFileState(prevState => {
            const newState = {...prevState};
    
         if(index !== -1) {
                newState.content.splice(index, 0, newParagraph);
            }
            else {
                newState.content.push(newParagraph);
            }
    
            return newState;
        });
    }

    const addNewIDE = (index: number) => {
        let newParagraph: IDEContent = {
            type: 'IDE',
            language: 'python',
            code: 'hello world',
        }
    
        setFileState(prevState => {
            const newState = {...prevState};
    
         if(index !== -1) {
                newState.content.splice(index, 0, newParagraph);
            }
            else {
                newState.content.push(newParagraph);
            }
    
            return newState;
        });
    }

    const addNewImage = (index: number) => {
        console.log('nem image')
        let newParagraph: ImageContent = {
            type: 'image',
            codeBase64: '',
        }
    
        setFileState(prevState => {
            const newState = {...prevState};
    
         if(index !== -1) {
                newState.content.splice(index, 0, newParagraph);
            }
            else {
                newState.content.push(newParagraph);
            }
    
            return newState;
        });
    }
    

    return (
        <>
            <Layout
                children={
                    <>
                        <DashboardFilesDiv isDark={isDark}>
                            
                            {fileState?.title && fileState?._id &&
                                <Title
                                    title={fileState.title}
                                    fileID={fileState._id}
                                />
                            } 

                            {fileState?.content && fileState.content.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <NewItem
                                            index={index}
                                            newParagraph={addNewParagraph}
                                            newIDE={addNewIDE}
                                            newImage={addNewImage}
                                        />

                                        {item.type === 'paragraph' && 
                                            <div>
                                                <MyEditor
                                                    initialTXT={item.text}
                                                    index={index}
                                                    onDataReceived={changeFileParagraph}
                                                />
                                            </div>
                                        }

                                        {item.type === 'image' && 
                                            <div className='image'>
                                                <ImageInterface
                                                    src={item.codeBase64}
                                                    index={index}
                                                    onDataReceived={changeImage}
                                                    alt=""
                                                />
                                            </div>
                                        }

                                        {item.type === 'IDE' && 
                                            <div className='IDE'>
                                                <IDE 
                                                    defaultValue={item.code} 
                                                    index={index}
                                                    onDataReceived={changeFileCode}
                                                />
                                            </div>
                                        }
                                    </Fragment>
                                )
                            })}

                            <NewItem
                                index={-1}
                                newParagraph={addNewParagraph}
                                newIDE={addNewIDE}
                                newImage={addNewImage}
                            />
                        </DashboardFilesDiv>
                    </>
                }
            />
        </>      
    )
}

export default dashboard