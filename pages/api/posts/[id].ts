 import { errorHandler, InvalidMethod } from '../../../errors'
import dbConnect from '../../../lib/dbConnect'
import { Post } from '../../../model'
import StatusCodes from 'http-status-codes'
 import checkForJWT from '../../../lib/Authorized'

const handler = errorHandler(async (req, res)=> {
      await checkForJWT(req)
      const { method, body:{user, email, picture, name}, query:{id} } = req; 
      await dbConnect() 
     switch(method){
         case 'DELETE':{
             const post = await Post.findOneAndDelete({_id: id, userEmail: email})
             res.status(StatusCodes.OK).json({success: true, post})
         }
         case 'POST': {

         }

         default: {
             throw new InvalidMethod(`the ${method} method is not implemented in this route`)
         }
     }
})

export default handler                               
