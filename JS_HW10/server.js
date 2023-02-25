let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(_request, response) {
	console.log("Start page is running here");
	response.send("<h1>Wellcome to the lesson jQuery</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	response.send("You have successfully used GET method: " + JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.query);
	response.send("You have successfully used POST method: " + JSON.stringify(request.query));
});

server.listen(3000);