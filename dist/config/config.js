"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecretttoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1/loginTsAndMongo',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
};
