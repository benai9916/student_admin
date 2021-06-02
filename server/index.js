import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import studentDetailRouter from './routes/students.js';
import adminRouter from "./routes/user.js";

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/addDetail', studentDetailRouter)
app.use("/admin", adminRouter);

app.get('/', (req, res) => {
    res.send('API started')
})

const PORT =  5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runnnig on PORT:  ${PORT}`)))
    .catch((error) => console.log('Encounter Error => ',error));

mongoose.set('useFindAndModify', false);

