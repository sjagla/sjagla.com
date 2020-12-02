const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  images: {
    domains: [isProd ? '' : 'cdn.sanity.io'],
  },
}
