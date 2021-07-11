import { Request, Response } from "express";
import getTransactionsBL from "../../BL/expenses/getTransactions";
import printErrorMessage from "../../utils/printErrorMessage";
import { movieResponses } from '../../utils/responseMessages';
import { INTERNAL_SERVER_ERROR, OK } from '../../utils/statusCodes.json';

const getTransactions = async (req: Request, res: Response) => {
    try {
        const allTransactions = await getTransactionsBL(req.body.id);
        res.status(OK);
        res.json({
            status: OK,
            data: allTransactions.transactions,
            message: movieResponses[OK]
        });
    } catch (error) {
        printErrorMessage('getTransactions', error);
        res.status(INTERNAL_SERVER_ERROR);
        res.json({
            status: INTERNAL_SERVER_ERROR,
            data: [],
            message: movieResponses[INTERNAL_SERVER_ERROR]
        });
    }
}

export default getTransactions;