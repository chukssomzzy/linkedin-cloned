import { Db, MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URI as string
let dbName = process.env.MONGO_DB

let cachedClient: Promise<MongoClient> & void | null = null
let cachedDB: Db | null = null

if (!uri) {
    throw new Error(
        'please define the mongodb uri inside the .env.development file'
    )
}
if (!dbName) {
    throw new Error(
        'define MONGO_DB as DB name in your .env.development file'

    )
}

export const connectToDataBase = async () => {
    if (cachedClient && cachedDB) {
        return ({
            client: cachedClient,
            db: cachedDB
        })
    }
    const client = MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDB = db
    return { client, db }
}
