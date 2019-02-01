import express from 'express';
const router = express.Router();

router.route('/*').all();
export router;