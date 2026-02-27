# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal profile website — a simple, clean site that showcases who I am, what I do, and how to get in touch.

## Tech Stack

- **React + Vite** — frontend framework and dev/build tooling
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed; configured in `vite.config.js`)

## Project Structure

```
src/
  App.jsx       # root component, compose sections here
  index.css     # single CSS file — just @import "tailwindcss"
  main.jsx      # React entry point
index.html      # HTML shell
vite.config.js  # Vite config with React + Tailwind plugins
```

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build locally
```

## Workflow

- **Never run `npm run dev`** — the user runs the dev server themselves in a separate terminal
- To verify changes, run `npm run build` only

## Key Rules

- Keep the site simple and fast — avoid adding unnecessary dependencies
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<nav>`, etc.) for accessibility
- All layouts must be responsive and mobile-friendly
