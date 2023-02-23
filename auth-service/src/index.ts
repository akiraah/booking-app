import mongoose from 'mongoose'
import { app } from './app'

const start = async () => {
  console.log('Connecting to mongodb instance...')
  try {
    await mongoose.connect('mongodb://127.0.0.1/auth')
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

// extract to the auth-service file
// app.post('/signin', (req: Request, res: Response) => {
//   res.set('Accept', 'application/json')
//   console.log(`body: ${JSON.stringify(req.body)}`)
//   const { email, password } = req.body
//   // if (users[email]) {
//   res.status(200)
//   res.send({ message: 'User logged in.' })
//   // }
//   // res.status(400)
//   // res.send({ message: 'User not found.' })
// })

// app.post('/signup', async (req: Request, res: Response) => {
//   res.set('Accept', 'application/json')
//   const { email, password } = req.body
//   if (users[email]) {
//     res.status(409)
//     res.json({
//       message: 'User already exists',
//     })
//   }
//   const resp = await userSignUp({ email, password })
//   console.log(`resp: ${JSON.stringify(resp)}`)
//   users[email] = {
//     email,
//     password,
//   }
//   res.send({ message: 'Response Okay' })
// })
