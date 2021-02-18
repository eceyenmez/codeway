/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
 const topicName = 'projects/codeway-305121/topics/codeway';
 const data = JSON.stringify({
    "type": "event",
    "app_id": "com.codeway.test",
    "session_id": "yH5aqLMPGq",
    "event_name": "click",
    "event_time": 1598353852115,
    "page": "main",
    "country": "GB",
    "region": "England",
    "city": "Botley",
    "user_id": "HrRocv2FSu"
  });

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage() {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}