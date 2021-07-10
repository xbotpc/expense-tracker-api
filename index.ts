import cors from 'cors';
import express, { Application } from "express";
import mongoose, { Schema } from 'mongoose';
import controllers from './controllers';

const port = 8080;

//App setup
const app: Application = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/expense-tracker',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log('MONGO CONNECTION SUCCESSFUL')

        // const userSchema: Schema = new Schema({
        //     name: { type: String, required: true },
        //     createdAt: { type: Date, required: true },
        //     transactions: [{
        //         type: { type: String },
        //         amount: { type: Number, }
        //     }]
        // });

        //Controllers
        app.use('/api', controllers)

        app.listen(port, () => {
            console.log('LISTENING TO PORT', port);
        });

    }).catch((err) => {
        console.error('err', err)
    });

