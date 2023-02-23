export interface User {
  id: string
  email: string
  password: string
}

type UserWithoutPassword = Omit<User, 'password'>

export interface UserResponse extends UserWithoutPassword {
  statusCode: number
  message: string
}
