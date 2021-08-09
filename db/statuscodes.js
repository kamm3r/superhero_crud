'use strict';

export const STATUSKOODIT = {
  OHJELMAVIRHE: 0,
  EI_LOYTYNYT: 1,
  EI_LISATTY: 2,
  LISAYS_OK: 3,
  JO_KAYTOSSA: 4,
  EI_PAIVITETTY: 5,
  PAIVITYS_OK: 6,
  EI_POISTETTU: 7,
  POISTO_OK: 8,
};

export const STATUSVIESTIT = {
  OHJELMAVIRHE: () => ({
    viesti: 'Anteeksi! Virhe ohjelmassa',
    statuskoodi: STATUSKOODIT.OHJELMAVIRHE,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  EI_LOYTYNYT: (id) => ({
    viesti: `Annetulla id:lla ${id} ei loytynyt`,
    statuskoodi: STATUSKOODIT.EI_LOYTYNYT,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  EI_LISATTY: () => ({
    viesti: 'Henkiloa ei lisatty',
    statuskoodi: STATUSKOODIT.EI_LISATTY,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  LISAYS_OK: (id) => ({
    viesti: `Henkilo ${id} lisattiin`,
    statuskoodi: STATUSKOODIT.LISAYS_OK,
    bg: 'bg-indigo-800',
    oval: 'bg-indigo-500',
    tyyppi: 'info',
  }),
  JO_KAYTOSSA: (id) => ({
    viesti: `Id ${id} oli jo kaytossa`,
    statuskoodi: STATUSKOODIT.JO_KAYTOSSA,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  EI_PAIVITETTY: () => ({
    viesti: 'Tietoja ei muutettu',
    statuskoodi: STATUSKOODIT.EI_PAIVITETTY,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  PAIVITYS_OK: (id) => ({
    viesti: `Henkilon ${id} tiedot paivitettiin`,
    statuskoodi: STATUSKOODIT.PAIVITYS_OK,
    bg: 'bg-indigo-800',
    oval: 'bg-indigo-500',
    tyyppi: 'info',
  }),
  EI_POISTETTU: () => ({
    viesti: 'Annetulla id:lla ei loytynyt henkiloa. mitaabn ei poistettu',
    statuskoodi: STATUSKOODIT.EI_POISTETTU,
    bg: 'bg-red-800',
    oval: 'bg-red-500',
    tyyppi: 'virhe',
  }),
  POISTO_OK: (id) => ({
    viesti: `Henkilo ${id} poistettiin`,
    statuskoodi: STATUSKOODIT.POISTO_OK,
    bg: 'bg-indigo-800',
    oval: 'bg-indigo-500',
    tyyppi: 'info',
  }),
};
