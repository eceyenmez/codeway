const express = require('express');
const publisher = require('./publisherService.js');
const dataset = require('./datasetService.js');


const app = express();
app.use(express.json());

app.post('/trigger', (req, res) => {
	//make a post req to an endpoint in other microservices
	var request = require('request');

	request.post(
    'https://test-305121.uc.r.appspot.com/logs',
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

	var fs = require('fs');
	var obj = JSON.parse(fs.readFileSync('dummyEvents.json', 'utf8'));

	res.status(200).json(obj);
});


app.get('/dau', (req, res) => {
	
	dataset.queryDAU().then(result => { 
		res.status(200).json(JSON.parse(result));

	});

});

app.get('/totalUserNumber', (req, res) => {
	
	dataset.queryTotalUserNumber().then(result => { 
		res.status(200).json(JSON.parse(result));

	});

});

app.get('/queryDailyAverageDurations', (req, res) => {
	
	dataset.queryDailyAverageDurations().then(result => { 
		res.status(200).json(JSON.parse(result));

	});

});




app.listen(8080,console.log("server started listening on port 8080"));
