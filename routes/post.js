'use strict';

import express from 'express';
import Tietovarasto from '../db/dbLayer.js';

const router = express.Router();
const varasto = new Tietovarasto();

router.get('/', (req, res) =>
  res.render('form', {
    paaotsikko: 'Lisaa Sankari',
    otsikko: 'Lisaa uusi Sankari',
    toiminto: '/lisaa',
    sankariID: { value: '', readonly: '' },
    nimi: { value: '', readonly: '' },
    superominaisuus: { value: '', readonly: '' },
    varuste: { value: '', readonly: '' },
    vahvuus: { value: '', readonly: '' },
  })
);

router.post('/', async (req, res) => {
  if (!req.body) return res.sendStatus(500);
  let result;
  try {
    let sankariId = req.body;
    const status = await varasto.lisaa(sankariId);
    result = await varasto.haeKaikki();
    res.render('index', { status, result: result, sankari: null });
  } catch (error) {
    result = await varasto.haeKaikki();
    res.render('index', { status: error, result: result, sankari: null });
  }
});

export default router;
