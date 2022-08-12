import axios from "axios"
import { PostType } from "../types"
const baseURL = process.env.NEXTAUTH_URL
export const api = axios.create({
    baseURL
})

export const getPosts = async () => {
    const response = await api.get('api/posts')
    return response.data
}

export const postPost = async (post: PostType ) => {
    const  response = await api.post('api/posts',{
        ...post
    })
    return response.data
}   

export const deletePost = async (postId?: string ) => {
    const response = await api.delete(`api/posts/${postId}`)
    return response.data
}
