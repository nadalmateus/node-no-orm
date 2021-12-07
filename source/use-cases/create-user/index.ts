import { UsersRepositories } from '../../repositories/implementations/users.repositories'
import CreateUserController from './create-user.controller'
import CreateUserUseCase from './create-user.use-cases'

const createUserRespository = new UsersRepositories()
const createUserUseCase = new CreateUserUseCase(createUserRespository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
