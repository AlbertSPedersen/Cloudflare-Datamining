import path from 'path';
import fs from 'fs/promises';
import jsBeautify from 'js-beautify';
import dateFormat from 'dateformat';

import { get, sendToDiscord, tryAndPush } from './utils.js';

const beautify = jsBeautify.js;

const appScript = /(app\.[a-z0-9]+\.js)/;
const chunkIds = /(?:\w+\.\w+\((\d+)\)(?:, )?)/g;
const chunks = /{(?:"\d+":"[0-9a-f]+",)+"\d+":"[0-9a-f]+"}/;
const dashVersion = /dashVersion: ?"([0-9a-f]+)",/;

const mainPath = path.resolve('../dashboard', 'main.js');

let buildHash;

// note: this regex is not reliable
// {branch:"(.+)",isReleaseCandidate:"(true|false)",commit:"([0-9a-f]+)",env:"(.+)",builtAt:\d+,dashVersion:"([0-9a-f]+)",versions:({.+}),staticDashHost:".+"}

async function run() {
  console.log('Fetching chunks...');
  const chunks = await getChunks();

  console.log('Finding main chunk...');
  const chunk = await findMainChunk(chunks);

  if (chunk === null) {
    console.error('Failed to find main chunk!');
    return;
  }

  console.log(`Found main chunk! ${chunk.chunk} (${chunk.hash})`);

  console.log('Writing to file...');
  buildHash = chunk.hash;
  await write(chunk.code);

  console.log('Pushing!');
  await gitPush();
}

async function getChunks() {
  const response = await get('https://static.dash.cloudflare.com/');
  const text = await response.text();

  // Find `app.js` bundle
  const match = appScript.exec(text);
  if (match === null || match.length < 2) {
    sendToDiscord('CFData (Error)', 'Failed to find `app.js` bundle!');
    return;
  }

  const appFile = match[1];

  const appRes = await get(`https://static.dash.cloudflare.com/${appFile}`);
  const appJs = await appRes.text();
  
  // Trim this down to only the part we need right now
  const idSection = appJs.substring(0, appJs.indexOf('../init.ts'));

  let scriptChunkIds = [];

  let scriptChunkMatch;
  while ((scriptChunkMatch = chunkIds.exec(idSection)) !== null) {
    if (scriptChunkMatch.length >= 2) {
      scriptChunkIds.push(scriptChunkMatch[1]);
    }
  }

  // Find the chunks from the IDs
  const chunkMatch = chunks.exec(appJs);
  if (chunkMatch === null || chunkMatch.length === 0) {
    sendToDiscord('CFData (Error)', 'Failed to find chunks!');
    return;
  }

  const chunksObj = JSON.parse(chunkMatch[0]);

  const jsChunks = scriptChunkIds.map(id => chunksObj[id]);

  return jsChunks;
}

async function findMainChunk(chunks) {
  for (const chunk of chunks) {
    const res = await get(`https://static.dash.cloudflare.com/${chunk}.js`);
    const text = await res.text();

    const match = dashVersion.exec(text);
    if (match !== null) {
      return { hash: match[1], code: text, chunk, };
    }
  }
  return null;
}

async function write(data) {
  await fs.writeFile(mainPath, beautify(data,
    {
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: false,
    }
  ));
}

async function gitPush() {
  const date = new Date();
  const commitMessage = dateFormat(date, 'd mmmm yyyy') + ` - ${buildHash}`;

  // Note: File paths are from root
  await tryAndPush(
    ['dashboard/main.js'],
    commitMessage,
    'CFData - Dashboard Update',
    'Pushed dashboard: ' + commitMessage
  )
}

run();