import { Request, Response } from "express";
import { saveUserBL } from "../../BL/users/saveUser";
import printErrorMessage from "../../utils/printErrorMessage";
import { OK } from "../../utils/statusCodes.json";

const saveUser = async (req: Request, res: Response) => {
    try {
        console.log('req', req.body);

        await saveUserBL(req.body);
        res.status(OK);
        res.json({
            status: OK,
        });
    } catch (error) {
        printErrorMessage('saveUser', error);
        return error;
    }
}

export default saveUser;