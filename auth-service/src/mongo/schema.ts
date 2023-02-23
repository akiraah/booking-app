import { Schema, model } from 'mongoose'

interface IUser {
  id: string
  email: string
  password: string
}

const userSchema = new Schema<IUser>({
  id: String,
  email: String,
  password: String,
})

export const User = model<IUser>('User', userSchema)

