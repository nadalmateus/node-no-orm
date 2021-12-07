/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import CreateUserUseCase from './create-user.use-cases'

export default class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase) { }

  async handle (request: Request, response: Response) {
    const { email, name } = request.body

    await this.createUserUseCase.execute({ email, name })

    return response.send()
  }
}
