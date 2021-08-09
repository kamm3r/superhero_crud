'use strict';

import express from 'express';
import Tietovarasto from '../db/dbLayer.js';

const router = express.Router();
const varasto = new Tietovarasto();

router.post('/', (req, res) => {
  if (!req.body) return res.sendStatus(500);
  let sankariID = req.body.id;
  varasto
    .hae(sankariID)
    .then((sankari) => res.render('index', { sankari }))
    .catch((error) => lahetaVirheSivu(res, error));
});

export default router;
