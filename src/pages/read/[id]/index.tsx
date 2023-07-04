import { useSelector } from 'react-redux'
import { TopMenu } from '../../../components/topMenu'
import { RootState } from '@/redux/store'
import { ReadIdDiv } from '@/styles/ReadId.module'
import { useEffect, useState } from 'react'
import { filesType } from '@/types/files'
import MyEditor from '@/components/Editor/myEditor'
import { ImageInterface } from '@/components/imageInterface/index'
import IDE from '@/components/IDE/index'
import { FilesRequest } from '@/Request/filesRequests'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { changeTheme } from '@/redux/slice/themeSlice'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
    let response;

    if (context.params) {
        try {
            response = await new FilesRequest().getSpecificFile(context.params.id as string)
        } catch (err: any) {
            return {
                notFound: true, // This will automatically render the 404 page.
            }
        }
        return {
            props: {
                file: JSON.parse(response),
            },
        }
    }

    return {
        notFound: true,
    }
}




const read = ({ file }: { file: filesType }) => {
    let isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch()
    const [fileState, setFileState] = useState<filesType | null>(null)
    const { id } = router.query

    useEffect(() => {
        setFileState(file)
    }, [])

    useEffect(() => {
        console.log(fileState)
    }, [fileState])

    return (
        <ReadIdDiv
            isDark={isDark}
        >
            <TopMenu/>

            <div className='changeTheme'>
                <p  onClick={()=> dispatch(changeTheme())}>change theme</p>
            </div>

            <div id='title'>
                <h1>{fileState?.title}</h1>
            </div>


            {fileState?.content && fileState.content.map((item, index) => {
                return (
                    <div className='itensContainer' key={index}>
                        {item.type === 'paragraph' && 
                            <div>
                                <MyEditor
                                    initialTXT={item.text}
                                    index={index}
                                    readOnly={true}
                                />
                            </div>
                        }

                        {item.type === 'image' && 
                            <div className='image'>
                                <ImageInterface
                                    src={item.codeBase64}
                                    index={index}
                                    alt=""
                                    readOnly={true}
                                />
                            </div>
                        }

                        {item.type === 'IDE' && 
                            <div className='IDE'>
                                <IDE 
                                    defaultValue={item.code} 
                                    index={index}
                                    readOnly
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