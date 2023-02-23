import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongoClient: MongoMemoryServer
beforeAll(async () => {
  // mongoClient = await MongoMemoryServer.create()
  // const uri = mongoClient.getUri()
  const testMongoInstanceUrl = 'mongodb://127.0.0.1/test_users'
  await mongoose.connect(testMongoInstanceUrl)
  // .then(() => console.log('disconnected to test mongo instance'))
  // .catch((e) => console.log(e))
})

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase()
})

afterAll(async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
})
