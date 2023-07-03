import { useSelector } from 'react-redux'
import { TopMenu } from '../../../components/topMenu'
import { RootState } from '@/redux/store'
import { ReadIdDiv } from '@/styles/ReadId.module'
import { useEffect, useState } from 'react'
import { filesType } from '@/types/files'
import { Title } from '@/components/Title/title'
import MyEditor from '@/components/Editor/myEditor'
import { ImageInterface } from '@/components/imageInterface/index'
import IDE from '@/components/IDE/index'
import { FilesRequest } from '@/Request/filesRequests'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { changeSpecificId } from '@/redux/slice/filesTitles'

const read = () => {
    let isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch();

    const [fileState, setFileState] = useState<filesType | null>(null)
    const { id } = router.query

    useEffect(() => {
        if(!id) return 
        const requestFile = async () => {      
            try {
                let response = await new FilesRequest().getSpecificFile(id as string)
                let json = JSON.parse(response)
                
                setFileState(json.data)
            } catch( err: any) {
                alert(err)
            }
        }

        requestFile()
    }, [id])

    return (
        <ReadIdDiv
            isDark={isDark}
        >
            <TopMenu/>

            {fileState?.title && fileState?._id &&
                            <Title
                                fileID={fileState._id}
                            />
                        } 

                        {fileState?.content && fileState.content.map((item, index) => {
                            return (
                                <div>
                                    {item.type === 'paragraph' && 
                                        <div>
                                            <MyEditor
                                                initialTXT={item.text}
                                                index={index}
                                            />
                                        </div>
                                    }

                                    {item.type === 'image' && 
                                        <div className='image'>
                                            <ImageInterface
                                                src={item.codeBase64}
                                                index={index}
                                                alt=""
                                            />
                                        </div>
                                    }

                                    {item.type === 'IDE' && 
                                        <div className='IDE'>
                                            <IDE 
                                                defaultValue={item.code} 
                                                index={index}
                                            />
                                        </div>
                                    }
                                </div>
                            )
                        })}

        </ReadIdDiv>
    )
}

export default read