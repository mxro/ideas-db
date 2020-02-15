import Knex from 'knex';
import { Migration } from './../migrationUtil';

export const migrations: Migration[] = [
    {
        name: '000_define_quotes',
        async up(knex: Knex) {
        },
        async down(kenx: Knex) {
        },
    }
];