import { BusinessCenterOutlined, ExploreOutlined, GroupsOutlined, OndemandVideoSharp } from '@mui/icons-material'
import Image from 'next/image'
import Head from 'next/head'
import { HeaderLink } from '../Components/Home'
import { LinkIconBox } from '../Components/Home'
import {  HomeButtonData } from '../utils'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'
import { GetServerSidePropsContext,NextPage } from 'next'



type Iprops = {
    providers: Promise<Record<LiteralUnion<BuiltInProviderType,string>, ClientSafeProvider> | null>
}

const home: NextPage<Iprops> = ({providers}) => {
    /* Jsx Variabkes */
    const intentButtonMap: JSX.Element[] = HomeButtonData.map((item: string, index: number)=>(
        <LinkIconBox text={item} key={index} />
    ) )  
     
    const signInProviders: JSX.Element[] = Object.values(providers)
    .map((provider)=>(
        <div key={provider.name}>
               <div className="pl-4">
 <button 
                   type="button" 
                   className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                   onClick={()=> signIn(provider.id,{ callBackUrl: '/'})}
 >
                   Sign In
 </button>
        </div>
        </div>
    ))
    /* --- JSX ---*/

  return (
    <div className='relative space-y-10 xl:ml-20'>
        <Head>
           <title>LinkedIn Login</title>
            <meta name="description" content="LinkedIn login page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className= 'flex items-center justify-around py-4 xl:justify-between xl:mr-20'>
            <div className='relative w-40 h-20 cursor-pointer'>
            <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
            </div>
            <div className="flex items-center divide-gray-300 sm:divide-x ">
                <div className="hidden pr-4 space-x-8 sm:flex">
                    <HeaderLink Icon={ ExploreOutlined } text="Discover"/>
                    <HeaderLink Icon={ GroupsOutlined } text='People' />
                    <HeaderLink Icon={ OndemandVideoSharp } text='Learning'/>
                    <HeaderLink Icon={ BusinessCenterOutlined } text='Jobs'/>
                </div>
                {
                signInProviders[0]    
                }          
            </div>
        </header>                                             
        <main className="flex flex-col items-center mx-auto xl:flex-row m-w-screen-lg">
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

export const getServerSideProps = async (context: GetServerSidePropsContext)=>{
    try {
    const providers = await getProviders()
     return {
        props: {
            providers
        }
    } 
    } catch (e){
        console.log(e)
    }
   
}
