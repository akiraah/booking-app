import express, { Request, Response } from 'express'
import { User } from '../mongo/schema'
import { StatusCodes } from 'http-status-codes'
import { v4 as uuidv4 } from 'uuid'
import { isEmpty } from 'lodash'

const router = express.Router()

interface UserRequestBody {
  email: string
  password: string
}

router.post('/signup', async (req: Request, res: Response) => {
  const { email, password }: UserRequestBody = req.body
  const user = new User({
    id: uuidv4(),
    email,
    password,
  })
  try {
    const query = User.where({ email })
    const existingUser = await query.find()
    if (!isEmpty(existingUser)) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: 'User already exist' })
    }
    await user.save()
    return res.status(StatusCodes.CREATED).json({ message: 'User created' })
  } catch (error) {
    console.log(error)
  }
})

export { router as signUpRouter }
