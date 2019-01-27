import express from 'express';
import politicaloffice from '../controllers/politicaloffice';
import politicalparty from '../controllers/politicalParty';
import Validation from '../validation/formFileldValidation';

const {
  officeValidator, PartyValidation, validateOfficeMessage, validatePartyMessage
} = Validation;

const router = express.Router();

const { createOffice, getAllOffice, getSingleOffice } = politicaloffice;
const {
  createParty, getAllParty, getSingleParty, updateparty, DeleteParty
} = politicalparty;


router.post('/createoffice', officeValidator, validateOfficeMessage, createOffice);
router.post('/createparty', PartyValidation, validatePartyMessage, createParty);
router.get('/getalloffice', getAllOffice);
router.get('/getallparty', getAllParty);
router.get('/getsingleoffice/:id', getSingleOffice);
router.get('/getsingleparty/:id', getSingleParty);
router.put('/updateparty/:id', updateparty);
router.delete('/deleteparty/:id', DeleteParty);

export default router;
