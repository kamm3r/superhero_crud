'use strict';

import { readDb, writeDb } from './readWrite.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jsonDb = join(__dirname, 'db.json');

export async function haeKaikkiVarastosta() {
  return readDb(jsonDb);
}

export async function haeYksiVarastosta(key, value) {
  const tulosTaulukko = await readDb(jsonDb);
  return tulosTaulukko.find((sankari) => sankari[key] == value) || null;
}

export async function lisaaVarasto(uusiSankari) {
  const varasto = await readDb(jsonDb);
  if (varasto.find((sankari) => sankari.sankariID == uusiSankari.sankariID)) {
    return false;
  } else {
    varasto.push({
      sankariID: +uusiSankari.sankariID,
      nimi: uusiSankari.nimi,
      superominaisuus: uusiSankari.superominaisuus,
      varuste: uusiSankari.varuste,
      vahvuus: uusiSankari.vahvuus,
    });
    return await writeDb(jsonDb, varasto);
  }
}

export async function paivitaVarasto(sankari) {
  let varasto = await readDb(jsonDb);
  const vanhaSankari = varasto.find(
    (vanha) => vanha.sankariID == sankari.sankariID
  );
  if (vanhaSankari) {
    Object.assign(vanhaSankari, {
      sankariID: +sankari.sankariID,
      nimi: sankari.nimi,
      superominaisuus: sankari.superominaisuus,
      varuste: sankari.varuste,
      vahvuus: sankari.vahvuus,
    });
    return await writeDb(jsonDb, varasto);
  }
  return false;
}

export async function poistaVarasto(id) {
  const varasto = await readDb(jsonDb);
  const idx = varasto.findIndex((sankari) => sankari.sankariID == id);
  if (idx < 0) return false;
  varasto.splice(idx, 1);
  return await writeDb(jsonDb, varasto);
}
