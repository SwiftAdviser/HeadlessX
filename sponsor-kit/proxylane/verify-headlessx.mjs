import { isIP } from 'node:net';

const base = new URL(process.env.HEADLESSX_URL || 'http://127.0.0.1:38473');
const key = process.env.HEADLESSX_API_KEY;
if (!key) throw new Error('Load HEADLESSX_API_KEY privately first');
if (base.protocol !== 'https:' && !(base.protocol === 'http:' && ['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname))) {
  throw new Error('Use HTTPS for a remote HeadlessX instance');
}
try {
  const response = await fetch(new URL('/api/operators/website/scrape/html-js', base), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': key },
    body: JSON.stringify({ url: 'https://api.ipify.org?format=json', options: { timeout: 30000 } }),
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) throw new Error(`HeadlessX returned HTTP ${response.status}`);
  const data = await response.json();
  const match = typeof data.html === 'string' && data.html.match(/"ip"\s*:\s*"([^"<>]+)"/);
  if (!match || !isIP(match[1])) throw new Error('No valid exit IP in the browser response');
  console.log(`Browser exit IP: ${match[1]}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : 'Verification failed');
  process.exitCode = 1;
}
