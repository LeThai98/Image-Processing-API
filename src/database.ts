import dotenv from 'dotenv';
import Pool from 'pg';

//The dotenv.config() line initializes the environment variables.
dotenv.config();

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASS,
} = process.env;

//pool is a connection to the database.
const client = new Pool.Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS
});

export default client;
