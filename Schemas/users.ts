import { Schema } from "mongoose";

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, required: true },
    transactions: [{
        type: { type: String },
        amount: { type: Number },
        date: { type: Date }
    }]
});

export default userSchema;