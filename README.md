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

The production build uses Nitro's Node server preset. Local artwork and the product catalogue are imported from `src/assets`.

## Checks

```sh
npm run lint
npm test
```
