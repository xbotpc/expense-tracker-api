import { Request, Response } from "express";
import { saveExpensesBL } from "../../BL/saveExpenses";
import printErrorMessage from "../../utils/printErrorMessage";
import { movieResponses } from '../../utils/responseMessages';
import { INTERNAL_SERVER_ERROR, OK } from '../../utils/statusCodes.json';

const saveExpenses = (req: Request, res: Response) => {
    try {

        saveExpensesBL()
        res.status(OK);
        res.json({
            status: OK,
            message: movieResponses[OK]
        });
    } catch (error) {
        printErrorMessage('saveExpenses', error);
        res.status(INTERNAL_SERVER_ERROR);
        res.json({
            status: INTERNAL_SERVER_ERROR,
            data: [],
            message: movieResponses[INTERNAL_SERVER_ERROR]
        });
    }
}

export default saveExpenses;