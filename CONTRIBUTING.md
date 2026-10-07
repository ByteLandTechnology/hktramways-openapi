# Contributing to HK Tramways OpenAPI

Thank you for your interest in the **HK Tramways OpenAPI** project.

This repository provides an unofficial OpenAPI 3.0 specification for the Hong Kong Tramways mobile API.
It includes bilingual documentation in English and Traditional Chinese.

---

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Rules for Protocol Research and Fair Use

This project models an unofficial API. You must follow these rules:

1. **Record public network traffic only**:
   - Collect data only by observing public network traffic from the official mobile app.
   - Do not decompile or bypass application security controls.
   - Do not perform penetration tests or vulnerability scans on the official servers.
   - Do not perform denial-of-service attacks or automated brute-force tests.

2. **Respect server limits**:
   - The official mobile app requests data every 15 seconds.
   - Do not send high-concurrency requests or scrape data aggressively.

3. **Protect privacy**:
   - Never commit private personal data, user tokens, or passwords.

4. **No commercial or malicious use**:
   - All contributions must serve educational research and technical interoperability only.

---

## Local Development

### Requirements
- Node.js version 20.0.0 or later
- npm version 10.0.0 or later

### Installation
Run these commands to set up the repository:
```bash
git clone https://github.com/ByteLandTechnology/hktramways-openapi.git
cd hktramways-openapi
npm install
```

### Commands
- `npm run dev`: Start the Scalar live testing server (English) with hot reload.
- `npm run dev:zh`: Start the Scalar live testing server (Traditional Chinese) with hot reload.
- `npm run lint`: Validate the English OpenAPI specification with Scalar.
- `npm run lint:zh`: Validate the Traditional Chinese OpenAPI specification with Scalar.
- `npm run bundle`: Bundle the English OpenAPI specification to `dist/openapi.json`.
- `npm run bundle:zh`: Bundle the Traditional Chinese OpenAPI specification to `dist/openapi.zh-HK.json`.
- `npm run build`: Build the TypeScript SDK with Orval and TypeScript.

---

## Update the Specifications

Follow these steps to change the specifications:

1. **Base specification**:
   Edit `openapi.yaml` to update paths, schemas, and English descriptions.

2. **Traditional Chinese localization**:
   Edit `openapi.zh-HK.yaml` to update Traditional Chinese descriptions.

3. **Verify your changes**:
   Run these commands:
   ```bash
   npm run lint
   npm run lint:zh
   npm run bundle
   npm run bundle:zh
   npm run build
   ```
   Make sure that all commands complete without errors.

---

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for automated release management.
Google release-please reads these messages to update the version and `CHANGELOG.md`:

- `feat:` Add new endpoints, schemas, or SDK features (increments the minor version).
- `fix:` Correct schema errors, discrepancies, or broken links (increments the patch version).
- `docs:` Update documentation or README files.
- `chore:` Update tools, workflows, or dependencies.

---

## Pull Request Checklist

Before you submit a Pull Request, verify these items:
- [ ] `npm run lint` and `npm run lint:zh` complete without errors.
- [ ] `npm run bundle` and `npm run bundle:zh` complete without errors.
- [ ] `npm run build` completes without errors.
- [ ] If you change `openapi.yaml`, also update `openapi.zh-HK.yaml`.
- [ ] Commit messages follow the Conventional Commits format.
