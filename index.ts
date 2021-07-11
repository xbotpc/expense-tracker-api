import cors from 'cors';
import express, { Application } from "express";
import mongoose from 'mongoose';
import controllers from './controllers';
import dotenv from 'dotenv';

dotenv.config();

const { PORT, DB_USERNAME, DB_PASSWORD, DB_CLUSTER_LINK } = process.env;

const port = PORT;

//App setup
const app: Application = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER_LINK}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log('MONGO CONNECTION SUCCESSFUL')

        //Controllers
        app.use('/api', controllers)

        app.listen(port, () => {
            console.log('LISTENING TO PORT', port);
        });

    }).catch((err) => {
        console.error('err', err)
    });

