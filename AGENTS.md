# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React + TypeScript portfolio app. Application code lives in `src/`, with the entry point in `src/main.tsx` and the app shell in `src/App.tsx`. Reusable UI sections are in `src/components/` (`Hero.tsx`, `Projects.tsx`, `Contact.tsx`, etc.). Global styles are split between `src/index.css` and `src/App.css`. Static public assets belong in `public/`, while imported component assets can live in `src/assets/`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Vite development server.
- `npm run build`: run TypeScript project checks with `tsc -b`, then produce the production build with Vite.
- `npm run lint`: run ESLint over the repository.
- `npm run preview`: serve the latest production build locally for verification.

Run `npm install` after dependency changes so `package-lock.json` stays current.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Name component files and exported components in PascalCase, for example `Navbar.tsx` and `AboutMe`. Keep helper variables and functions in camelCase. Follow the existing style: two-space indentation, concise JSX, and Tailwind utility classes for layout and styling. Prefer existing icon dependencies before adding packages.

TypeScript is strict and rejects unused locals and parameters, so remove dead code before committing. ESLint uses JavaScript, TypeScript, React Hooks, and React Refresh rules.

## Testing Guidelines

No automated test framework is currently configured. Before submitting changes, run `npm run lint` and `npm run build`. For UI changes, also run `npm run dev` or `npm run preview` and manually verify desktop and mobile layouts, navigation, animations, and contact/project sections.

If tests are added later, place them next to the relevant component or in a dedicated `src/__tests__/` directory, and use names like `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, lowercase summaries such as `fix ts error` and `perf optimization`. Keep subjects direct and specific, preferably under 72 characters.

Pull requests should include a concise description, commands run, and screenshots or recordings for visual changes. Link related issues, and call out dependency, asset, animation, or deployment-sensitive changes.

## Security & Configuration Tips

Do not commit secrets, API keys, or local environment files. Keep generated output such as `dist/` out of version control. For hosted media, document the source and verify production builds load assets correctly.
