const path = require("path");

const server = path.join(__dirname, "src/server.js");
module.exports = {
	apps: [
		{
			name: "app1",
			script: server,
		},
	],
};
