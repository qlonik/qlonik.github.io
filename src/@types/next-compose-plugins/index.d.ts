declare module 'next-compose-plugins' {
  import type { NextConfig } from 'next/dist/next-server/server/config-shared'

  // eslint-disable-next-line @typescript-eslint/ban-types -- used in intersection
  export type PluginFunction<T extends Record<string, unknown> = {}> = (
    nextConfig: NextConfig & T,
    nextComposePlugins: { nextComposePlugins: boolean; phase: string },
  ) => Partial<NextConfig> & {
    phases?: string[]
  }

  export type PluginConfiguration<T extends Record<string, unknown>> =
    | [PluginFunction<T>, T?, string[]?]
    | [PluginFunction<T>, string[]]
    | PluginFunction<T>

  function withPlugins<T extends Record<string, unknown>[]>(
    config: { [k in keyof T]: PluginConfiguration<T> },
    nextConfig?: NextConfig,
  ): (phase: string, config: { defaultConfig: NextConfig }) => NextConfig

  export = withPlugins
}
