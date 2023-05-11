import '@/styles/globals.css'
import App from 'next/app'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


MyApp.getInitialProps = async (appContext) => {
  //provide appContext in order to do 404's
  
  }
  