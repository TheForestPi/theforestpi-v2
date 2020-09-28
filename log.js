var moment = require('moment');

module.exports = {
	info: 1,
	error: 2,
	debug: 4,
	log_flag: 0,
	i: function(str) {
		if ((this.log_flag & this.info) != 0) {
			_log(str, 'info');
		}
	},
	e: function(str) {
		if ((this.log_flag & this.error) != 0) {
			_log(str, 'error');
		}
	},
	d: function(str) {
		if ((this.log_flag & this.debug) != 0) {
			_log(str, 'debug');
		}
	},
	red: function(str) {
		/*	Reset = "\x1b[0m"
			Bright = "\x1b[1m"
			Dim = "\x1b[2m"
			Underscore = "\x1b[4m"
			Blink = "\x1b[5m"
			Reverse = "\x1b[7m"
			Hidden = "\x1b[8m"

			FgBlack = "\x1b[30m"
			FgRed = "\x1b[31m"
			FgGreen = "\x1b[32m"
			FgYellow = "\x1b[33m"
			FgBlue = "\x1b[34m"
			FgMagenta = "\x1b[35m"
			FgCyan = "\x1b[36m"
			FgWhite = "\x1b[37m"

			BgBlack = "\x1b[40m"
			BgRed = "\x1b[41m"
			BgGreen = "\x1b[42m"
			BgYellow = "\x1b[43m"
			BgBlue = "\x1b[44m"
			BgMagenta = "\x1b[45m"
			BgCyan = "\x1b[46m"
			BgWhite = "\x1b[47m"
		*/
		console.log('\x1b[31m%s\x1b[0m', str);
	},
	green: function(str) {
		console.log('\x1b[32m%s\x1b[0m', str);
	},
	yellow: function(str) {
		console.log('\x1b[33m%s\x1b[0m', str);
	}
};

function _log(str, tag) {
	console.log(moment().format('YYYY-MM-DD HH:mm:ss') + '\t' + tag + '\t' + str);
}
