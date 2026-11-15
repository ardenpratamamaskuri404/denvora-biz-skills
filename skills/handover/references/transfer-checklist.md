# Safe Account & Ownership Transfer Checklist

Guidance for freelancers and agencies transferring control of digital assets to clients without security leaks.

## 1. Domain & DNS
- [ ] Transfer domain ownership directly to the client's registrar account (e.g. Cloudflare, Namecheap).
- [ ] Ensure billing contacts and primary email point to the client, not the agency.
- [ ] Remove agency credit cards from auto-renew settings.

## 2. Hosting & Cloud Platforms
- [ ] **Vercel / Netlify / Render:** Invite client as Team Owner, then transfer team or project ownership.
- [ ] **VPS / Cloud (DigitalOcean, AWS, GCP):** Create client IAM user / project transfer.
- [ ] Remove temporary agency SSH keys from authorized_keys.

## 3. Repositories (GitHub / GitLab)
- [ ] In repository settings: **Transfer Ownership** to client's organization or user account.
- [ ] Remove agency team members from repository admin roles.
- [ ] Verify CI/CD environment secrets are updated with client's production keys.

## 4. Payment Gateways (Midtrans, Stripe, Xendit)
- [ ] Ensure client's business KYC and bank disbursement accounts are verified.
- [ ] Switch API keys in environment variables from Sandbox to Live.
- [ ] Remove agency test webhooks and credentials.

## 5. Security & Passwords
- [ ] Never send passwords over WhatsApp or plain email.
- [ ] Use one-time share links (e.g., 1Password, Bitwarden, Privnote) for initial master credentials.
- [ ] Advise client to immediately rotate passwords after receiving initial access.
