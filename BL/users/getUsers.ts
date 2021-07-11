import { getUsersDAL } from "../../DAL/users/getUsers"
import printErrorMessage from "../../utils/printErrorMessage"

const getUsersBL = async () => {
    try {
        return await getUsersDAL();
    } catch (error) {
        printErrorMessage('getUsersBL', error);
        return error;
    }
}

export default getUsersBL;