import { Request, Response } from "express";
import getUsersBL from "../../BL/users/getUsers";
import printErrorMessage from "../../utils/printErrorMessage";
import { OK } from "../../utils/statusCodes.json";

const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await getUsersBL();
        res.status(OK);
        res.json({
            status: OK,
            data: allUsers
        });
    } catch (error) {
        printErrorMessage('getUsers', error);
        return error;
    }
}

export default getUsers;