'use strict';

import express from 'express';
import Tietovarasto from '../db/dbLayer.js';

const router = express.Router();
const varasto = new Tietovarasto();

router.get('/:id', async (req, res) => {
  let result;
  try {
    let sankariId = req.params.id;
    const status = await varasto.poista(sankariId);
    result = await varasto.haeKaikki();
    res.render('index', { status, result: result, sankari: null });
  } catch (error) {
    result = await varasto.haeKaikki();
    res.render('index', { status: error, result: result, sankari: null });
  }
});

export default router;
