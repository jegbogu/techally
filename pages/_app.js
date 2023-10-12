import Layout from '../component/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { UserContextProvider } from '../store/userContext'
import { SessionProvider } from "next-auth/react"





export default function App({ Component, pageProps:{session,...pageProps}, }) {
  return (
    <SessionProvider session={session}>
    <UserContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel="shortcut icon" href="https://joerally.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoTwo.1844c623.png&w=384&q=75" type="image/x-icon"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
    </SessionProvider>
  )
}
