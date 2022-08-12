import React, { useEffect, useState } from 'react'
import { Input, Post } from '.'
import { getPosts } from '../../api/posts'
import { handlePostState, useSSRPostsState } from '../../atoms/postsAtom'
import { useRecoilState } from 'recoil'
import { PostType } from '../../types'

type Props = {
    posts: PostType[]
}

const Feed = ({ posts }: Props) => {
    /* --- Hooks --- */
    const [realTimePost, setRealTimePost] = useState(posts)
    const [handlePost, setHandlePost] = useRecoilState(handlePostState)
   // const [useSSRPosts, setUseSSRPosts] = useState(useSSRPostsState)
    /* --- useEffect --- */
    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts()
            console.log(posts)
            setRealTimePost(posts.posts)
            setHandlePost(false)
          //  setUseSSRPosts(false)
        }
        handlePost && fetchPosts()

    }, [handlePost])

    /* --- functions --- */

    /* ---- Function Jsx --- */
    console.log(realTimePost)
    const postList =  realTimePost?.map(post=>(
        <Post post={post} key={post._id}/>
    ))

     /* --- Jsx -- */
  return (
        <div className='max-w-lg pb-24 space-y-6'>
            <Input />
            {/* Posts */}
            {/* Hybrid Comptnents here */}
            {
            postList    
            }
        </div>
    )
}

export default Feed                  
