import { compare } from 'bcryptjs'
import Knex from 'knex';
export class Session {
    constructor(private database: Knex) { }

    async create(email: string, password: string): Promise<any> {
        const [user] = await this.database('users').select('*').where('email', email).returning('*')

        if (!user) {
            throw new Error('Incorrect email or password combination.')
        }

        const verifyPassword = await compare(password, user.password)

        if (!verifyPassword) {
            throw new Error('Incorrect email or password combination.')
        }

        delete user.password

        return user
    }
}