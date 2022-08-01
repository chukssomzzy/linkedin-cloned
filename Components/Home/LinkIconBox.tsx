import { ArrowForwardIosRounded } from '@mui/icons-material'
import React from 'react'

type Props = {
    text: string
}

const LinkIconBox = ({text}: Props) => {
  return (
      <div className='intent'>
   <h2 className="text-xl">{text}</h2>
    <ArrowForwardIosRounded className="text-gray-700" />
            </div>
  )
}

export default LinkIconBox
