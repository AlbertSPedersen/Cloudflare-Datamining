import path from 'path';
import fs from 'fs/promises';
import process from 'process';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import { tryAndPush } from './utils.js';

async function run() {
  const result = {};

  const typesRes = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      'X-Auth-Email': process.env.EMAIL_2,
      'X-Auth-Key': process.env.API_KEY_2,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          __schema {
            types {
              name
            }
          }
        }
      `,
    }),
  });

  const types = await typesRes.json();

  let query = `query {\n`;
  for (const type of types.data.__schema.types) {
    query += `  ${type.name}: __type(name:"${type.name}") {\n`
          +  `    fields {\n`
          +  `      name\n`
          +  `      description\n`
          +  `    }\n`
          +  `  }\n`;

    result[type.name] = {};
  }

  query += `}`;

  const fieldsRes = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      'X-Auth-Email': process.env.EMAIL_2,
      'X-Auth-Key': process.env.API_KEY_2,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const fields = await fieldsRes.json();

  for (const type of Object.keys(result)) {
    console.log(fields);
    const typeFields = fields.data[type].fields;

    for (const field of typeFields) {
      result[type][field.name] = field.description;
    }
  }

  await fs.writeFile(path.resolve('../data/graphql.json'), JSON.stringify(result, null, 4));

  const prefix = dateFormat(new Date(), 'd mmmm yyyy');
  await tryAndPush(
    ['data/graphql.json'],
    `${prefix} - GraphQL Data was updated!`,
    'CFData - GraphQL Data Update',
    'Pushed GraphQL Data: ' + prefix
    )
}

run();
