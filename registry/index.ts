import { blocks } from './registry-blocks'
import { Registry } from './schema'

// Ensure that the registry always have an array of registry items
const ensureArray = <T>(items: T | T[]): T[] =>
  Array.isArray(items) ? items : Object.values(items as object)

// Combine all registry items into a single array
export const registry: Registry = [...ensureArray(blocks)]

// Utility functions
export const getComponentByName = (name: string) =>
  registry.find((item) => item.name === name)

export const getComponentsByCategory = (category: string) => {
  return ensureArray(registry)
    .filter((item) => item.categories?.includes(category))
    .map((item) => item.name)
}
