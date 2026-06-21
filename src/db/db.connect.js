import mongoose from 'mongoose';
import config from '../config/env.config.js';

const dbConnect = async () => {
    try {
        const dbUri = config.db_uri;

        await mongoose.connection.on('connected', () => {
            console.log('mongoose connected successfully');
        });

        await mongoose.connection.on('error', (err) => {
            console.error('mongoose connection failure', err.message);
        });

        await mongoose.connect(dbUri);
    } catch (error) {
        console.error('mongoose connection error', error.message);
        process.exit(1);
    }
};

export default dbConnect;
