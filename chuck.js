var http = require("https");

var options = {
	"method": "GET",
	"hostname": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
	"port": null,
	"path": "/jokes/random",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "2c19478a9dmsh82b87dc0ef20995p129153jsnad6290d366b5",
		"accept": "application/json"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();