import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('jobs', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')),
            table.string('name').notNullable(),
            table.string('company').notNullable(),
            table.text('description').notNullable(),
            table.string('city').notNullable(),
            table.string('state').notNullable(),
            table.string('email').notNullable(),
            table.string('phone').nullable(),
            table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('jobs')
}

