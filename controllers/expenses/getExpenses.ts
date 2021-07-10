import { Request, Response } from "express";
import { CAR, FOOD, MEDICAL, MOBILE_RECHARGE, PET, SALARY } from "../../utils/constants";
import printErrorMessage from "../../utils/printErrorMessage";
import { movieResponses } from '../../utils/responseMessages';
import { INTERNAL_SERVER_ERROR, OK } from '../../utils/statusCodes.json';

const getExpenses = (req: Request, res: Response) => {
    try {
        res.status(OK);
        res.json({
            status: OK,
            data: [{
                sectionHeader: 'Today',
                data: [
                    {
                        categoryName: CAR,
                        amount: 2000,
                    },
                    {
                        categoryName: PET,
                        amount: 8000,
                    },
                    {
                        categoryName: MOBILE_RECHARGE,
                        amount: 400,
                    },
                ]
            },
            {
                sectionHeader: 'Yesterday',
                data: [
                    {
                        categoryName: SALARY,
                        amount: 40000,
                    },
                    {
                        categoryName: MEDICAL,
                        amount: 470,
                    },
                    {
                        categoryName: FOOD,
                        amount: 10,
                    },
                    {
                        categoryName: MEDICAL,
                        amount: 470,
                    }
                ]
            },
            {
                sectionHeader: '23/05/2021',
                data: [
                    {
                        categoryName: FOOD,
                        amount: 10,
                    },
                    {
                        categoryName: MEDICAL,
                        amount: 470,
                    },
                ]
            },
            {
                sectionName: '22/05/2021',
                data: [
                    {
                        categoryName: FOOD,
                        amount: 10,
                    },
                    {
                        categoryName: MEDICAL,
                        amount: 470,
                    },
                    {
                        categoryName: FOOD,
                        amount: 10,
                    },
                    {
                        categoryName: MEDICAL,
                        amount: 470,
                    },
                    {
                        categoryName: FOOD,
                        amount: 10,
                    }
                ]
            }],
            message: movieResponses[OK]
        });
    } catch (error) {
        printErrorMessage('movies API', error);
        res.status(INTERNAL_SERVER_ERROR);
        res.json({
            status: INTERNAL_SERVER_ERROR,
            data: [],
            message: movieResponses[INTERNAL_SERVER_ERROR]
        });
    }
}

export default getExpenses;