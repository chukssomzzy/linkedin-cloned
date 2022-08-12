import { GetServerSidePropsContext,NextPage } from 'next'
import Head from 'next/head'
import { Feeds, Header,Modal,Sidebar, Widget } from '../Components/IndexComponents'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { modalState, modalTypeState } from '../atoms/modalAtom'
import { getPosts } from '../api/posts'
import { ArticleType, PostType } from '../types'
import { getNews } from '../api/News'

  type Props ={
      posts: PostType[],
      articles: ArticleType[]
  }


  const Home: NextPage<Props> = ({posts, articles}) => {
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
        <main className="flex justify-center px-4 gap-x-5 sm:px-12">
            <div className="flex flex-col gap-5 md:flex-row">
                {/* sidebar*/}
                  <Sidebar />
                  <Feeds posts={posts} />
                {/*Feeds*/}
            </div>
            {/* Widget*/}
                <Widget articles={articles}/>
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
    /* fetching all post from server */
    const posts = await getPosts()

    /* Google News Api */
    const news = await getNews()

    return {
        props: {
            session,
            posts: posts.posts,
            articles: news.articles
        }
    }
}
