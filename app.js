var fs = require('fs')
 ,	connect = require('connect')
 ,  http = require('http')
 ,  stat = require('kitsi-stat')(process.cwd())
 ,  app = connect()
.use(function(req, res) {
	sendSignal(function (stat) {
		res.end(stat);
	});
});
http.createServer(app).listen(3031, '127.0.0.1');

var dir = '.';

function sendSignal (cb) {
	fs.readFile(dir + '/.pid', function (err, doc) {
		if (err) throw err;
		var pid = doc.toString();
		try {
			process.kill(pid, 'SIGUSR2');
			setTimeout(function () {
				showStat(cb);
			}, 100);
		} catch (e) {
			cb('{"status":"down"}');
		}
	});
}

function showStat (cb) {
	fs.readFile(dir + '/.stat', function (err, data) {
		if (err) throw err;
		var stat = JSON.parse(data);
		cb(data);
	})
}
