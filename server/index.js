require('dotenv').config()

const next = require('next')
const server = require('express')()
const routes = require('./routes')

const { NODE_ENV, PORT } = process.env

const app = next({ dev: NODE_ENV !== 'production' }) 
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {

  server.use(handler)

  server.listen(PORT, () => console.log(`application running on port ${PORT}`))

})
