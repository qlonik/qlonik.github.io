import nextMdx from '@next/mdx'
import withPlugins from 'next-compose-plugins'
import remarkFrontmatter from 'remark-frontmatter'

export default withPlugins(
  [
    nextMdx({
      extension: /\.mdx$/,
      options: {
        remarkPlugins: [[remarkFrontmatter, 'toml']],
        rehypePlugins: [],
      },
    }),
  ],
  {
    pageExtensions: ['mdx', 'tsx'],
    reactStrictMode: true,
    compiler: {
      emotion: true,
    },
    output: 'export',
  },
)
