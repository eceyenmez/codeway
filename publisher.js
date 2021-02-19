/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
 const topicName = 'projects/codeway-305121/topics/codeway';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage(body) {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)

  try {

  	for(const log in body){
  		console.log(body[log]);
  		const data = JSON.stringify(log);
  		console.log(data);
        const dataBuffer = Buffer.from(data);
        const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
  	}
    
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}


module.exports = { publishMessage };
