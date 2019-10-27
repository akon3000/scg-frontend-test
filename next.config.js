require('dotenv').config()

const { API_URL, API_PHOTO } = process.env

module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    API_URL,
    API_PHOTO
  }
}
