import { Router } from 'express'
import { createUserController } from '../use-cases/create-user'
const routes = Router()

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

export { routes }
