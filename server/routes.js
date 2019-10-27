const routes = require('next-routes')

module.exports = routes()
// Name, Pattern, ActualPage
// ====  ======= ===========
.add('home', '/', '/home')
.add('scg', '/scg', '/scg')
.add('number-series', '/number-series', '/number-series')
.add('bangsue-restaurants', '/restaurants-in-bangsue', '/bangsue-restaurants')
.add('my-resume','/my-resume', '/resume')