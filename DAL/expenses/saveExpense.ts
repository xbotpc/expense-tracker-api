import userModel from "../../models/users";
import printErrorMessage from "../../utils/printErrorMessage";

export const addTransactionDAL = async (id: number, params: any) => {
    try {
        return await userModel.findOneAndUpdate({
            id: id
        }, {
            $push:
                { transactions: params }
        });
    } catch (error) {
        printErrorMessage('addTransactionDAL', error);
        return error;
    }
}