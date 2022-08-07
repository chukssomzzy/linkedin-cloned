import React from 'react'
import { useSession as useSession } from 'next-auth/react'
import { Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { IndexButtonData } from '../../utils'
import ButtonIndex from './ButtonIndex'
import { useRecoilState } from 'recoil'
import { modalState, modalTypeState } from '../../atoms/modalAtom'

type Props = {}

const Input = (props: Props) => {
    /* --- Hooks --- */
    const { data: session } = useSession()

    const [modalOpen, setModalOpen] = useRecoilState(modalState)
    const [modalType, setModalType] = useRecoilState(modalTypeState)
    /* --- JSX var and constanst --- */

    const buttonMapVar = IndexButtonData.map(({ title, wrap, icon, iconStyle }) => (
        <ButtonIndex Icon={icon} wrap={wrap} iconStyle={iconStyle} type='button'>
            {title}
        </ButtonIndex>
    ))
    return (
        <div className='bg-white dark:bg-[#1d2226] round-lg p-3 space-y-3 border-gray-300 dark:border-none'>
            <div className="flex items-center space-x-2">
                <Avatar src={` ${session?.user?.image} `} className='!h-10 !w-10 !cursor-pointer' />
                <motion.button
                    whileHover={{
                        scale: 1.01
                    }}
                    whileTap={{
                        scale: 0.99
                    }}
                    onClick={() => {
                        setModalOpen(true)
                        setModalType('dropIn')
                    }}
                    className='rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left'
                    type='button'
                >
                    Start a post
                </motion.button>
            </div>
            <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10">
                {
                    buttonMapVar
                }
            </div>
        </div>
    )
}

export default Input                                          
