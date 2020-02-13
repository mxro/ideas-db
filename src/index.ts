import Knex from 'knex';

async function main() {
    const knex = Knex({
        client: 'sqlite3',
        connection: {filename: ':memory:'}
    });

    console.log(await knex.raw('SELECT 1;'));

    await knex.destroy();
}

main().then(() => console.log('done')).catch((e) => { throw e; });