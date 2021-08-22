import { Request, Response } from 'express'
import { Job } from '../models/Job'
import { database } from '../database/knexfile'
import { Session } from '../models/Session'

export class SessionsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body

        const sessionModel = new Session(database)

        const { user, token } = await sessionModel.create(email, password)

        return response.json({ user, token })
    }
}