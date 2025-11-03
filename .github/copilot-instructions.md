# Devlizer - AI Coding Agent Instructions

## Project Overview

Devlizer is a development company that specializes in building SaaS products, web and mobile applications using cutting edge technologies. The company is known for its expertise in Next.js, React, and TypeScript, and is committed to delivering high-quality, user-friendly solutions to its clients.

- Devlizer have multiple SaaS products under development, each with its own unique features and target audience.
- Devlizer main model that it's holding company for its SaaS products.
- Devlizer emphasizes clean code, scalability, and maintainability in all its projects.

- The main tech stack used across Devlizer's projects includes Next.js, React, TypeScript, Tailwind CSS, MongoDB, Postgres.
- Devlizer follows best practices in software development, including code reviews, testing, and continuous integration/deployment (CI/CD). 

## Technologies Company Uses to Build Products
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- MongoDB
- PostgreSQL
- AWS
- Cloudflare


## Common Patterns When Adding Features
- use shadcn/ui components where applicable, check the shadcn MCP server for reference
- ensure responsiveness and accessibility best practices
- maintain existing functionality and design consistency
- optimize imports and remove unused code
- ensure to use theme colors and not hardcoded colors, only when necessary.
- Use `cn()` for conditional classes: `cn("base-class", {"conditional-class": condition, ...})`
- Leverage CSS variables from Tailwind config in `globals.css`
- if working with dates, use `date-fns` for formatting and manipulation
- check the prisma schema for data models and relationships
- ensure to handle loading and error states gracefully
- write clean, maintainable, and well-documented code
- always check the types and interfaces for query or mutation results
- ensure to use `use client` directive for client components
- for forms, use `react-hook-form` with shadcn for handling form state and validation with `zod` for schema validation, if applicable
- for animations, use `framer-motion` for smooth transitions and effects
- when working with shadcn `Card` component, ensure to use `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter` for proper structure if needed don't use custom divs instead of these subcomponents unless necessary
- don't use card for everything, only when it makes sense