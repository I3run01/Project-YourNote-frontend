import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="1050756533967-43vpflrm53clkaf00g5jdngc5ig68ci0.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Provider>
  )
}
