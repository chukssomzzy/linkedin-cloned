import axios from "axios"
import { PostType } from "../types"
const baseURL = process.env.NEXTAUTH_URL
export const api = axios.create({
    baseURL
})

export const getPosts = async () => {
    try{
    const response = await api.get('api/posts')
    return response.data
    } catch(e){
        console.log(e)
    }
}

export const postPost = async (post: PostType ) => {
    try{
    const  response = await api.post('api/posts',{
        ...post
    })
    return response.data
    } catch (e){
        console.log(e)
    }
}   

export const deletePost = async (postId?: string ) => {
    try{
    const response = await api.delete(`api/posts/${postId}`)
    return response.data
    } catch (e){
        console.log(e)
    }
}
