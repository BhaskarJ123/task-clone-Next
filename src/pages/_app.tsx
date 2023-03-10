import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'
import {Provider} from 'react-redux';
import {store} from '../store';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
