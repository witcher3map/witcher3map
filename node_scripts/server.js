var express = require('express')
var compression = require('compression')
var app = express()

function shouldCompress(req, res) {
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header
		return false
	}
	// fallback to standard filter function
	return compression.filter(req, res)
}

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8889

// compress content with gzip
app.use(compression({filter: shouldCompress}))

// make express look in the dist directory for assets (css/js/img)
app.use(express.static('dist'))

app.listen(port, function() {
	console.log('witcher3map is running on http://localhost:' + port)
})
