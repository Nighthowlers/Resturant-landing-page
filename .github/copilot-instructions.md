# Copilot Instructions - Restaurant Landing Page

## Project Overview
Modern React + Vite restaurant landing page with dark mode support. Single-page application with multiple section components composed via `App.jsx` and styled with CSS variables for theming.

## Architecture

### Component Structure
- **Layout Pattern**: Vertical section components (Home, About, Work, Testimonial, Contact, Footer)
- **Entry Point**: `src/App.jsx` composes all sections wrapped in `DarkModeProvider`
- **Component Files**: `src/Components/*.jsx` - each section is a standalone functional component
- **Styling**: Single CSS file (`src/App.css`, ~739 lines) with component-level class organization

### State Management
- **Dark Mode Context**: `src/Context/DarkModeContext.jsx` - provides `isDarkMode` state and `toggleDarkMode` function
- **Usage**: Components access via `useContext(DarkModeContext)`
- **Persistence**: Dark mode preference saved to localStorage with system preference fallback

### Theming System
- **CSS Variables**: Root-level color scheme defined in `App.css`
  ```css
  :root { --bg-primary, --text-primary, --text-secondary, --border-color, --shadow-color }
  html.dark-mode { overrides for dark theme }
  ```
- **Class Toggle**: Dark mode class added/removed on `document.documentElement`
- **Smooth Transitions**: CSS transitions on color/background changes

## Developer Workflows

### Build & Development
- **Dev Server**: `npm run dev` - Vite dev server with React HMR
- **Production Build**: `npm run build` - outputs to `dist/`
- **Linting**: `npm run lint` - ESLint validation
- **Preview**: `npm run preview` - preview production build locally

### Key Dependencies
- React 19.2.0 with react-dom
- Vite 7.2.4 (no TypeScript; Babel/oxc for JSX)
- Material-UI Icons and components (`@mui/material`, `@mui/icons-material`)
- react-icons for additional icon sets (`react-icons/bs`, `react-icons/hi2`)

## Code Patterns & Conventions

### React Component Style
- **Functional components** with hooks (useState, useContext, useEffect)
- **JSLint rules**: Unused variables accepted if uppercase (e.g., `CONSTANT`) 
- **Disabled rules**: JSX a11y warnings disabled locally with `/* eslint-disable jsx-a11y/anchor-is-valid */`

### Navigation & Scroll
- **Smooth scroll**: Components implement `handleScroll()` using `document.getElementById()` + `scrollIntoView()`
- **Section IDs**: Each major component section has an `id` attribute for scroll anchors (e.g., `id="home"`, `id="about"`)

### UI Components
- Material-UI Drawer used for mobile menu (Navbar component)
- Icon pattern: MUI icons for primary nav, react-icons for supplementary elements

## Critical Integration Points

### Dark Mode Integration
When adding new components:
1. Use CSS variables for colors (e.g., `color: var(--text-primary)`)
2. Access toggle via `useContext(DarkModeContext)` 
3. No inline styles for theme-aware colors - use CSS classes

### Smooth Scrolling Sections
Ensure new sections have:
- Unique `id` attribute matching menu/route name
- Entry in Navbar's `menuOptions` array with corresponding `id`

## File Structure Reference
```
src/
  Components/        # Individual section components
  Context/          # Global state (DarkModeContext)
  Assets/           # Images/logos (referenced in Navbar)
  App.jsx           # Root component composition
  App.css           # All styling (variables, animations, components)
```

## Common Tasks

### Add New Section
1. Create component in `src/Components/SectionName.jsx`
2. Import and compose in `src/App.jsx` between existing sections
3. Add menu option to Navbar's `menuOptions` array with icon and section id
4. Style using CSS variables for theme support
5. Add unique `id` to section container

### Modify Theme Colors
Edit CSS variables in `App.css`:
- Light mode: `:root` selector
- Dark mode: `html.dark-mode` selector
- Variables: `--bg-primary`, `--text-primary`, `--text-secondary`, `--border-color`, `--shadow-color`
