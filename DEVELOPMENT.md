# Development Guidelines

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Run tests
pnpm test

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type checking
pnpm type-check
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ErrorBoundary/   # Error handling
│   ├── Loading/         # Loading states
│   ├── HomePage/        # Home page components
│   ├── navbar/          # Navigation components
│   └── Repos/           # Repository page components
├── constants/           # Application constants
├── hooks/              # Custom React hooks
├── redux/              # Redux store and slices
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── resources/          # Static assets
```

## 🛠️ Code Quality Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all props and state
- Use `React.JSX.Element` for component return types
- Avoid `any` type - use proper typing

### React Best Practices
- Use functional components with hooks
- Implement React.memo for performance optimization
- Use proper prop types and interfaces
- Follow the single responsibility principle

### ESLint Rules
- No unused variables
- Consistent code formatting
- Accessibility compliance (jsx-a11y)
- No console.log in production

### File Naming
- Components: PascalCase (e.g., `Navbar.tsx`)
- Utilities: camelCase (e.g., `errorUtils.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `SITE_LINKS`)

## 🎨 Styling Guidelines

### CSS
- Use CSS modules or styled-components for component-specific styles
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Ensure responsive design

### Accessibility
- Add proper alt attributes to images
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation

## 🔧 Performance Optimization

### React Optimization
- Use React.memo for expensive components
- Implement proper key props in lists
- Avoid inline function definitions in render
- Use useCallback and useMemo when appropriate

### Bundle Optimization
- Code splitting for routes
- Lazy loading for components
- Optimize images and assets
- Tree shaking for unused code

## 🧪 Testing

### Unit Tests
- Test component rendering
- Test user interactions
- Test error boundaries
- Mock external dependencies

### Integration Tests
- Test component integration
- Test Redux state management
- Test routing functionality

## 📦 Package Management

### Using pnpm
```bash
# Install package
pnpm add package-name

# Install dev dependency
pnpm add -D package-name

# Remove package
pnpm remove package-name

# Update packages
pnpm update
```

### Lock File
- Always commit `pnpm-lock.yaml`
- Use `pnpm install --frozen-lockfile` in CI/CD
- Regularly update dependencies

## 🚀 Deployment

### Build Process
```bash
# Build for production
pnpm build

# Deploy to GitHub Pages
pnpm deploy
```

### Environment Variables
- Use `.env` files for environment-specific configuration
- Never commit sensitive information
- Use `REACT_APP_` prefix for client-side variables

## 🔍 Debugging

### Development Tools
- React Developer Tools
- Redux DevTools
- TypeScript compiler
- ESLint integration

### Common Issues
- TypeScript compilation errors
- ESLint rule violations
- Missing dependencies
- Performance bottlenecks

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [pnpm Documentation](https://pnpm.io/)

### Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
