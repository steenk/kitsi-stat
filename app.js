var connect = require('connect')
 ,  http = require('http')
 ,  stat = require('kitsi-stat')(process.cwd())
 ,  app = connect()
.use(function(req, res) {
	res.end(JSON.stringify(stat(), null, '  '));
});
http.createServer(app).listen(3031, '127.0.0.1');

