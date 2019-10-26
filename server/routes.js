const routes = require('next-routes')

module.exports = routes()
// Name, Pattern, ActualPage
// ====  ======= ===========
.add('home', '/', '/home')
.add('scg', '/scg', '/scg')