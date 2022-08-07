import { GetServerSidePropsContext,NextPage } from 'next'
import Head from 'next/head'
import { Feeds, Header,Modal,Sidebar } from '../Components/IndexComponents'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { modalState, modalTypeState } from '../atoms/modalAtom'


const Home: NextPage = () => {
    /* --- Hooks ---- */ 
    const router = useRouter()
    const { status} = useSession({
        required: true,
        onUnauthenticated(){
           router.push('/home')
        }
    })
    const [ modalOpen, setModalOpen ] = useRecoilState(modalState)
     const [modalType] = useRecoilState( modalTypeState )


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
                  <Feeds />
                {/*Feeds*/}
            </div>
            {/* Widget*/}

            <AnimatePresence>
                { modalOpen && (
                        <Modal handleClose={()=> setModalOpen(false)} type={modalType}/>
                )}
            </AnimatePresence>
        </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async (context:GetServerSidePropsContext )=>{
       //check.is user is authrnticated 
    const session = await getSession(context)
    if(!session) return {
        redirect: {
            permanent:false,
            destination:'/home',
        }
    }

    return {
        props: {
            session
        }
    }
}
