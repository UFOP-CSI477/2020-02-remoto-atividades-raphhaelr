import { Request, Response, Router } from 'express'
import { jobsRouter } from './jobs.routes'
import { sessionsRouter } from './sessions.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)
router.use('/jobs', jobsRouter)

export default router