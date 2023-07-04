import { LeftMenuDiv } from './styled'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { changeFilesTitles, deleteFileInTheList } from '@/redux/slice/filesTitles'
import menuIcon from '../../../public/images/icons/openAndClosemenuIcon.svg'
import settingsIcon from '../../../public/images/icons/Settings.svg'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { FilesRequest } from '../../Request/filesRequests'
import { ShowTilte } from './showTitle/showTitle'

export const  LeftMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const filesTitle = useSelector((state: RootState) => state.filesTitles.files)
    const user = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch();
    const router = useRouter()
    const [isMenuOpend, setIsMenuOpened] = useState<boolean>(true)

    useEffect(() => {
        request()
    }, [user])

    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        if(!user) return

        let response =  JSON.parse(await new FilesRequest().retrieveFiles())

        if(response.status === 200) dispatch(changeFilesTitles(response.data))       
    }

    const deleteFile = async (fileID: string) => {
        const isUserConfirmed = window.confirm("Are you sure you want to delete this file?");
        
        if(isUserConfirmed){
            let response = JSON.parse(await new FilesRequest().deleteFile(fileID))

            dispatch(deleteFileInTheList(fileID))

            router.push('../dashboard')
        }
        return
    }

    const handldeNewButton = async () =>{
        try {
            let response = JSON.parse(await new FilesRequest().createFile())
    
            let fileID = response.data._id
    
            await request()
    
            if(response.status == 200) {
                router.push(`../dashboard/${fileID}`)
            }
        } catch (err: any) {
            if (err?.data && err.data?.message) {
                alert(err.data.message)
            }
            
            else if (err.message) alert(err.message)

            else alert('something wrong happened')
        }
    }

    return (
        <LeftMenuDiv
            id='leftMenu'
            isDark={isDark}
            isMenuOpened={isMenuOpend}
        >
            
            <div id='icon' onClick={() => ( setIsMenuOpened(!isMenuOpend))}>
                <Image
                    src={menuIcon}
                    alt=''

                    id='menuIcon'
                />
            </div>

            <div id='newFile' onClick={() => {handldeNewButton()}}>+ New File</div>

            <div id='fileConainer'>
                {
                    filesTitle.map((item, key) => {
                        return (
                            <div className='item' key={key}>
                                <ShowTilte
                                    title={item.title}
                                    fileID={item._id}
                                    deleteFile={deleteFile}
                                    index={key}
                                />
                            </div>
                        )
                    })
                }
            </div>
            
            <div id='settings' onClick={() => router.push('../settings')}>
                <Image
                    src={settingsIcon}
                    alt=''
                />
                <p>Settings </p>
            </div>

        </LeftMenuDiv>
    )
}