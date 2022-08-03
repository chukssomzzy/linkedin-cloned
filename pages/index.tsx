import type { NextPage } from 'next'
import Head from 'next/head'
import { Header,Sidebar } from '../Components/IndexComponents'
const Home: NextPage = () => {
    
  return (
      <div className='bg-[f3f2ef] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6'>
        <Head>
            <title>
                LINKEDIN  | FEED
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />   
        <main className="flex justify-center gap-x-5 px-4 sm:px-12">
            <div className="flex flex-col md:flex-row gap-5">
                {/* sidebar*/}
                  <Sidebar />
                {/*Feeds*/}
            </div>
            {/* Widget*/}
        </main>
    </div>
  )
}

export default Home
