/**
 * Sends an admission enquiry.
 *
 * Set VITE_ENQUIRY_ENDPOINT in a .env file to a URL that accepts a JSON POST
 * (your PHP mailer, a Google Apps Script web app, Formspree, a CRM webhook, etc.).
 * Until it is set, the form only logs the enquiry in the browser console,
 * so connect it before the site goes live.
 */
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

export async function submitEnquiry(data) {
  if (!ENDPOINT) {
    console.warn('[enquiry] VITE_ENQUIRY_ENDPOINT is not set; enquiry not sent:', data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true, simulated: true };
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, source: 'vipw.in homepage', sentAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Enquiry failed with status ${res.status}`);
  return { ok: true };
}
