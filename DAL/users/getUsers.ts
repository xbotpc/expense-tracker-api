import users from "../../models/users";
import printErrorMessage from "../../utils/printErrorMessage"

export const getUsersDAL = async () => {
    try {
        return await users.find();
    } catch (error) {
        printErrorMessage('getUserseDal', error);
    }
}

export const getUserByID = async (id: number) => {
    try {
        return await users.findOne({ id });
    } catch (error) {
        printErrorMessage('getUserByID', error);
        return error;
    }
}