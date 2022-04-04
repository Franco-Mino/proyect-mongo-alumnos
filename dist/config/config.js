"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// este repo solo muestra de manera local el funcionamiento del back.
const date = "mongodb://127.0.0.1/loginTsAndMongo";
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecretttoken',
    DB: {
        URI: date,
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
};
