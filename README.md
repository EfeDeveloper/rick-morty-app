# 🧑‍💻 Rick & Morty App — Modern Character Management SPA

Advanced character management and exploration SPA built with **Angular 19 + Tailwind CSS + NgRx + Apollo Client**, following principles of scalable architecture, maintainable code, and high-quality UX.

## 🗂️ Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Technical Decisions](#architecture--technical-decisions)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Best Practices & Conventions](#best-practices--conventions)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**Rick & Morty App** is a modular, maintainable, and scalable Single Page Application focused on consuming the Rick & Morty GraphQL API. It enables advanced character search, favorites management, filtering by species/status, and notifications—all with a strong UX focus.

## Tech Stack

- **Angular 19** 🅰️ — Robust framework for building SPAs.
- **TypeScript** 🔵 — Static typing for clarity and robustness.
- **NgRx** 🟣 — Advanced state management (store, effects, entity).
- **Apollo Client** 🚀 — Efficient GraphQL API integration.
- **Angular Material** 🎨 — Modern Material Design UI components.
- **Tailwind CSS** 🌈 — Utility-first CSS framework for fast, consistent styling.
- **RxJS** 🔁 — Reactive programming and advanced async flows.
- **Jasmine/Karma** 🧪 — Unit and integration testing.
- **ESLint + Prettier** 🧹 — Linting and automatic formatting.

## Architecture & Technical Decisions

- **Modular structure**: clear separation by feature in `/app`, with decoupled modules, services, and components.
- **State management**: centralized and scalable app state with NgRx Store and Effects.
- **GraphQL integration**: Apollo Client for efficient queries and mutations against the Rick & Morty API.
- **UI/UX**: Angular Material for consistent, responsive UI; Tailwind CSS for rapid utility-first styling.
- **Quality**: complete testing stack (Jasmine/Karma) and automated linting/formatting on every build.
- **Motivation**: Chosen stack and structure streamline team collaboration, scalability, and maintainability.

## Installation & Setup

Make sure you have **Node.js 20.x** installed.

```bash
git clone https://github.com/EfeDeveloper/rick-morty-app.git
cd rick-morty-app
npm install

# Start local development server
npm start
# or
ng serve

# App runs on http://localhost:4200

# Run unit tests
npm test
```

## Project Structure

```bash
rick-morty-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts         # Root Angular component
│   │   ├── app.component.html
│   │   ├── app.config.ts            # Angular providers and configuration
│   │   ├── app.routes.ts            # App routing
│   │   ├── core/                    # Core services, constants, GraphQL queries
│   │   │   ├── constants/
│   │   │   ├── graphql/
│   │   │   └── services/
│   │   ├── features/                # Feature modules and UI (filters, favorites, characters, totals)
│   │   │   ├── characters/
│   │   │   ├── favorite-bar/
│   │   │   ├── filters-bar/
│   │   │   └── totals-bar/
│   │   ├── models/                  # TypeScript interfaces and models
│   │   ├── shared/                  # Shared components and pipes
│   │   │   ├── components/
│   │   │   └── pipes/
│   │   └── store/                   # NgRx store, reducers, actions
│   │       └── favorite/
│   ├── environments/                # Environment configs (dev/prod)
│   ├── index.html                   # App entry HTML
│   ├── main.ts                      # App bootstrap
│   └── styles.css                   # Global styles (Tailwind)
├── public/                          # Static assets (favicon, etc.)
├── .vscode/                         # VSCode workspace settings and tasks
├── .angular/                        # Angular CLI cache
├── angular.json                     # Angular CLI configuration
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.spec.json
├── .editorconfig                    # EditorConfig rules
├── .gitignore                       # Git ignore rules
├── LICENSE                          # Project license
└── README.md                        # Project documentation
```

## Best Practices & Conventions

- Semantic commit messages with emojis for clarity.
- Functional, decoupled, and testable components.
- Strict TypeScript typing.
- Centralized and utility-first styling with Tailwind.
- Centralized error handling and user feedback.
- Automatic linting & formatting on every commit/CI.

## Contributing

1.  Fork the repo and create a descriptive branch (e.g., feature/add-search).
2.  Write code, tests, and make sure lint passes.
3.  Create a clear Pull Request explaining your changes.

All contributions are welcome! 🚀

## License

[MIT](LICENSE)
