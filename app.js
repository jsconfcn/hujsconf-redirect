var express = require('express');
var app = express.createServer();
app.configure(function(){
	app.use(function (req, res, next) {
	  res.setHeader('Location', 'http://hujsconf-us.aws.af.cm/');
	  res.writeHead(301);
	  res.end();
	});
});
app.listen(process.env.VCAP_APP_PORT || process.argv[2] || 3000);