import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.MONGO_USERNAME || '';
const PASSWORD = process.env.MONGO_PASSWORD || '';

const MONGO_URI = ` "mongodb+srv://${USERNAME}:${PASSWORD}@tutorial.fcxjp8u.mongodb.net/users?retryWrites=true&w=majority" `;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000;

export const config = {
    mongo:{
    url: MONGO_URI,
    },

    server: {
    port: SERVER_PORT
    }
}
