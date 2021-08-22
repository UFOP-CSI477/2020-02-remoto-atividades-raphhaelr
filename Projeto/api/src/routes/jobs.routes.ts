import { JobsController } from '../controllers/JobsController'
import { Request, Response, Router } from 'express'

const jobsRouter = Router()
const jobsController = new JobsController()

jobsRouter.get('/', jobsController.index)
jobsRouter.get('/find', jobsController.find)
jobsRouter.post('/', jobsController.create)
jobsRouter.delete('/:id', jobsController.delete)
jobsRouter.put('/', jobsController.update)

export { jobsRouter }