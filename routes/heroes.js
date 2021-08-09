'use strict';

import express from 'express';
import Tietovarasto from '../db/dbLayer.js';

const router = express.Router();
const varasto = new Tietovarasto();

router.get('/', (req, res) => {
  varasto
    .haeKaikki()
    .then((result) =>
      res.render('index', { result, sankari: null, status: null })
    );
});

router.post('/', async (req, res) => {
  if (!req.body) return res.sendStatus(500);
  let result;
  try {
    let sankariID = req.body.id;
    const sankari = await varasto.hae(sankariID);
    result = await varasto.haeKaikki();

    res.render('index', { result: result, sankari: [sankari], status: null });
  } catch (error) {
    result = await varasto.haeKaikki();
    res.render('index', { status: error, result: result, sankari: null });
  }
});

export default router;
