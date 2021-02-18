const express = require('express');

const app = express();
app.use(express.json());

app.post('/trigger', (req, res) => {
	console.log("wtf")

	//make a post req to an endpoint in other microservices
	var request = require('request');
	request.post(
    'http://localhost:5000/logs',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);

	res.sendStatus(200);
});

//simulates other microservices
app.post('/logs', (req, res) => {
	console.log("hello lanana");

	var fs = require('fs');
	var obj = JSON.parse(fs.readFileSync('dummyEvents.json', 'utf8'));

	res.status(200).json(obj);
});




app.listen(5000,console.log("server started listening on port 5000"));