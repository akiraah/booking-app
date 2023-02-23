import request from 'supertest'
import { app } from '../app'

describe('sign in integration test', () => {
  it('should receive a 404 user not found error with an invalid user', async () => {
    const response = await request(app).post('/signin').send({
      email: 'test@test.com',
      password: 'password',
    })
    expect(response.statusCode).toEqual(404)
    expect(response.body).toEqual({ message: 'User not found' })
  })

  it('should return a 403, the user\'s password does not match.', async () => {
    await request(app).post('/signup').send({
      email: 'test@test.com',
      password: 'password',
    })
    // 5 second delay - slack time for mongodb response
    setTimeout(async () => {
      const response = await request(app).post('/signin').send({
        email: 'test@test.com',
        password: 'password1',
      })
      expect(response.statusCode).toEqual(403)
      expect(response.body).toEqual({ message: 'Incorrect username or password' })
    }, 5000)
  })

  it('should return a 200, user has been permitted access.', async () => {
    await request(app).post('/signup').send({
      email: 'test@test.com',
      password: 'password',
    })
    const response = await request(app).post('/signin').send({
      email: 'test@test.com',
      password: 'password',
    })
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({ message: 'User accepted.' })
  })
})
