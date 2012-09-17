var server = require("./web-server");
var router = require("./router");

server.start(router.route);
