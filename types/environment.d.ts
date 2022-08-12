import type { MongoClient } from "mongodb"


   namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    DATABASE_URL: string
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    NEWS_API_AUTH_KEY: string
  }
}

// declare global {
//   var _mongoClientPromise : MongoClient
// }
