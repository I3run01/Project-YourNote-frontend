import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/router';

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const specificID = useSelector((state: RootState) => state.filesTitles.specificId)
    const router = useRouter()

    let goToFile = () => {
        if(!specificID) return alert('You should open a file before')

        window.open(`${router.basePath}/read/${specificID}`, "_blank")
    }

    return (
        <RightMenuDiv isDark={isDark} id='rightMenu' onClick={goToFile}>
            <div className='sharedContent' >
                <img className='wwwIcon' src="/images/icons/wwwIcon.svg" alt="" />
            </div>
        </RightMenuDiv>
    )
}
