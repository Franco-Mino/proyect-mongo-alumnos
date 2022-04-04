import morgan from "morgan"
const express = require('express')
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import passport from "passport"
import passportMiddleware from "./middleware/passport"
import privateRoutes from "./routes/private.routes";

const app = express()

//setings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get("/", function (_req: any, res: { send: (arg0: string) => void; }) {
        res.send(`la api esta en http://localhost: ${app.get('port')}`);
    })

app.use(authRoutes)
app.use(privateRoutes)


export default app;