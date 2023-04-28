import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts', 'src/preview.ts', 'src/manager.tsx'],
  splitting: false,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  // format: ['esm'],
  dts: {
    resolve: true,
  },
  treeshake: true,
  sourcemap: true,
  clean: true,
  // legacyOutput: false,
  platform: 'browser',
  esbuildOptions(options) {
    options.conditions = ['module']
  },
}))

// import { defineConfig } from 'tsup'

// export default defineConfig({
//   entry: ['src/index.ts', 'src/manager.tsx'],
//   sourcemap: true,
//   clean: true,
//   dts: true,
//   format: ['esm'],
//   minify: true,
//   // tsconfig: 'tsconfig.src.json',
// })
