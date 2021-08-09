'use strict';

import fs from 'fs/promises';

export async function readDb(jsondb) {
  try {
    const data = await fs.readFile(jsondb, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function writeDb(jsondb, data) {
  try {
    await fs.writeFile(jsondb, JSON.stringify(data, null, 4), {
      encoding: 'utf8',
      flag: 'w',
    });
    return true;
  } catch (error) {
    return false;
  }
}
