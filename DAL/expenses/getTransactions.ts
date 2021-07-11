import users from "../../models/users";
import printErrorMessage from "../../utils/printErrorMessage"

export const getTransactionsByUserID = async (id: number) => {
    try {
        return await users.find({ id })
    } catch (error) {
        printErrorMessage('getTransactionsByUserID', error);
    }
}