import { updateExpenseDAL } from "../DAL/saveExpense";
import printErrorMessage from "../utils/printErrorMessage"

export const saveExpensesBL = () => {
    try {
        updateExpenseDAL(1, {

        })
    } catch (error) {
        printErrorMessage('saveExpensesBL', error);
        return error;
    }
}