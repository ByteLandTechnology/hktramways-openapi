# HK Tramways OpenAPI (Unofficial)

English | [繁體中文](README.zh-HK.md)

---

This repository provides an unofficial OpenAPI 3.0 specification for the Hong Kong Tramways mobile backend API.
It includes a TypeScript SDK and build tools.

The authors wrote this specification by observing public network protocol traffic for technical interoperability research.
All schema definitions match live server responses from the production environment.

---

## Disclaimer and Terms of Use

1. **Non-Affiliation**:
   "Hong Kong Tramways", "Ding Ding", and related brand names are trademarks of Hong Kong Tramways, Limited.
   This project is an independent community project.
   It has no connection to Hong Kong Tramways, Limited.
2. **Trademark Notice**:
   All trademarks belong to their respective owners.
   This project uses these marks under nominative fair use for identification only.
3. **Research purpose**:
   Use this specification for learning, research, and technical interoperability only.
4. **Request frequency and fair use**:
   The official server does not publish service level agreements.
   The official mobile app requests data every 15 seconds.
   Do not use this specification for commercial operations, automated scraping, or denial-of-service tests.
5. **No Warranty and Limitation of Liability**:
   The authors provide this specification and client code "as is" without warranty of any kind.
   The authors do not host or operate the official servers.
   The authors accept no liability for any service interruptions or legal consequences from using this project.

---

## TypeScript SDK

Install the package with npm:

```bash
npm install hktramways-openapi
```

### Client Usage Example

```typescript
import { getTramETA } from 'hktramways-openapi';

// Call the generated function directly to fetch real-time tram arrivals
const res = await getTramETA('76W', 'westbound');

if (res.data?.success) {
  for (const eta of res.data.data.etas) {
    console.log(`Destination: ${eta.destination} | Arriving in: ${eta.arriving_in} min`);
  }
}
```

---

## Quick Start

### Local Development

Run these commands to set up and build the project:

```bash
git clone https://github.com/ByteLandTechnology/hktramways-openapi.git
cd hktramways-openapi
npm install

npm run dev         # Start the Scalar live testing server (English)
npm run dev:zh      # Start the Scalar live testing server (Traditional Chinese)
npm run lint        # Validate OpenAPI document structure (English)
npm run lint:zh     # Validate OpenAPI document structure (Traditional Chinese)
npm run bundle      # Bundle English OpenAPI specification to JSON
npm run bundle:zh   # Bundle Traditional Chinese OpenAPI specification to JSON
npm run build       # Build TypeScript SDK
```

### Quick cURL Test

Run this command in your terminal to fetch live arrival data:

```bash
curl -H "Accept: application/json" \
  "https://api.hktramways.com/api/v1/tram-eta/76W/westbound"
```

---

## Endpoints Overview

Base URL: `https://api.hktramways.com/api/v1`

| Endpoint | Method | Description |
|---|---|---|
| `/home` | `GET` | Static data: stations, terminus stations, districts, news tags, and banners |
| `/tram-eta/{stationCode}/{direction}` | `GET` | Real-time arrival estimates (`direction`: `westbound` or `eastbound`) |
| `/news` · `/news/{id}` | `GET` | News articles with pagination |
| `/notices` · `/notices/general` · `/notices/{stationCode}` | `GET` | Service notices and passenger alerts |
| `/tram-tour` · `/tour-events/{id}` | `GET` | Sightseeing tram tour events and schedules |
| `/app-config` | `GET` | Application configuration and route line colors |

---

## Release Automation

The repository uses Google's [Release Please](https://github.com/googleapis/release-please) (`.github/workflows/release.yml`) to automate semantic versioning, changelog generation, and GitHub releases based on Conventional Commits.

---

## License

This project is licensed under the [MIT License](LICENSE).
