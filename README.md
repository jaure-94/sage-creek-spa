# Sage Creek

## Local Development

Requirements: Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Vite prints the local development URL when the server is ready.

## Production

```sh
npm run build
npm start
```

Local production builds use Nitro's Node server preset. Vercel builds use Nitro's Vercel preset and Build Output API. Local artwork and the product catalogue are imported from `src/assets`.

## Checks

```sh
npm run lint
npm test
```
