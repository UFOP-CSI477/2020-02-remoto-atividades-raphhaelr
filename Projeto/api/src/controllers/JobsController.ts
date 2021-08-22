import { format } from 'date-fns'
import { Request, Response } from 'express'
import { database } from '../database/knexfile'
import { Job } from '../models/Job'

interface IJob {
    id: string;
    name: string;
    company: string;
    description: string;
    city: string;
    state: string;
    email: string;
    phone?: string;
    created_at: string;
}

export class JobsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, company, email, description, phone, city, state } = request.body

        const jobModel = new Job(database)

        const job = await jobModel.create({
            name,
            company,
            email,
            description,
            phone,
            city,
            state
        })

        return response.json(job)
    }

    async index(request: Request, response: Response): Promise<Response> {
        const jobModel = new Job(database)

        const jobs: IJob[] = await jobModel.findAll()

        const formattedJobs = jobs.map(job => {
            return {
                ...job,
                created_at: format(new Date(job.created_at), "dd/MM/yyyy 'às' HH:mm")
            }
        })

        return response.json(formattedJobs)
    }

    async find(request: Request, response: Response): Promise<Response> {
        const { id } = request.query

        const jobModel = new Job(database)

        const job = await jobModel.findById(String(id))

        return response.json(job)
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const jobModel = new Job(database)

        await jobModel.delete(id)

        return response.status(204).json({ status: 204, message: 'Job deleted.' })
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id, name, company, email, description, phone, city, state } = request.body

        const jobModel = new Job(database)

        const job = await jobModel.update({
            id, 
            name, 
            company, 
            email, 
            description, 
            phone, 
            city, 
            state
        })

        return response.status(204).json(job)
    }
}