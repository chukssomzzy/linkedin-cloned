 import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from '../../../lib/mongodb'

export default NextAuth({
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt'
  },

 
  // jwt: {
  //   // A secret to use for key generation (you should set this explicitly)
  //   secret: process.env.JWT_SECRET,
  //   // Set to true to use encryption (default: false)
  //   encryption: true,
   
  // },
  pages: {
     signIn: '/home',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

 
   
  // Enable debug messages in the console if you are having problems
  debug: false,
})
 