import { createUserDAL } from "../../DAL/users/saveUser";
import printErrorMessage from "../../utils/printErrorMessage";

export const saveUserBL = async (userDetails: any) => {
    try {
        return await createUserDAL({
            ...userDetails,
            updatedBy: "Piyush",
            createdBy: "Piyush",
            updatedAt: new Date(),
            createdAt: new Date(),
        })
    } catch (error) {
        printErrorMessage('saveUserBL', error);
        return error;
    }
}
