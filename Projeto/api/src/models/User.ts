import { ICreateUserDTO } from 'dtos/ICreateUserDTO'
import Knex from 'knex';
import { hash } from 'bcryptjs'
interface IUser {
    id: string;
    name: string;
    email: string;
    password?: string;
}
export class User {
    constructor(private database: Knex) { }

    async create({ name, email, password }: ICreateUserDTO): Promise<any> {
        const verifyUserWithSameEmail = await this.database('users').select('*').where('email', email)

        if (verifyUserWithSameEmail.length > 0) {
            throw new Error('This email is already used.')
        }

        const hashedPassword = await hash(password, 8)

        const newUser = {
            name,
            email,
            password: hashedPassword
        }

        const [user] = await this.database('users').insert(newUser).returning('*')

        delete user.password

        return user
    }

    async findById(id: string): Promise<any> {
        const [user] = await this.database('users').select('*').where('id', id)

        if (!user) {
            throw new Error('This user does not exist.')
        }

        delete user.password

        return user
    }

    async findAll(): Promise<any> {
        const users = await this.database('users').select('*')

        return users
    }

    async delete(id: string): Promise<void> {
        await this.database('users').where('id', id).delete()
    }

    async update(user: IUser): Promise<IUser> {
        const [verifyUser] = await this.database('users').select('*').where('id', user.id)

        if (!verifyUser) {
            throw new Error('This user does not exist.')
        }

        let hashedPassword

        if (user.password) {
            hashedPassword = await hash(user.password, 8)
        }

        const newUser = {
            name: user.name,
            email: user.email,
            password: hashedPassword
        }

        const [updatedUser]: IUser[] = await this.database('users').where('id', user.id).update(newUser).returning('*')

        delete updatedUser.password

        return updatedUser
    }
}