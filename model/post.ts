import { Schema, model, models } from 'mongoose'

 const PostSchema = new Schema({
   post: {
       type: String,
       required: [ true, 'You did not add a post'],
       minLength: [10, 'You must have at least 10 characters to post'] 
   },
   imageUrl:{
        type: String, 
        lowerCase: true,
        maxlength: [1000, 'your url string cannot be more than 1000 character']
   }, 
   postedBy:{
    userName: {
       type: String, 
       required: [true, 'you did not provide a value']
   }, 
   userEmail: {
       type: String,
       required: [ true, 'please provide an email of the user who posted'],
       lowerCase: true,
       match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"pls provide a valid email address"]
   },
   userImageUrl: {
       type: String,
       required: [ true, 'provide the users image url'], 
       maxLength: [ 150, '{value} is greater than 150 character'],
       lowerCase: [true, '{value} not in lowercase']
   }
  } ,  
    createdAt: {
        type: Date,
        default: Date.now().toString(),
    }
 }, { timestamps: true}) 


 export default models.Post || model('Post', PostSchema)
