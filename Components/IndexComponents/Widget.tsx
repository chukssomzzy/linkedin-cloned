import { FiberManualRecordRounded, InfoRounded } from '@mui/icons-material'
import React from 'react'
import TimeAgo from 'timeago-react'
import Image from 'next/image'
import { ArticleType } from '../../types'

type Props = {
    articles: ArticleType[]
}

const Widget = ({articles}: Props) => {

    /* function and variables */ 
    const articleNum = 5
    /* --- Jsx Map --- */
    const articleMapJsx = articles.slice(0, articleNum).map((article)=>(
        <div key={`${article.url}`} className='flex items-center px-10 py-4 space-x-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/20'>
                <FiberManualRecordRounded className='!h-2 !w-2'/>
            <div>
                <h5 className="max-w-xs pr-10 text-sm font-medium truncate">
                    <a href={article?.url} target='_blank' referrerPolicy='no-referrer'>
                        {article.title}
                    </a>
                    
                </h5>
                <TimeAgo 
                    datetime = {`${article.publishedAt}`}
                    className='text-xs mt-0.5 dark:text-white/75 opacity-80'
                />
            </div>
        </div>
    ))
    /* --- JSX ---- */
    
  return (
      <div className='hidden space-y-2 xl:inline'>
          {/* News */}
          <div className="bg-white dark:bg-[#1d2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
              <div className='flex items-center justify-between font-bold py-2.5'>
            <h4>LINKEDIN News</h4>
              <InfoRounded className='w-5 h-5'/>                                                              </div>
          </div>
           <div className='space-y-2'>
               {
                   articleMapJsx
               }
           </div>

          {/* Ads */}
          <div className="bg-white dark:bg-[#1d2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none ">
              <div className="relative w-full h-full">
                  <Image
                      src='https://rb.gy/kbfeaa'
                      layout='fill'
                      objectFit='contain'
                      priority
                  />
              </div>
          </div>
    </div>
  )
}

export default Widget

