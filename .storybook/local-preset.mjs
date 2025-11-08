/**
 * to load the built addon in this test Storybook
 */
import { fileURLToPath } from 'node:url'

export function previewAnnotations(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('../dist/preview.js'))]
}

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('../dist/manager.js'))]
}
