import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="1050756533967-43vpflrm53clkaf00g5jdngc5ig68ci0.apps.googleusercontent.com">
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap' rel='stylesheet' />
        </Head>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Provider>
  )
}
