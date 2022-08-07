import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode,
    onClick: ()=> void
}

const backdrop = ({ children, onClick}: Props) => {

  return (
    <motion.div
    className='absolute top-0 left-0 h-full w-full overflow-y-scroll bg-black/70 flex items-center justify-center z-50'
      initial={{
          opacity:0
        }}
        animate={{
            opacity:1
        }}
        exit={{
            opacity:0
        }}

    >
        { children }
    </motion.div>
  )
}

export default backdrop
