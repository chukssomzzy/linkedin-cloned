import type { MongoClient } from "mongodb"


   namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    MONGODB_URI: string
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    NEWS_API_AUTH_KEY: string
    MONGO_DB: string
  }
}

// declare global {
//   var _mongoClientPromise : MongoClient
// }
