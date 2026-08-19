import { GoogleAuth } from 'google-auth-library';
import { readFileSync } from 'fs';

const PROJECT = 'return-to-quality--project';
const rulesSource = readFileSync('./firestore.rules', 'utf8');

const auth = new GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/firebase']
});
const client = await auth.getClient();

// 1. Create a new ruleset
console.log('Creating ruleset...');
const createRes = await client.request({
  url: `https://firebaserules.googleapis.com/v1/projects/${PROJECT}/rulesets`,
  method: 'POST',
  data: {
    source: {
      files: [{ name: 'firestore.rules', content: rulesSource }]
    }
  }
});
const rulesetName = createRes.data.name;
console.log('Ruleset created:', rulesetName);

// 2. Release it to cloud.firestore
console.log('Releasing to cloud.firestore...');
try {
  await client.request({
    url: `https://firebaserules.googleapis.com/v1/projects/${PROJECT}/releases/cloud.firestore`,
    method: 'PATCH',
    data: { release: { name: `projects/${PROJECT}/releases/cloud.firestore`, rulesetName } }
  });
  console.log('✓ Release updated');
} catch (e) {
  // If release doesn't exist, create it
  if (e.response && e.response.status === 404) {
    console.log('Release not found, creating...');
    await client.request({
      url: `https://firebaserules.googleapis.com/v1/projects/${PROJECT}/releases`,
      method: 'POST',
      data: { name: `projects/${PROJECT}/releases/cloud.firestore`, rulesetName }
    });
    console.log('✓ Release created');
  } else {
    throw e;
  }
}
console.log('\n✅ FIRESTORE RULES DEPLOYED — app is now live!');
