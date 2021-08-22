import { format } from 'date-fns';
import { ICreateJobDTO } from 'dtos/ICreateJobDTO';
import { ICreateUserDTO } from 'dtos/ICreateUserDTO'
import Knex from 'knex';

interface IJob {
    id: string;
    name: string;
    company: string;
    description: string;
    city: string;
    state: string;
    email: string;
    phone?: string;
    created_at?: string;
 }

export class Job {
    constructor(private database: Knex) { }

    async create({ name, company, email, description, phone, city, state }: ICreateJobDTO): Promise<any> {
        const jobs = await this.database('jobs').insert({ name, company, email, description, phone, city, state }).returning('*')

        return jobs
    }

    async findById(id: string): Promise<any> {
        const [job] = await this.database('jobs').select('*').where('id', id)

        return job
    }

    async findAll(): Promise<any> {
        const jobs: IJob[] = await this.database('jobs').select('*').orderBy('created_at', 'desc')

        const formattedJobs = jobs.map(job => {
            let description = job.description.length > 120 ? `${job.description.substr(0, 120)}...` : job.description


            return {
                ...job,
                description
            }

        })

        return formattedJobs
    }

    async findByName(name: string): Promise<any> {

        const jobs = await this.database('jobs').select('*').where('name', 'like', `%${name.toLowerCase()}%`)

        const formattedJobs = jobs.map(job => {
            return {
                ...job,
                created_at: format(job.created_at, "dd/MM/yyyy 'às' HH:MM")
            }
        })

        return formattedJobs
    }

    async delete(id: string): Promise<void> {
        await this.database('jobs').where('id', id).delete()
    }

    async update(job: IJob): Promise<void> {
        await this.database('jobs').where('id', job.id).update(job)
    }
}