import React from 'react'
import Image from 'next/image'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { HeaderLink } from "../Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
type Props = {}



const Header = ({ }: Props) => {
    /* JSX */
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()
    console.log(theme)


    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className='sticky top-0 z-40 bg-white dark:bg-[#1d2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg'>
            {/* left section */}
            <div className="flex item-center space-x-2 w-full max-w-xs cursor-pointer">
                {mounted && (
                    resolvedTheme === 'dark' ? (
                        <Image src="https://rb.gy/bizvqj" width={45} height={45} />
                    ) : (
                        <Image src="https://rb.gy/druvu3" width={55} height={55} />
                    )
                )
                }
                <div className="flex space-x-1 items-center dark:md:bg-gray-700 py-2.5 px-4 rounded w-full ">

                    <SearchRoundedIcon />
                    <input type="text" placeholder='search' className='hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow' />
                </div>
            </div>
            {/* right section */}
            <div className="flex space-x-6 items-center">
                <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
                <HeaderLink Icon={GroupIcon} text="My Network" feed />
                <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
                <HeaderLink Icon={ChatIcon} text="Messaging" feed />
                <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
                <HeaderLink Icon={Avatar} text="Me" feed avartar hidden />
                <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
                {/*  toggle functionality with framer very cool shit */}
                {
                    mounted && (
                        <div onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'}`}>
                            <span className="absolute left-0">
                                🌜
                            </span>
                            {/* framer component */}
                            <motion.div className='w-5 h-5 bg-white shadow-lg rounded-full z-40'
                                layout
                                transition={{
                                    type: 'spring',
                                    stiffness: 700,
                                    damping: 30
                                }}
                            />
                            <span className="absolute right-0">
                                🌞
                            </span>
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Header
