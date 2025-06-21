// source.config.ts
import { z } from 'zod'
import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from 'fumadocs-mdx/config'

var { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      new: z.boolean().default(false),
      pro: z.boolean().default(false),
      updated: z.boolean().default(false),
    }),
  },
})
var source_config_default = defineConfig()
export { source_config_default as default, docs, meta }
