import Knex, { Config } from 'knex'

const config: Config = {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'ufop_jobs',
        user: 'postgres',
        password: 'raphael'
    },
    migrations: {
        tableName: 'migrations',
        directory: 'migrations',
    },
    useNullAsDefault: true
}

export const database = Knex(config)

export default config