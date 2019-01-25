import express from 'express';
import politicaloffice from '../controllers/politicaloffice';
import politicalparty from '../controllers/politicalParty';
import Validation from '../validation/formFileldValidation';

const { officeValidator, PartyValidation } = Validation;

const router = express.Router();

const { createOffice, getAllOffice, getSingleOffice } = politicaloffice;
const {
  createParty, getAllParty, getSingleParty, updateparty, DeleteParty
} = politicalparty;


router.post('/api/v1/createoffice', officeValidator, createOffice);
router.post('/api/v1/createparty', PartyValidation, createParty);
router.get('/api/v1/getalloffice', getAllOffice);
router.get('/api/v1/getallparty', getAllParty);
router.get('/api/v1/getsingleoffice/:id', getSingleOffice);
router.get('/api/v1/getsingleparty/:id', getSingleParty);
router.put('/api/v1/updateparty/:id', updateparty);
router.delete('/api/v1/deleteparty/:id', DeleteParty);

export default router;
