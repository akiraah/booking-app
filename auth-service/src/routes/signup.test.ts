import request from 'supertest'
import { app } from '../app'

describe('sign up integration test', () => {
  it('should receive a 202, user created response.', async () => {
    const response = await request(app).post('/signup').send({
      email: 'test@test.com',
      password: 'password',
    })
    expect(response.statusCode).toEqual(201)
    expect(response.body).toEqual({ message: 'User created' })
  })

  it('should return a 403, the user\'s password does not match.', async () => {
    await request(app).post('/signup').send({
      email: 'test@test.com',
      password: 'password',
    })
    const response = await request(app).post('/signup').send({
      email: 'test@test.com',
      password: 'password',
    })
    expect(response.statusCode).toEqual(409)
    expect(response.body).toEqual({ message: 'User already exist' })
  })
})
