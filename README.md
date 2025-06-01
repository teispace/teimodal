# TeiModal

A beautiful, customizable React modal component for modern web applications. Built with TypeScript and Tailwind CSS, TeiModal provides a flexible, accessible, and easy-to-integrate modal dialog for your React projects.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Features

- ⚡ **Easy to use**: Simple API for quick integration
- 🎨 **Customizable**: Control overlay, padding, border radius, colors, and more
- 🌓 **Dark mode support**
- 🛡️ **TypeScript support**
- 🧩 **Composable**: Pass any React node as modal content
- 🧑‍💻 **Accessible**: Keyboard and screen reader friendly
- 🧪 **Tested**: Includes unit tests and coverage

## Installation

```bash
npm install @teispace/teimodal
# or
yarn add @teispace/teimodal
```

> **Peer dependencies:**
>
> - React >= 18
> - ReactDOM >= 18

## Usage

```tsx
import { TeiModal } from "@teispace/teimodal";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <TeiModal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from TeiModal!</h2>
        <button onClick={() => setOpen(false)}>Close</button>
      </TeiModal>
    </>
  );
}
```

## Props

| Prop                     | Type                              | Default                            | Description                           |
| ------------------------ | --------------------------------- | ---------------------------------- | ------------------------------------- |
| `children`               | `React.ReactNode`                 | —                                  | Modal content                         |
| `isOpen`                 | `boolean`                         | —                                  | Controls modal visibility             |
| `onClose`                | `() => void`                      | —                                  | Called when modal requests to close   |
| `overlayColor`           | `string`                          | `'bg-black/30'`                    | Overlay background (Tailwind classes) |
| `backdropClasses`        | `string`                          | `''`                               | Extra classes for backdrop            |
| `rounded`                | `'none' \| 'sm' \| ... \| 'full'` | `'xl'`                             | Border radius (Tailwind rounded)      |
| `bgColor`                | `string`                          | `'bg-[#ffffff] dark:bg-[#1a202c]'` | Modal background (Tailwind classes)   |
| `modalPadding`           | `string`                          | `'p-6'`                            | Padding (Tailwind classes)            |
| `modalClasses`           | `string`                          | `''`                               | Extra classes for modal               |
| `enableWindowScrollLock` | `boolean`                         | `true`                             | Locks window scroll when open         |
| `zIndex`                 | `number`                          | `1000`                             | z-index for modal                     |
| `isDismissable`          | `boolean`                         | `true`                             | Allow closing by clicking outside     |

## Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) utility classes for styling.
- You can override styles via `modalClasses`, `backdropClasses`, `bgColor`, etc.
- The package includes a base CSS import (`src/index.css`).

## Development

### Scripts

- `npm run build` — Build the library with Rollup
- `npm run test` — Run unit tests with Jest
- `npm run lint` — Lint code with ESLint
- `npm run format` — Format code with Prettier
- `npm run check-types` — TypeScript type checking
- `npm run clean` — Remove build, coverage, and reinstall dependencies

### Project Structure

```
src/
  components/TeiModal.tsx   # Modal component
  types/TeiModalProps.ts    # TypeScript props
  styles/style.ts           # Imports base CSS
  index.ts                  # Entry point
  index.css                 # Tailwind base CSS
__test__/                   # Unit tests
```

### Build

Uses [Rollup](https://rollupjs.org/) for bundling and [PostCSS](https://postcss.org/) for CSS processing.

### Linting & Formatting

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://typicode.github.io/husky/) for pre-commit hooks

### Testing

- [Jest](https://jestjs.io/) for unit testing
- Coverage reports in `coverage/`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Security

See [SECURITY.md](./SECURITY.md).

## License

[MIT](./LICENSE) © 2025 Teispace
