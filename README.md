# formfusion-docs

Documentation and landing page for [FormFusion](https://formfusion.vercel.app) — a React form library with built-in validation, input masking and error handling.

Built with [Next.js](https://nextjs.org) (pages router), TypeScript and SCSS modules.

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values (never commit `.env.local`):

| Variable             | Used by                      | Purpose                               |
| -------------------- | ---------------------------- | ------------------------------------- |
| `MAILERLITE_API_KEY` | `src/pages/api/subscribe.ts` | Newsletter subscription (server only) |

On your deployment platform (e.g. Vercel), set the same variables in the project settings.

> **Note:** the key previously lived in the source code and is still present in git history — rotate it in the MailerLite console.

## Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start the development server   |
| `npm run build`    | Production build               |
| `npm run start`    | Serve the production build     |
| `npm run lint`     | Run ESLint                     |
| `npm run analyze`  | Build with the bundle analyzer |
| `npm run prettier` | Format the repository          |
