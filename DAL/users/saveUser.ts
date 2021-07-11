import users from "../../models/users";
import printErrorMessage from "../../utils/printErrorMessage"

export const createUserDAL = async (params:any) => {
    try {
        return await users.create(params);
    } catch (error) {
        printErrorMessage('createUserDAL', error);
    }
}