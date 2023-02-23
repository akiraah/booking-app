import mongoose from 'mongoose'

export const mongoClient = async (address: string) => {
  await mongoose.connect(address)
}
