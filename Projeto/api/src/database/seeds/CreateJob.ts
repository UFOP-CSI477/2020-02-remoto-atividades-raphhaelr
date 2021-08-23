import * as Knex from "knex";
import { v4 as uuid } from 'uuid'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("jobs").del();

    // Inserts seed entries
    await knex("jobs").insert([
        { id: uuid(), name: 'Desenvolvedor back-end', company: 'PRECATO', description: "Buscamos profissionais para o nosso time de desenvolvimento interessados em promover soluções para o negócio, que goste de trabalhar em equipe, tenha forte senso de responsabilidade, proatividade, interesse em novas experiências e bom raciocínio lógico.\n\nAtividades\n\nResponsável por auxiliar em manutenções de aplicações já desenvolvidas, integrações entre sistemas, automação de processos e desenvolvimento de novas aplicações para o negócio.\n\nNecessários\n- Lógica de programação\n- Conhecimento em banco de dados relacionais (PostgreSQL, MySQL)\n- Noções de Git\n- Interesse em aprender Typescript\n\nDiferenciais\n- Experiências com APIs REST\n- Experiências com Web Scraping\n- Conhecimento em Node.js (Javascript/Typescript)\n- Conhecimento em métodos ágeis'", city: 'Itabira', state: 'MG', email: "dev.gi@precato.com.br" },
    ]);
};
