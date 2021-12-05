import path from 'path';
import fs from 'fs/promises';
import process from 'process';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import { tryAndPush } from './utils.js';

const BASE = 'https://api.cloudflare.com/client/v4';

async function run() {
  console.log('Fetching...');
  // Flags
  await fetchAndWrite(`/accounts/${process.env.ACCOUNT_ID}/flags`, '../data/account_flags.json');
  await fetchAndWrite(`/zones/${process.env.ZONE_ID}/flags`, '../data/zone_flags.json');

  // Entitlements
  await fetchAndWrite(`/accounts/${process.env.ACCOUNT_ID}/entitlements`, '../data/account_entitlements.json');
  await fetchAndWrite(`/zones/${process.env.ZONE_ID}/entitlements`, '../data/zone_entitlements.json');

  // Settings
  await fetchAndWrite(`/zones/${process.env.ZONE_ID}/settings`, '../data/zone_settings.json');

  console.log('Pushing!');
  await gitPush();

  console.log('Done! :)');
}

async function callApi(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'X-Auth-Email': process.env.EMAIL,
      'X-Auth-Key': process.env.API_KEY,
    }
  });

  if (res.status === 200) {
    const json = await res.json();
    if (json.success) {
      return json.result;
    }
  }
  return null;
}

async function fetchAndWrite(apiPath, filePath) {
  const json = await callApi(apiPath);

  if (json !== null) {
    await fs.writeFile(path.resolve(filePath), JSON.stringify(json, null, 4));
  }
}

async function gitPush() {
  const date = new Date();
  const commitMessage = dateFormat(date, 'd mmmm yyyy') + ` - Updated flags`;

  // Note: File paths are from root
  await tryAndPush(
    ['data/'],
    commitMessage,
    'CFData - Flags Update',
    'Pushed flags update: ' + commitMessage
  )
}

run();