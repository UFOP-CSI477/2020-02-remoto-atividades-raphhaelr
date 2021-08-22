import { compare } from 'bcryptjs'
import Knex from 'knex';
import { sign } from 'jsonwebtoken'
import authConfig from '../config/authConfig';
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

        const {
            secret,
            expiresIn,
        } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });

        delete user.password

        return { user, token }
    }
}