import { InitialStyled } from '../styles/initialStyled'
import { InitionalMenu } from '../components/initialMenu'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../slice/themeSlice'
import type { RootState } from '../store'




export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <InitialStyled>
      <InitionalMenu/>

      <h1>{theme}</h1>

      <button onClick={() => {theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))}}></button>
    </InitialStyled>
  )
}
