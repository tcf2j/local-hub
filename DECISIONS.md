# LocalHub Technical Decisions

## Project Goal

LocalHub is a full-stack local business directory and potential product.

The initial goal is to allow local businesses to claim and manage their listings while customers can discover local businesses.

## Initial Stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Supabase
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

## Decision: Supabase

### Why

Supabase provides PostgreSQL along with authentication,
database access, storage, and other backend functionality.

Using Supabase allows me to learn full-stack development
while using established backend services instead of
building those services completely from scratch.

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
