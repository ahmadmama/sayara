# Sayara — buy, sell & share cars

A friendly, modern marketplace front-end. Static site: `index.html` + `assets/`.

## Security notes
- Strict Content-Security-Policy (`script-src 'self'`, `style-src 'self'`, no inline scripts/styles, no third-party requests; fonts are self-hosted).
- All user text is HTML-escaped; stored data is re-validated against a whitelist every time it is loaded.
- Phone links, colors, ids and photos are pattern-checked; photos are re-encoded (strips EXIF/GPS) and limited by type and size.
- Anti-clickjacking frame guard; `rel="noopener noreferrer"` on outbound links; `no-referrer` policy.
- `_headers` adds HSTS, `frame-ancestors 'none'`, `nosniff`, Permissions-Policy on hosts that support custom headers (Netlify, Cloudflare Pages).

Listings and favorites are currently stored in each visitor's own browser (`localStorage`).
