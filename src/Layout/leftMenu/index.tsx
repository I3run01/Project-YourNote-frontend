import { LeftMenuDiv } from './styled'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { changeTheme } from '../../redux/slice/themeSlice'
import { changeFilesTitles, deleteFileInTheList } from '@/redux/slice/filesTitles'
import menuIcon from '../../../public/images/icons/openAndClosemenuIcon.svg'
import settingsIcon from '../../../public/images/icons/Settings.svg'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { FilesRequest } from '../../Request/filesRequests'
import { ShowTilte } from './showTitle/showTitle'
import {  } from '@/redux/slice/filesTitles'

export const  LeftMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const filesTitle = useSelector((state: RootState) => state.filesTitles.files)
    const dispatch = useDispatch();
    const router = useRouter()
    const [isMenuOpend, setIsMenuOpened] = useState<boolean>(true)

    useEffect(() => {
        request()
    }, [])

    useEffect(() => {
        console.log(filesTitle)
    }, [filesTitle])

    const request = async () => {
        let response =  JSON.parse(await new FilesRequest().retrieveFiles())
        dispatch(changeFilesTitles(response.data))
    }

    const deleteFile = async (fileID: string) => {
        const isUserConfirmed = window.confirm("Are you sure you want to delete this file?");
        
        if(isUserConfirmed){
            let response = JSON.parse(await new FilesRequest().deleteFile(fileID))

            dispatch(deleteFileInTheList(fileID))
        }
        return
    }

    const handldeNewButton = async () =>{
        let response = JSON.parse(await new FilesRequest().createFile())

        let fileID = response.data._id

        await request()

        if(response.status == 200) {
            router.push(`../dashboard/${fileID}`)
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
            
            <div id='settings' onClick={() => {dispatch(changeTheme())}}>
                <Image
                    src={settingsIcon}
                    alt=''
                />
                <p>Change theme</p>
            </div>

        </LeftMenuDiv>
    )
}