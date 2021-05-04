const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    require('@next/mdx')({
      extension: /\.mdx$/,
      options: {
        remarkPlugins: [[require('remark-frontmatter'), 'toml']],
        rehypePlugins: [],
      },
    }),
  ],
  {
    pageExtensions: ['mdx', 'tsx'],
    reactStrictMode: true,
    future: {
      webpack5: true,
    },
  },
)
