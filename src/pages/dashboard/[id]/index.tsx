import { useEffect, useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/router';
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
import { DeleteButton } from '../../../components/deleteButton/deleteButton'

const dashboard = () => {
    const nullFileState =  {_id: '', title: '', content: []}
    const [fileState, setFileState] = useState<filesType>(nullFileState)
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        if(!user) router.push('./middlewarePage')
    }, [])

    useEffect(() => {
        getFileData()
    }, [id])


    useEffect(() => {
        sendFileState()
    }, [fileState])

    let sendFileState = async () => {
        if(!id || !fileState?.content) return

        let response = await new FilesRequest().updateContent(
            id as string,
            fileState.content
        )

        let json = JSON.parse(response)

        if(json.status !== 200) console.log(json.data)
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

    const deleteContent = (index: number) => {
        const newFileState = { ...fileState };
    
        newFileState.content.splice(index, 1);
      
        setFileState(newFileState);
    }
      
    return (  
        <Layout
            children={
                <>
                    <DashboardFilesDiv isDark={isDark}>
                        
                        {fileState?.title && fileState?._id &&
                            <Title
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
                                    <DeleteButton
                                        index={index}
                                        deleteFunction={deleteContent}

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
                            lastItem={true}
                        />
                    </DashboardFilesDiv>
                </>
            }
        />      
    )
}

export default dashboard