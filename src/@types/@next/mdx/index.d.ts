declare module '@next/mdx' {
  import type { NextConfig } from 'next/dist/next-server/server/config-shared'

  export interface MdxLoaderOptions {
    remarkPlugins?: unknown[]
    rehypePlugins?: unknown[]
    filepath?: string
    renderer?: string
  }

  export interface NextMdxPluginOptions {
    extension?: string | RegExp
    options?: MdxLoaderOptions
  }

  function NextMdxPlugin(
    options: NextMdxPluginOptions,
  ): (nextConfig: NextConfig) => NextConfig

  export = NextMdxPlugin
}
