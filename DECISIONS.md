# LocalHub Technical Decisions

## Project Goal

LocalHub is a full-stack local business directory and potential product.

The initial goal is to allow local businesses to claim and manage their listings while customers can discover local businesses.

## Initial Stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Git/GitHub

## Decision: Next.js

### Why

Next.js allows the project to use React for the frontend while also learning server-side application development within the same project.

## Decision: TypeScript

### Why

TypeScript provides stronger type safety and helps make the application easier to understand and maintain as it grows.

## Decision: PostgreSQL

### Why

The application will contain relational data such as users, businesses, categories, and business ownership relationships. PostgreSQL gives the project a relational database to learn and build against.

## Decision: Prisma

### Why

Prisma will provide a structured way to interact with PostgreSQL while allowing me to learn database models, relationships, queries, and migrations.

## Initial Architecture

Browser
↓
Next.js
↓
Server/API
↓
Prisma
↓
PostgreSQL
