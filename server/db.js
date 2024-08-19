import pkg from 'pg';
const { Pool } = pkg;
export const pool = new Pool({
    user:"postgres",
    password:"vikram@123",
    host:"localhost",
    port:"8000",
    database:"todolist"
})
