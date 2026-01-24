# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is an Astro-based website for "Cabaña Alfredes" - a cabin rental business. The project uses:

- **Framework**: Astro v5.16.11 with React integration
- **Styling**: Tailwind CSS with custom design system + shadcn/ui components
- **UI Components**: shadcn/ui (Radix UI + custom variants)
- **State Management**: React Context + useReducer
- **Forms**: Formik + Yup validation
- **Language**: TypeScript (mixed with some JavaScript files)

## Build Commands

```bash
# Development
npm run dev                 # Start development server

# Build & Production
npm run build              # Build for production
npm run start              # Start production server
npm run preview            # Preview production build

# Code Quality
npm run lint               # Run Astro check (linting)
```

## Testing

This project currently does not have a dedicated test setup. When adding tests, check for existing test patterns or ask the user for preferred testing framework.

## Code Style Guidelines

### File Structure & Organization

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   └── pages/           # Page-specific components
├── layouts/             # Astro layout components
├── lib/                 # Utility functions
└── pages/               # Astro page routes

store/                   # Global state management
```

### Import Conventions

- Use absolute imports with `@/` prefix for internal modules:
  ```typescript
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  ```
- Third-party imports first, then internal imports
- React imports: `import React from "react";` (when needed)

### TypeScript Guidelines

- Use interfaces for component props and object shapes
- Prefer `type` for unions, primitives, and function types
- Always type React component props:
  ```typescript
  interface ComponentProps {
    title: string;
    optional?: boolean;
  }
  ```

### Component Patterns

- Use React.forwardRef for components that need ref forwarding
- Follow shadcn/ui patterns for UI components with variants:
  ```typescript
  const buttonVariants = cva("base-classes", {
    variants: {
      variant: {
        /* ... */
      },
    },
    defaultVariants: {
      /* ... */
    },
  });
  ```
- Use compound components when appropriate (Card, CardHeader, etc.)

### Styling Conventions

- Use Tailwind CSS classes for all styling
- Leverage the custom design system colors (primary, secondary, muted, etc.)
- Use the `cn()` utility for conditional class merging
- Custom fonts: Ubuntu (sans), Permanent Marker, Neucha

### State Management

- Use React Context + useReducer for global state
- Follow existing patterns in `store/store.tsx`
- Use `useStateContext()` and `useStateDispatch()` hooks

### Form Handling

- Use Formik for form state management
- Use Yup for validation schemas
- Follow existing form patterns in `ContactForm.tsx`
- Handle loading states and error display consistently

### Error Handling

- Use try-catch blocks for async operations
- Log errors with `console.error()`
- Provide user feedback for form submissions and API calls

### Naming Conventions

- Components: PascalCase (e.g., `ContactForm`, `HomePage`)
- Files: kebab-case for utilities, PascalCase for components
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE when appropriate

### Astro Specific

- Use `client:load` directive for React components that need hydration
- Keep Astro pages minimal, delegate to React components
- Use Astro layouts for consistent page structure

### Language & Content

- This is a Spanish-language website (Argentina)
- Use Spanish text in UI components and validation messages
- Maintain existing Spanish terminology throughout

## Development Workflow

1. **Before making changes**: Run `pnpm lint` to ensure code quality
2. **Component creation**: Follow existing patterns in `components/`
3. **State changes**: Update the global store in `store/store.tsx` if needed
4. **Styling**: Use Material-UI components and custom styling
5. **Testing**: No current test setup - focus on manual testing in development

## Common Patterns

### UI Component Structure

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("base-classes", {
  /* ... */
});

export interface ComponentProps extends VariantProps<typeof variants> {
  // additional props
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        variants({
          /* ... */
        }),
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Component.displayName = "Component";
```

### Form Pattern

```typescript
const formik = useFormik<FormValues>({
  initialValues: {
    /* ... */
  },
  validationSchema: yup.object({
    /* ... */
  }),
  onSubmit: async (values) => {
    setSending(true);
    try {
      // API call
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  },
});
```

## Notes for Agents

- The project mixes TypeScript and JavaScript - prefer TypeScript for new files
- Some components are in `components/` (legacy) and `src/components/` (preferred)
- The build uses Astro's server-side rendering with React hydration
- Email handling is done via Astro API routes in `src/pages/api/`
- Images and assets are managed through a config system in the store
