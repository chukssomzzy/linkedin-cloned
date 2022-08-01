import React from 'react'
import { IconType } from '../../types'
type Props = IconType & {
    text: string,
    avartar?: string,
    feed ?: boolean

}

const HeaderLink = ({Icon, text, avartar, feed}: Props) => {
  return (
      <div className={` cursor-pointer flex flex-col justify-center items-center ${feed ? 'text-black opacity-60 hover:text-black dark:text-white dark:hover:text-white lg:-mb-1.5 space-y-1' : 'text-gray-500 hover:text-gray-700'}`}>
        {
          avartar ? ( <Icon className='!h-7 !w-7 lg:-mb-1 '/>)  : ( <Icon />)
        }
        <h4 className="text-sm">{text}</h4>
    </div>
  )
}

export default HeaderLink
