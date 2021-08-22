import { SessionsController } from '../controllers/SessionsController'
import { Request, Response, Router } from 'express'

const sessionsRouter = Router()
const sessionsController = new SessionsController()

sessionsRouter.post('/', sessionsController.create)

export { sessionsRouter }