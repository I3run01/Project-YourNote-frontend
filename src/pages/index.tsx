import { IndexDiv } from '../styles/Index.module'
import { InitionalMenu } from '../components/initialMenu'
import { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUser } from '../redux/slice/userSlice';


export default function Home() {
  const isDark = useSelector((state: RootState) => state.theme.isDark)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  return (
    <>
      <IndexDiv isDark={isDark}>
        <InitionalMenu/>

        <h1>YourNote</h1>

        <p id='subtitle'>The ultimate online notebook</p>

        <div id='container'>
          <img  src='/images/bgImages/bgLogin.png' alt='' id='img' />

          <p id='text'>
              YourNote allows you to keep all your notes, images, and code in one place. With yourNote, you can easily jot down ideas, create to-do lists, store important information, and more. <br /><br />
              This intuitive and user-friendly app is perfect for anyone who wants to stay organized and productive. Whether you're a student, a professional, or just someone who likes to keep track of their thoughts, yourNote is the perfect tool for you.
              With yourNote, you can create multiple notebooks and customize them to suit your needs. You can add images, links, and even code snippets to your notes, making it easy to store and access all your information in one place. <br /><br />
              YourNote is also highly secure, with built-in encryption and password protection. This ensures that your private information remains safe and secure at all times.
              So if you're looking for a simple and effective way to stay organized and productive, try yourNote today and experience the power of an online notebook that works for you.
          </p>

        </div>


      </IndexDiv>
    </>
  )
}
