import React from 'react'
import { IconType } from '../../types'
type Props = IconType & {
    text: string,
    avartar?: boolean,
    feed ?: boolean,
    active?: boolean,
    hidden?: boolean,

}

const HeaderLink = ({Icon, text, avartar, feed,active, hidden}: Props) => {
  return (
      <div className={`${hidden && 'hidden md:inline-flex'} cursor-pointer flex flex-col justify-center items-center ${feed ? 'text-black opacity-60 hover:text-black dark:text-white dark:hover:text-white lg:-mb-1.5 space-y-1' : 'text-gray-500 hover:text-gray-700'}${active && '!text-black dark:!text-white'}`}>
        {
          avartar ? ( <Icon className='!h-7 !w-7 lg:-mb-1 '/>)  : ( <Icon />)
        }
          <h4 className={`text-sm ${feed && 'hidden lg:flex w-full justify-center mx-auto'}`}>{text}</h4>
          {
              active && (
                  <span className='hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full'>
                      
                  </span>
              )    
          }
    </div>
  )
}

export default HeaderLink
