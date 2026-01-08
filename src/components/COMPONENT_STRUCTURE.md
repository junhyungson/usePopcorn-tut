# Component Organization Structure

## Directory Structure

```
src/components/
├── index.ts                    # Main export barrel file
├── layout/                     # Layout and page-level components
│   ├── index.ts
│   └── Main.tsx               # Main page layout
├── features/                   # Feature-specific components
│   ├── navigation/            # Navigation-related components
│   │   ├── index.ts
│   │   ├── NavBar.tsx         # Main navigation bar
│   │   ├── Search.tsx         # Search input
│   │   └── SearchResults.tsx  # Search results display
│   ├── movies/                # Movie listing features
│   │   ├── index.ts
│   │   ├── MovieCard.tsx      # Individual movie card
│   │   └── MovieList.tsx      # List of movies
│   └── watched/               # Watched movies features
│       ├── index.ts
│       └── WatchedBox.tsx     # Watched movies container
├── ui/                        # Reusable UI components
│   ├── index.ts
│   └── Container.tsx          # Generic container with toggle
└── common/                    # Shared/common components
    ├── index.ts
    └── Logo.tsx               # App logo component
```

## Organization Principles

### 1. **Layout Components** (`/layout`)

- Page-level layout and structure components
- Components that define the overall page architecture

### 2. **Feature Components** (`/features`)

- Business logic and feature-specific components
- Organized by domain/feature area:
  - `navigation/` - All navigation-related components
  - `movies/` - Movie listing and display components
  - `watched/` - Watched movies functionality

### 3. **UI Components** (`/ui`)

- Pure, reusable UI components
- No business logic, just presentation
- Generic components that can be used across features

### 4. **Common Components** (`/common`)

- Shared components used across multiple features
- Components like Logo, icons, etc.

## Import Strategy

### Barrel Exports

Each directory has an `index.ts` file that exports all components:

```tsx
// From components/index.ts
export * from "./layout";
export * from "./features/navigation";
// etc...
```

### Clean Imports

```tsx
// Instead of:
import NavBar from "./components/NavBar";
import Main from "./components/Main";

// Use:
import { NavBar, Main } from "./components";
```

## Benefits

1. **Clear Separation of Concerns**: Each component has a clear purpose and place
2. **Easy to Find**: Logical grouping makes components easy to locate
3. **Scalable**: Easy to add new features without cluttering
4. **Better Imports**: Clean barrel exports for better developer experience
5. **Maintainable**: Clear structure makes refactoring and updates easier

## Component Naming

- **Descriptive Names**: `MovieCard` instead of `Movie`
- **Semantic Names**: `Container` instead of `Box`
- **Feature-Based**: Components named by their function/feature
