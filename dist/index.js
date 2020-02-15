"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const migrations_1 = require("./migrations");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const knex = knex_1.default({
            client: 'sqlite3',
            connection: { filename: ':memory:' }
        });
        yield migrations_1.runMigrations({ knex });
        console.log(yield knex.raw('SELECT 1;'));
        yield knex.destroy();
    });
}
main().then(() => console.log('done')).catch((e) => { throw e; });
//# sourceMappingURL=index.js.map