import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    
    return knex.schema.createTable('users', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')),
        table.string('name').notNullable(),
        table.string('email').notNullable(),
        table.string('password').notNullable(),
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

