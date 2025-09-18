# QuickBP — Business Planning Dashboard

QuickBP is a React + TypeScript single page application that presents a holistic view of a company's strategic plan. It brings together north-star metrics, quarterly objectives, milestone tracking, SWOT analysis, and an execution-ready action plan in one responsive workspace.

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Preview the production build locally

   ```bash
   npm run preview
   ```

## Project structure

```
├── public/              # Static assets (favicon)
├── src/
│   ├── components/      # UI building blocks for each dashboard section
│   ├── data/            # Domain data powering the dashboard
│   ├── types/           # Shared TypeScript type definitions
│   ├── App.tsx          # Page composition
│   ├── App.css          # Component-level styling
│   ├── index.css        # Global styles and theme tokens
│   └── main.tsx         # React entry point
├── index.html           # Root HTML file used by Vite
├── package.json         # Scripts and dependency manifest
└── vite.config.ts       # Vite configuration
```

## Available scripts

- `npm run dev` – Launch the Vite dev server with hot module reloading.
- `npm run build` – Type-check the project and create an optimized production bundle.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint with the TypeScript-aware configuration.

## Design considerations

- **Executive clarity:** The hero area summarizes plan intent with quick access to sharing and export actions.
- **Operational depth:** Metrics, objectives, and action items are visualized with progress indicators and contextual metadata.
- **Strategic insight:** SWOT and focus-area modules capture qualitative inputs to complement quantitative metrics.
- **Responsive layout:** Panels collapse gracefully on smaller screens, keeping the planning workspace usable on tablets.

## License

This project is provided as-is for demonstration purposes.
