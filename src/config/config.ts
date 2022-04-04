import {config} from "dotenv";
config()
const date = "mongodb+srv://packton235:Cralex2354195@login-mongo.5zjm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecretttoken',
    DB: {
        URI: date, 
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
}