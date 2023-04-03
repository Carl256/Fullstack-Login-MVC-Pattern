"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const USERNAME = process.env.MONGO_USERNAME || '';
const PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URI = ` "mongodb+srv://${USERNAME}:${PASSWORD}@tutorial.fcxjp8u.mongodb.net/users?retryWrites=true&w=majority" `;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000;
exports.config = {
    mongo: {
        url: MONGO_URI,
    },
    server: {
        port: SERVER_PORT
    }
};
//# sourceMappingURL=config.js.map