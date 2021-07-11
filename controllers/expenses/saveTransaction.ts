import { Request, Response } from "express";
import { addTransactionBL } from "../../BL/expenses/saveTransactions";
import printErrorMessage from "../../utils/printErrorMessage";
import { movieResponses } from '../../utils/responseMessages';
import { INTERNAL_SERVER_ERROR, OK } from '../../utils/statusCodes.json';

const saveTransaction = (req: Request, res: Response) => {
    try {
        addTransactionBL(1, req.body);
        res.status(OK);
        res.json({
            status: OK,
            message: movieResponses[OK]
        });
    } catch (error) {
        printErrorMessage('saveExpense', error);
        res.status(INTERNAL_SERVER_ERROR);
        res.json({
            status: INTERNAL_SERVER_ERROR,
            message: movieResponses[INTERNAL_SERVER_ERROR]
        });
    }
}

export default saveTransaction;