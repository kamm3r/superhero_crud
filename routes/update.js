'use strict';

import express from 'express';
import Tietovarasto from '../db/dbLayer.js';

const router = express.Router();
const varasto = new Tietovarasto();

router.get('/:id', async (req, res) => {
  let result;
  let sankariId = req.params.id;
  try {
    let sankari = await varasto.hae(sankariId);
    res.render('form', {
      paaotsikko: 'Paivita sankari',
      otsikko: 'Paivita sankarin tiedot',
      toiminto: '/paivita',
      sankariID: { value: sankari.sankariID, readonly: 'readonly' },
      nimi: { value: sankari.nimi, readonly: '' },
      superominaisuus: { value: sankari.superominaisuus, readonly: '' },
      varuste: { value: sankari.varuste, readonly: '' },
      vahvuus: { value: sankari.vahvuus, readonly: '' },
    });
  } catch (error) {
    result = await varasto.haeKaikki();
    res.render('index', { status: error, result: result, sankari: null });
  }
});

router.post('/', async (req, res) => {
  let result;
  try {
    let sankariId = req.body;
    const status = await varasto.paivita(sankariId);
    result = await varasto.haeKaikki();
    res.render('index', { status, result: result, sankari: null });
  } catch (error) {
    result = await varasto.haeKaikki();
    res.render('index', { status: error, result: result, sankari: null });
  }
});

export default router;
