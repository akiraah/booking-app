import express from 'express'
import { signInRouter } from './routes/signin'
import { signUpRouter } from './routes/signup'

const app = express()
app.use(express.json())
app.use(signInRouter)
app.use(signUpRouter)

export { app }
