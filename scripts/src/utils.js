import path from 'path';
import process from 'process';
import fetch from 'node-fetch';
import simpleGit from 'simple-git';

// We want it to be ran from root not scripts
const git = simpleGit({ baseDir: path.resolve('..') });

export function get(url) {
  if (process.env.VERBOSE) {
    console.log(`GET ${url}`);
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (@WalshyDev)',
    }
  });
}

export function sendToDiscord(name, msg, publish = false) {
  fetch(process.env.DISCORD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.AUTH_TOKEN,
    },
    body: JSON.stringify({
      channel: 'cloudflare-datamining',
      publish,
      discord: {
        username: name,
        content: msg,
      }
    }),
  });
}

export async function tryAndPush(files, commitMessage, webhookUsername, webhookMessage) {
  try {
    const result = await git.status();
    if (result.files.length === 0) {
      console.log('No changes to commit');
      return;
    }

    await git.add(files);
    await git.commit(commitMessage);
    await git.push('origin', 'main');
    sendToDiscord(webhookUsername, webhookMessage, true);
  } catch(e) {
    console.error(e);
  }
}
