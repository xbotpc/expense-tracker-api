import { getUserByID, getUsersDAL } from "../../DAL/users/getUsers"
import printErrorMessage from "../../utils/printErrorMessage"

const getTransactionsBL = async (id: number) => {
    try {
        return await getUserByID(id);
    } catch (error) {
        printErrorMessage('getUsersBL', error);
        return error;
    }
}

export default getTransactionsBL;