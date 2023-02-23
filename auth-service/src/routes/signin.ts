import express, { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { User } from '../mongo/schema'
import { isEmpty } from 'lodash'

const router = express.Router()

interface UserRequestBody {
  email: string
  password: string
}

router.post(
  '/signin',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: UserRequestBody = req.body
    const query = User.where({ email })
    const user = await query.findOne()
    if (isEmpty(user)) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'User not found' })
    }
    if (user!.password !== password) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: 'Incorrect username or password' })
    }
    // return a JWT Auth token later.
    res.status(StatusCodes.OK)
    res.send({ message: 'User accepted.' })
  }
)

export { router as signInRouter }
