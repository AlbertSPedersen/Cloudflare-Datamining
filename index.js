import fs from 'fs/promises';
import process from 'process';
import fetch from 'node-fetch';

const BASE = 'https://api.cloudflare.com/client/v4';

async function run() {
  console.log('Fetching...');
  await fetchAccountFlags();
  await fetchZoneFlags();

  await fetchAccountEntitlements();
  await fetchZoneEntitlements();

  await fetchZoneSettings();

  console.log('Done! :)');
}

async function fetchAccountFlags() {
  const flags = await callApi(`/accounts/${process.env.ACCOUNT_ID}/flags`);

  if (flags !== null) {
    await fs.writeFile('account_flags.json', JSON.stringify(flags, null, 4));
  }
}

async function fetchZoneFlags() {
  const flags = await callApi(`/zones/${process.env.ZONE_ID}/flags`);

  if (flags !== null) {
    await fs.writeFile('zone_flags.json', JSON.stringify(flags, null, 4));
  }
}

async function fetchAccountEntitlements() {
  const flags = await callApi(`/accounts/${process.env.ACCOUNT_ID}/entitlements`);

  if (flags !== null) {
    await fs.writeFile('account_entitlements.json', JSON.stringify(flags, null, 4));
  }
}

async function fetchZoneEntitlements() {
  const flags = await callApi(`/zones/${process.env.ZONE_ID}/entitlements`);

  if (flags !== null) {
    await fs.writeFile('zone_entitlements.json', JSON.stringify(flags, null, 4));
  }
}

async function fetchZoneSettings() {
  const flags = await callApi(`/zones/${process.env.ZONE_ID}/settings`);

  if (flags !== null) {
    await fs.writeFile('zone_settings.json', JSON.stringify(flags, null, 4));
  }
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

run();