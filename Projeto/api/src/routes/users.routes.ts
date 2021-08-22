import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.get('/', usersController.index)
usersRouter.get('/find', usersController.findById)
usersRouter.post('/', usersController.create)
usersRouter.delete('/:id', usersController.delete)
usersRouter.put('/', usersController.update)


export { usersRouter }