'use strict';

import http from 'http';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {
  heroesRoute,
  heroRoute,
  postRoute,
  updateRoute,
  deleteRoute,
} from './routes/index.js';

const app = express();
const port = 3005;
const server = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static('build'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', heroesRoute);

// app.use(heroRoute);

app.use('/lisaa', postRoute);

app.use('/paivita', updateRoute);

app.use('/poista', deleteRoute);

server.listen(port, () => console.log(`http://localhost:${port}`));
