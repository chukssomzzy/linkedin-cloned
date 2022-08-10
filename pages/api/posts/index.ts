
// Next.js API route support: https://nextjs.org/docs/apiroutes/introduction
import { errorHandler, InvalidMethod } from '../../../errors'
import dbConnect from '../../../lib/dbConnect'
import { Post } from '../../../model'
import StatusCodes from 'http-status-codes'
import { getToken } from 'next-auth/jwt'
import checkForJWT from '../../../lib/Authorized'

const handler = errorHandler(async (req, res)=> {
      await checkForJWT(req)
      const { method, body } = req;  
      await dbConnect() 
     switch(method){
         case 'GET':{
           const posts = await Post.find({}).sort('createdAt')
             return res.status(StatusCodes.OK).json({success: true, posts: posts})
         }
         case 'POST': {
             const post = await Post.create({...body})
             res.status(StatusCodes.CREATED).json({success: true, post: post})
         }

         default: {
             throw new InvalidMethod(`the ${method} method is not implemented in this route`)
         }
     }
})

export default handler

