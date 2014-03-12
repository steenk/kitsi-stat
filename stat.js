module.exports = function (dir) {
	dir = dir || '.';
	var fs = require('fs');
	fs.writeFile(dir + '/.pid', process.pid);
	fs.writeFile(dir + '/.stat', '');
	process.on('SIGUSR2', function () {
		    var stat = {
				title: process.title,
				timestamp: new Date(),
		        args: process.argv,
		        uid: process.getuid(),
		        cwd: process.cwd(),
		        memory: process.memoryUsage(),
		        pid: process.pid,
		        uptime: process.uptime()
		    }
			fs.writeFile(dir + '/.stat', JSON.stringify(stat));
	});
}
