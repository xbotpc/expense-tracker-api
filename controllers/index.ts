import { Router } from "express";
import { GET_TRANSACTIONS, GET_USERS, SAVE_TRANSACTION, SAVE_USER } from '../utils/routes.json';
import getTransactions from './expenses/getTransactions';
import saveTransaction from "./expenses/saveTransaction";
import getUsers from "./users/getUsers";
import saveUser from "./users/saveUser";

const router = Router();

router.post(GET_TRANSACTIONS, getTransactions);
router.post(SAVE_TRANSACTION, saveTransaction);
router.get(GET_USERS, getUsers);
router.post(SAVE_USER, saveUser);

export default router;