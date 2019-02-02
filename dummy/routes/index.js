import express from 'express';
import Politicaloffice from '../controllers/controller.politicaloffice';
import Politicalparty from '../controllers/controller.politicalParty';
import Validation from '../validation/formFileldValidation';

const { PartyValidation } = Validation;

const router = express.Router();

const { createOffice, getAllOffice, getSingleOffice } = Politicaloffice;
const {
  createParty, getAllParty, getSingleParty, updateparty, DeleteParty
} = Politicalparty;

router.post('/offices', createOffice);
router.post('/parties', PartyValidation, createParty);
router.get('/offices', getAllOffice);
router.get('/parties', getAllParty);
router.get('/offices/:id', getSingleOffice);
router.get('/parties/:id', getSingleParty);
router.patch('/parties/:id', updateparty);
router.delete('/parties/:id', DeleteParty);

export default router;