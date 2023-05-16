import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store'
import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { changeUser } from '../../../redux/slice/userSlice'
import { DashboardFilesFilesDiv } from '../../../styles/dashboardFiles'
import { filesType } from '../../../types/files'
import Layout from '../../../Layout/layout'

const dashboard = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const [file, setFile] = useState<filesType | null>(null)
    const user = useSelector((state: RootState) => state.user.user)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        middleware()
        getFileData()
    }, [])

    useEffect(() => {
        sendParam()
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
        const response = {
            id: '1',
            title: 'exmpleTitle',
            usersAccessIDs: ['1', '2', '3'],
            content: [
                {
                    type: 'paragraph',
                    text: 'Penguins are fascinating and charismatic creatures that have captured the hearts of people around the world. These flightless birds are primarily found in the Southern Hemisphere, especially in Antarctica, although some species also inhabit other regions such as South Africa, New Zealand, and South America. Penguins have a unique appearance with their stout bodies, flipper-like wings, and distinctive black and white plumage, which helps them camouflage while swimming and diving in the ocean. They are well adapted to their aquatic lifestyle, with streamlined bodies for efficient swimming and webbed feet for propelling through the water. Penguins are excellent swimmers and can dive to impressive depths in search of food, predominantly fish and krill. Not only are they skilled in the water, but penguins also exhibit fascinating social behaviors. They often form large colonies, where they engage in courtship rituals, nest-building, and cooperative parenting. These endearing birds display remarkable resilience and adaptability, surviving in harsh and extreme environments. Penguins symbolize determination, family values, and the beauty of the natural world'
                },
                {
                    type: 'IDE',
                    language: 'python',
                    code: 'printf("hello, world")'
                },
                {
                    type: 'image',
                    codeBase64: 'fadrhg',
                },   
                
            ]
        }

        setFile(response)
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
                            <h1>{file?.title}</h1> 
                            {file?.content.map((item, index) => {

                                if (item.type === 'paragraph') {
                                    return (
                                        <div className='paragraph'>{item.text}</div>
                                    )
                                }

                                else if (item.type === 'image') {
                                    return (
                                        <div className='image'>Image</div>
                                    )
                                }

                                else if (item.type === 'IDE') {
                                    return (
                                        <div className='IDE'>IDE</div>
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