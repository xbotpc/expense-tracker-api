import { Router } from "express";
import { GET_EXPENSES, SAVE_EXPENSE } from '../utils/routes.json';
import getExpenses from './expenses/getExpenses';
import saveExpenses from "./expenses/saveExpenses";

const router = Router();

router.get(GET_EXPENSES, getExpenses);
router.post(SAVE_EXPENSE, saveExpenses);

export default router;