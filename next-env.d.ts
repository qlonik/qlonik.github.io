/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
