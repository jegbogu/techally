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
          <link rel="shortcut icon" href="https://res.cloudinary.com/ovaltech/image/upload/v1697120185/LOGINAPP/rn8ooam0n04iqbcqs9jq.png" type="image/x-icon"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
    </SessionProvider>
  )
}
