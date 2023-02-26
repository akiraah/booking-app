import mongoose from 'mongoose'
import { app } from './app'

const start = async () => {
  console.log('Connecting to mongodb instance...')
  try {
    const url = process.env.MONGODB_URL || '127.0.0.1'
    const port = process.env.MONGODB_PORT || 27017
    const db = process.env.MONGODB_DB || 'auth'
    console.log(`url : ${url} port ${port}`)
    await mongoose.connect(`mongodb://${url}:${port}/${db}`)
    console.log('connected to mongodb')
  } catch (error) {
    console.log(error)
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
}

start()
  .then(() => console.log('Commencing Auth Service...'))
  .catch((error) => console.log(error))
