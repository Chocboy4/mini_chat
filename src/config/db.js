import { seqquelize } from 'sequelize';
import config from './index.js';

const sequelize = new Sequelize(
    config.databaseName,
    config.databaseUsername,
    config.databasePassword,
    {
        dialect : config.databaseDialect,
        port : config.databasePort,
        host : config.databaseHost,
        logging : (msg) => console.log(msg) 
    }
)


export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

export default sequelize;