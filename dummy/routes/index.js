import express from 'express';
import politicaloffice from '../controllers/politicaloffice';
import politicalparty from '../controllers/politicalParty';
import Validation from '../validation/formFileldValidation';

const { PartyValidation , officeValidation } = Validation;

const router = express.Router();

const { createOffice, getAllOffice, getSingleOffice } = politicaloffice;
const {
  createParty, getAllParty, getSingleParty, updateparty, DeleteParty
} = politicalparty;

router.post('/offices', officeValidation, createOffice);
router.post('/parties', PartyValidation, createParty);
router.get('/offices', getAllOffice);
router.get('/parties', getAllParty);
router.get('/offices/:id', getSingleOffice);
router.get('/parties/:id', getSingleParty);
router.patch('/parties/:id', updateparty);
router.delete('/parties/:id', DeleteParty);

export default router;
