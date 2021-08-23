import * as Knex from "knex";
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const hashedPassword = await hash('123456', 8)

    // Inserts seed entries
    await knex("users").insert([
        { id: uuid(), name: 'Usuário', email: "usuario@email.com", password: hashedPassword },
    ]);
};

