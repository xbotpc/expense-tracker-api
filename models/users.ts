import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    transactions: [{
        id: { type: Number, required: true },
        name: { type: String, required: false },
        description: { type: String, required: false },
        categoryName: { type: String, required: true },
        isExpense: { type: Boolean, required: true, default: true },
        amount: { type: Number, required: true },
        transactionDate: { type: Date, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
    }]
});

export default model('users', userSchema);