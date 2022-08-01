import { BusinessCenterOutlined, ExploreOutlined, GroupsOutlined, OndemandVideoSharp } from '@mui/icons-material'
import Image from 'next/image'
import Head from 'next/head'
import { HeaderLink } from '../Components/Home'
import { LinkIconBox } from '../Components/Home'
import {  HomeButtonData } from '../utils/HomeButtonData.js'
import { ReactNode } from 'react'
const home = () => {
    /* Jsx Variabkes */
    const intentButtonMap: ReactNode[] = HomeButtonData.map((item: string,index: number)=>(
        <LinkIconBox text={item}/>
    ) )  
    /* --- JSX ---*/
  return (
    <div className='space-y-10 relative'>
        <Head>
           <title>LinkedIn Login</title>
            <meta name="description" content="LinkedIn login page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className= 'flex justify-around items-center py-4'>
            <div className='relative w-10 h-10'>
            <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
            </div>
            <div className="flex items-center sm:divide-x divide-gray-300 ">
                <div className="hidden sm:flex space-x-8 pr-4">
                    <HeaderLink Icon={ ExploreOutlined } text="Discover"/>
                    <HeaderLink Icon={ GroupsOutlined } text='People' />
                    <HeaderLink Icon={ OndemandVideoSharp } text='Learning'/>
                    <HeaderLink Icon={ BusinessCenterOutlined } text='Jobs'/>
                </div>
               <div className="pl-4">
 <button type="button" className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">Sign In</button>
            </div>          
            </div>
        </header>                                             
        <main className="flex flex-col xl:flex-row items-center m-w-screen-lg mx-auto">
            <div className="space-y-6 xl:space-10">
                <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:p-0">Welcome to your professional community</h1>
                <div className="space-y-4">
                    {
                        intentButtonMap                                        
                    }
                </div>
            </div>
            <div className='relative xl:absolute w-80 h-80 xl:h-[650px] xl:w-[650px] top-14 right-5'>
             <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
            </div>
        </main>
    </div>
  )
}

export default home                                    
