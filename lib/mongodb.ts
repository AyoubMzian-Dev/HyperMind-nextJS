import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let clientPromise: Promise<typeof mongoose>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<typeof mongoose>
  }

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = mongoose.connect(uri, options)
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = mongoose.connect(uri, options)
}

export async function connectToDatabase() {
  try {
    await clientPromise
  } catch (error) {
    console.error('Error connecting to the database:', error)
    throw error
  }
} 