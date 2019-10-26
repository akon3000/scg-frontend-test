require('dotenv').config({ path: '.env' })

const { API_URL } = process.env

module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    API_URL
  }
}
