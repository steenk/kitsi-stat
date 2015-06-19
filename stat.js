module.exports = function (dir) {

	dir = dir || '.';
	var fs = require('fs');
	fs.writeFile(dir + '/.pid', process.pid);
	fs.writeFile(dir + '/.stat', '');
	var pack = JSON.parse(fs.readFileSync(dir + '/package.json')); 
	
	function stat () {
        return {
            title: pack.name,
            version: pack.version,
            timestamp: new Date(),
            args: process.argv,
            uid: process.getuid(),
            cwd: process.cwd(),
            memory: process.memoryUsage(),
            pid: process.pid,
            uptime: process.uptime()
        }
    }

	process.on('SIGUSR2', function () {
			fs.writeFile(dir + '/.stat', JSON.stringify(stat()));
	});

	return stat;
}
