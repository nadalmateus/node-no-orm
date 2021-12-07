/* eslint-disable no-useless-constructor */
import User from '../../entities/User'
import IUsersRepositories from '../../repositories/implementations/i.user.repositories'

interface CreateUserDTO {
name: string;
email: string
}

export default class CreateUserUseCase {
  constructor (private usersRepository: IUsersRepositories) { }

  async execute ({ name, email }: CreateUserDTO) {
    let user = new User()
    user = Object.assign({
      name,
      email
    })

    await this.usersRepository.create(user)
  }
}
