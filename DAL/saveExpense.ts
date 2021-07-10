import { model, Mongoose, Schema } from "mongoose";
import userSchema from "../Schemas/users";
import printErrorMessage from "../utils/printErrorMessage";

const userModel = model('users', userSchema);

export const updateExpenseDAL = (userID: string | number, updateParams: typeof userSchema, callback: any) => {
    try {
        userModel.findOneAndUpdate({ id: userID }, updateParams, {}, callback);
    } catch (error) {
        printErrorMessage('saveExpenseDAL', error);
        return error;
    }
}