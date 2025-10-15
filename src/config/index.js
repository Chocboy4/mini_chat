import dotenv from 'dotenv';
dotenv.config();


export default {
    ENVIRONMENT : process.env.ENVIRONMENT || 'development',
    databaseName : process.env.DATABASE_NAME,
    databaseUsername : process.env.DATABASE_USERNAME,
    databasePassword : process.env.DATABASE_PASSWORD,
    databaseHost : process.env.DATABASE_HOST,
    databasePort : process.env.DATABASE_PORT,
    databaseDialect : process.env.DATABASE_DIALECT
}