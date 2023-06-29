import { IndexDiv } from '../styles/Index.module';
import { InitionalMenu } from '../components/initialMenu';
import { RootState } from '@/redux/store';
import { Auth } from '../Auth/request';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../redux/slice/userSlice';
import { useEffect } from 'react';
import Image from 'next/image';
import InitialImage from '../../public/images/bgImages/InitialIMG.png';

export default function Home() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const middleware = async () => {
    if(user) return;

    let response = JSON.parse(await new Auth().user());

    if(response.status === 200  && response.data.status === 'Active') {
      dispatch(changeUser(response));
    }
  };

  useEffect(() => {
    middleware();
  }, [user]); // add 'user' as a dependency if middleware is dependent on it

  return (
    <>
      <IndexDiv isDark={isDark}>
        <InitionalMenu/>
        <h1>YourNote</h1>
        <p id='subtitle'>The ultimate online notebook</p>
        <div id='container'>
          <Image
            src={InitialImage}
            alt='Notebook' // It's better to provide meaningful alternative text
            layout='fill' // You may need to adjust this according to your needs
            objectFit='cover' // Optional: you may need to adjust this according to your needs
            className='img' // Use className instead of id
          />
          <p id='text'>
            // Rest of the content...
          </p>
        </div>
      </IndexDiv>
    </>
  );
}
