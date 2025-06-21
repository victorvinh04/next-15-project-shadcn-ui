import path from 'path'
import { z } from 'zod'
import { registryBaseColorSchema } from '@/registry/schema'
import { promises as fs } from 'fs'
import { tmpdir } from 'os'
import { Project, ScriptKind, type SourceFile } from 'ts-morph'
import { Config } from '@/utils/get-config'
import { transformCssVars } from '@/utils/transformers/transform-css-vars'
import { transformIcons } from '@/utils/transformers/transform-icons'
import { transformImport } from '@/utils/transformers/transform-import'
import { transformJsx } from '@/utils/transformers/transform-jsx'
import { transformRsc } from '@/utils/transformers/transform-rsc'
import { transformTwPrefixes } from './transform-tw-prefix'

export type TransformOpts = {
  filename: string
  raw: string
  config: Config
  baseColor?: z.infer<typeof registryBaseColorSchema>
  transformJsx?: boolean
  isRemote?: boolean
}

export type Transformer<Output = SourceFile> = (
  opts: TransformOpts & {
    sourceFile: SourceFile
  }
) => Promise<Output>

const project = new Project({
  compilerOptions: {},
})

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), 'shadcn-'))
  return path.join(dir, filename)
}

export async function transform(
  opts: TransformOpts,
  transformers: Transformer[] = [
    transformImport,
    transformRsc,
    transformCssVars,
    transformTwPrefixes,
    transformIcons,
  ]
) {
  const tempFile = await createTempSourceFile(opts.filename)
  const sourceFile = project.createSourceFile(tempFile, opts.raw, {
    scriptKind: ScriptKind.TSX,
  })

  for (const transformer of transformers) {
    await transformer({ sourceFile, ...opts })
  }

  if (opts.transformJsx) {
    return await transformJsx({
      sourceFile,
      ...opts,
    })
  }

  return sourceFile.getText()
}
