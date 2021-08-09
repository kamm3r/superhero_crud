'use strict';

import { STATUSKOODIT, STATUSVIESTIT } from './statuscodes.js';
import {
  haeKaikkiVarastosta,
  haeYksiVarastosta,
  lisaaVarasto,
  paivitaVarasto,
  poistaVarasto,
} from './dbHelperfunctions.js';

export default class Tietovarasto {
  get STATUSKOODIT() {
    return STATUSKOODIT;
  }

  haeKaikki() {
    return haeKaikkiVarastosta();
  }

  hae(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(STATUSVIESTIT.EI_LOYTYNYT('<tyhja>'));
      } else {
        const result = await haeYksiVarastosta('sankariID', id);
        if (result) {
          resolve(result);
        } else {
          reject(STATUSVIESTIT.EI_LOYTYNYT(id));
        }
      }
    });
  }

  lisaa(sankari) {
    return new Promise(async (resolve, reject) => {
      if (await haeYksiVarastosta('sankariID', sankari.sankariID)) {
        reject(STATUSVIESTIT.JO_KAYTOSSA(sankari.sankariID));
      } else if (await lisaaVarasto(sankari)) {
        resolve(STATUSVIESTIT.LISAYS_OK(sankari.sankariID));
      } else {
        reject(STATUSVIESTIT.EI_LISATTY());
      }
    });
  }

  paivita(sankari) {
    return new Promise(async (resolve, reject) => {
      if (await paivitaVarasto(sankari)) {
        resolve(STATUSVIESTIT.PAIVITYS_OK(sankari.sankariID));
      } else {
        reject(STATUSVIESTIT.EI_PAIVITETTY());
      }
    });
  }

  poista(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(STATUSVIESTIT.EI_LOYTYNYT('<tyhja>'));
      } else {
        if (await poistaVarasto(id)) {
          resolve(STATUSVIESTIT.POISTO_OK(id));
        } else {
          reject(STATUSVIESTIT.EI_POISTETTU());
        }
      }
    });
  }
}
