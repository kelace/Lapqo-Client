[![Build Status](https://dev.azure.com/matetyson/lapqo/_apis/build/status%2Fkelace.Lapqo-Client?branchName=main)](https://dev.azure.com/matetyson/lapqo/_build/latest?definitionId=2&branchName=main)
# Lapqo

[Lapqo](https://lapqo.com) is a full-stack social media application inspired by Twitter/X, built with React and TypeScript on the frontend and C# on the backend.

The project provides core social networking functionality such as creating and managing posts, comments, likes, subscriptions, user search, authentication, and responsive UI.

## 🚀 Features

- Authentication
- User registration
- User login
- User logout
- Access token authentication
- Automatic authentication state management

## Posts

- CRUD
- like posts
- responsive

## Comments

- Add comments to posts
- View comments
- Interact with posts through comments

## Users

- Subscribe / unsubscribe from users
- Search for users
- search suggestions
- user profile

## UI / UX

- responsive disign
- switch theme light / dark
- comfirm modal
- loading states, error
- form validation
- adaptive (Desktop / Tablet / Mobile)

## 🛠️ Tech Stack

- React — UI library
- TypeScript — type safety
- React Router — client-side routing
- TanStack Query (React Query) — server-state management, caching and synchronization
- Zustand — client-side state management
- React Hook Form — form management
- Zod — schema validation
- Axios — HTTP client
- Tailwind CSS — styling
- shadcn/ui — reusable UI components
- next-themes — theme management
- Lucide React — icons

## Package Scripts

- npm run dev – Start the Vite development server.
- npm run build – Compile TypeScript and create a production build.
- npm run lint – Run ESLint and display the results in the terminal.
- npm run lint:json – Run ESLint and save the results to reports/eslint.json.
- npm run report – Generate an HTML report from reports/eslint.json.
- npm run typecheck – Check TypeScript types without emitting output files.
- npm run check – run the full project check: generate the ESLint JSON report, create the HTML report,
  run TypeScript type checking, and open the report in your default browser.
- npm run preview – Preview the production build locally.
