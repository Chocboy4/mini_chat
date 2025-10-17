import dotenv from 'dotenv';
dotenv.config();


export default {
    ENVIRONMENT : process.env.ENVIRONMENT || 'development',
    PORT : Number(process.env.PORT || 3000),
    databaseName : process.env.DATABASE_NAME || 'mini_whatsapp',
    databaseUsername : process.env.DATABASE_USERNAME || 'root',
    databasePassword : process.env.DATABASE_PASSWORD,
    databaseHost : process.env.DATABASE_HOST || 'localhost',
    databasePort : Number(process.env.DATABASE_PORT || 3306),
    databaseDialect : process.env.DATABASE_DIALECT || 'mysql',
}