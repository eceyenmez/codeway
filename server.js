const express = require('express');
const publisher = require('./publisherController.js');
const dataset = require('./datasetController.js');


const app = express();
app.use(express.json());

app.post('/trigger', (req, res) => {
	console.log("hello lokisan")

	//make a post req to an endpoint in other microservices
	var request = require('request');

	request.post(
    'https://codeway-305121.uc.r.appspot.com/logs',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            publisher.publishMessage(body);
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


app.get('/dau', (req, res) => {
	console.log("hello midyesu");
	
	dataset.queryDAU().then(result => { 
		console.log("eceeee2345: "+result);
		res.status(200).json(JSON.parse(result));

	});

});

app.get('/totalUserNumber', (req, res) => {
	console.log("hello jagujagu");
	
	dataset.queryTotalUserNumber().then(result => { 
		console.log("eceeee: "+result);
		res.status(200).json(JSON.parse(result));

	});

});

app.get('/queryDailyAverageDurations', (req, res) => {
	console.log("hello hossiksu");
	
	dataset.queryDailyAverageDurations().then(result => { 
		console.log("eceeee: "+result);
		res.status(200).json(JSON.parse(result));

	});

});




app.listen(8080,console.log("server started listening on port 8080"));