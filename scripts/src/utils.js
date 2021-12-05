import process from 'process';
import fetch from 'node-fetch';

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

export function sendToDiscord(msg) {
  fetch(process.env.DISCORD_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: msg,
    }),
  });
}