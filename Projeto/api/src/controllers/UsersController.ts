import { Request, Response } from 'express'
import { User } from '../models/User'
import { database } from '../database/knexfile'

interface IUser {
    id: string;
    name: string;
    email: string;
}

export class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        const userModel = new User(database)

        const user = await userModel.create({ name, email, password })

        return response.json(user)
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.query

        const userModel = new User(database)

        const user = await userModel.findById(String(id))

        return response.json(user)
    }

    async index(request: Request, response: Response): Promise<Response> {
        const userModel = new User(database)

        const users: IUser[] = await userModel.findAll()

        return response.json(users)
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const userModel = new User(database)

        await userModel.delete(id)

        return response.status(204).json({ status: 204, message: 'User deleted.' })
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id, name, email, password } = request.body

        const userModel = new User(database)

        const user = await userModel.update({ id, name, email, password })

        return response.status(200).json(user)

    }
}