# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Storybook addon that displays form state information in a panel. This addon is proprietary to AlienFast's use of `react-final-form`, specifically designed to intercept and display form state emitted via Storybook's channel API during development.

## Development Commands

### Building

- `yarn build` - Full production build (runs `yarn clean` first)
- `yarn build:watch` - Build in watch mode for development
- `yarn start` - Runs both `build:watch` and `storybook` concurrently (primary development command)

### Type Checking

- `yarn typecheck` - Run TypeScript type checking

### Linting

- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint with auto-fix

### Storybook

- `yarn storybook` - Start Storybook dev server on port 6006
- `yarn build-storybook` - Build static Storybook to `.storybook-out/`

### Cleanup

- `yarn clean` - Remove `dist/` directory
- `yarn clean:yarn` - Nuclear option: remove lockfile, node_modules, and yarn cache

## Architecture

### Addon Entry Points

The addon has multiple entry points defined in `package.json#bundler` and built by tsup:

1. **Export entries** (`src/index.ts`): Public API exports (`EVENTS`, `Results` type)
2. **Manager entries** (`src/manager.tsx`): Registers the panel in Storybook's manager UI
3. **Preview entries** (`src/preview.ts`): Currently minimal, provides preview annotations
4. **Node entries** (`src/preset.ts`): Webpack/Vite configuration augmentation (currently no-ops)

### Build System

Uses `tsup` with configuration driven by `package.json#bundler` field. The `tsup.config.ts`:

- Generates both ESM and CJS for export/preview entries
- Generates ESM-only for manager entries (browser context)
- Generates CJS-only for node entries (preset)
- Externalizes Storybook globals to avoid bundling framework code

### Communication Flow

1. **User's Form Component** → Emits `EVENTS.RESULT` with `{ state: FormState, id?: string }` via Storybook channel
2. **Panel Component** (`Panel.tsx`) → Listens for `EVENTS.RESULT` and stores results in addon state
3. **PanelContent Component** (`PanelContent.tsx`) → Renders the form state JSON with syntax highlighting

The `Button.stories.tsx` example mimics this behavior for local testing by emitting mock form state when clicked.

### Key Files

- `src/constants.ts` - Defines addon ID, panel ID, event names, and `Results` type
- `src/manager.tsx` - Registers the "AF Form" panel that appears in story view mode
- `src/Panel.tsx` - Panel container that manages state via `useAddonState` and `useChannel`
- `src/PanelContent.tsx` - Renders the form state JSON display
- `src/DisplayJson.tsx` - JSON syntax highlighter component
- `src/List.tsx` - List UI component for displaying form data
- `.storybook/local-preset.mjs` - Loads built addon files for local Storybook testing

### TypeScript Configuration

- Uses `@alienfast/tsconfig/react-lib.json` as base
- Configured for CommonJS output (`module: "commonjs"`) but tsup handles actual format generation
- Includes both `src/` and `.storybook/` directories

## Release Management

This project uses `auto` for automated releases via GitHub Actions:

- Push to PR → Creates canary release
- Merge PR → Creates release (version based on PR labels)
- Labels: `major`, `minor`, `patch` (defaults to `patch` if no label)
- Registry: GitHub Packages (`https://npm.pkg.github.com`)

## Local Development Workflow

1. Make changes to addon source files in `src/`
2. Run `yarn start` to build in watch mode and launch Storybook
3. Test changes using the Button story (click button to emit mock form state)
4. The `.storybook/local-preset.mjs` loads the built addon from `dist/`
5. Changes to addon code require rebuild (handled automatically in watch mode)

## Important Notes

- **Storybook v10**: This addon targets Storybook 10.x (peer dependency: `^9.0.0` for compatibility, but dev deps use v10)
- **React resolutions**: `package.json#resolutions` pins React to v16.8.6 for compatibility reasons
- **Final Form dependency**: The addon expects form state in `final-form`'s `FormState` shape
- **No tests**: Test script is currently a placeholder
