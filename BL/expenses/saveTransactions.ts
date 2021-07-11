import { addTransactionDAL } from "../../DAL/expenses/saveExpense";
import printErrorMessage from "../../utils/printErrorMessage";

export const addTransactionBL = async (userID: number, transactionDetails: any) => {
    try {
        return await addTransactionDAL(userID, {
            ...transactionDetails,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    } catch (error) {
        printErrorMessage('addTransactionBL', error);
        return error;
    }
}