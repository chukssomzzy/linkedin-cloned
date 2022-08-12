import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { PostType } from '../../types'
import { modalState, modalTypeState } from '../../atoms/modalAtom'
import { useRecoilState } from 'recoil'
import {
    CloseRounded,
    MoreHorizRounded,
    ThumbUpOffAltRounded,
    ThumbUpOffAltOutlined,
    DeleteRounded,
    ReplyRounded,
    CommentOutlined
} from '@mui/icons-material'
import { handlePostState, getPostState } from '../../atoms/postsAtom'
import { useSession } from 'next-auth/react'
import TimeAgo from 'timeago-react'
import { trunc } from '../../utils'
import { deletePost } from '../../api/posts'

type Props = {
    post: PostType,
    modalPost?: boolean,
}


const Post = ({ post, modalPost, }: Props) => {
    /* --- Hooks --- */
    const [modalType, setModalType] = useRecoilState(modalTypeState)
    const [modalOpen, setModalOpen] = useRecoilState(modalState)
    const [postState, setPostState] = useRecoilState(getPostState)
    const [handlePost, setHandlePost] = useRecoilState(handlePostState) 
    const [showPost, setShowPost] = useState(false)
    const [liked, setLiked] = useState(false)
    const { data: session  } = useSession()


    /* --- functions & callbacks --- */ 
    
    const onDeletePost = async ()=>{
        const resp = await deletePost(post?._id)
        setModalOpen(false)
        setHandlePost(true)
    }
    /* --- JSX +-- */

    return (
        <div className={`bg-white dark:bg-[#1d2226] ${modalPost ? 'rounded-r-lg' : 'rounded-lg'} space-y-2 py-2.5 border-gray-300 dark:border-none`}>
            <div className="flex items-center px-2.5 cursor-pointer">
                <Avatar src={post.postedBy.userImageUrl} className='!h-10 !w-10 cursor-pointer' />
                <div className="ml-2 mr-auto leading-none">
                    <h6 className="font-medium hover:text-blue-500 hover:underline">{post?.postedBy.userName}</h6>
                    <p className="text-sm dark:text-white/75 opacity-80">{post.postedBy.userEmail}</p>                {/* Time Ago stamps */}
                      <TimeAgo 
                          datetime = {post.createdAt}
                          className = "text-xs dark:text-white/75 opacity-80"
                    />
                </div>
                {
                    modalPost ? (
                        <IconButton onClick={() => setModalOpen(false)}>
                            <CloseRounded className='dark:text-white/75 h-7 w-7' />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => setModalOpen(false)}>
                            <MoreHorizRounded className='dark:text-white/75 h-7 w-7' />
                        </IconButton>
                    )
                }
            </div>
            {
                post.post && (
                    <div className='py-2.5 break-all md:break-normal '>
                        {
                            (modalPost || showPost) ? (
                                <p onClick={() => setShowPost(false)}>{post.post}</p>
                            ) : (
                                <p onClick={() => setShowPost(true)}>{trunc(post.post, 150)}</p>
                            )
                        }
                    </div>
                )
            }
            {
                post.imageUrl && !modalPost && (
                    <img
                        src={post.imageUrl}
                        alt="post image"
                        className='w-full cursor-pointer' onClick={() => {
                            setModalOpen(true)
                            setModalType('gifYouUp')
                            setPostState(post)
                        }} />
                )
            }
            <div className='flex justify-evenly items-center dark:border-t border-gray-600/80 mx-2.5 pt-2 text-black/60 dark:text-white/75'>

                {
                    modalPost ? (
                        <button className='postButton'>
                            <CommentOutlined />
                            <h4>Comment</h4>
                        </button>
                    ) : (
                    <button
                        className={`postButton ${liked && 'text-blue-500'}`}
                        onClick={()=> setLiked((prevValue)=> !prevValue)}
                    >
                      {
                          liked ? (
                             <ThumbUpOffAltRounded className='-scale-x-100'/>
                          ) : (
                          <ThumbUpOffAltOutlined className='-scale-x-100' />
                          ) 
                        }
                        
                    </button>
                    )
                }
                {
                   (session?.user?.email === post.postedBy.userEmail )   ? (
                       <button 
                           className='postButton hover:text-red-400'
                           onClick= {onDeletePost}
                       >
                               <DeleteRounded />
                           <h4> Delete Post</h4>
                       </button>
                   ) : (
                   <button className='postButton'>
                      <ReplyRounded className='-scale-x-100'/>
                       <h4>Share</h4>
                   </button>
                   )
                }
            </div>
        </div>
    )
}

export default Post                              
