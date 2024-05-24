import exp from 'constants';
import dotenv from 'dotenv';
import Pool from 'pg';

dotenv.config();

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASS,
    DB_PORT
} = process.env;

const client = new Pool.Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT
});

export default client;
