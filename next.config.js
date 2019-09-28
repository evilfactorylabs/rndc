const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism')]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
