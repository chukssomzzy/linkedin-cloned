import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../Components/IndexComponents'
const Home: NextPage = () => {
    
  return (
    <div>
        <Head>
            <title>
                LINKEDIN 
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />         
    </div>
  )
}

export default Home
