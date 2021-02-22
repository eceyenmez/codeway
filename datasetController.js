// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

async function queryTotalUserNumber() {

  // Create a client
  const bigqueryClient = new BigQuery();

  // The SQL query to run
  const sqlQuery = "SELECT * FROM `codeway-305121.codeway.total_user_number` order by date desc LIMIT 1";

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query
  const [rows] = await bigqueryClient.query(options);

  console.log('Query Results:');
  console.log(JSON.stringify(rows));

  return JSON.stringify(rows);
}

async function queryDAU() {

  // Create a client
  const bigqueryClient = new BigQuery();

  // The SQL query to run
  const sqlQuery = "SELECT * FROM `codeway-305121.codeway.DAU`";

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query
  const [rows] = await bigqueryClient.query(options);

  console.log('Query Results:');
  console.log(JSON.stringify(rows));

  return JSON.stringify(rows);
}

async function queryDailyAverageDurations() {

  // Create a client
  const bigqueryClient = new BigQuery();

  // The SQL query to run
  const sqlQuery = "SELECT * FROM `codeway-305121.codeway.daily_avg_session_time`";

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query
  const [rows] = await bigqueryClient.query(options);

  console.log('Query Results:');
  console.log(JSON.stringify(rows));

  return JSON.stringify(rows);
}

module.exports = { queryDAU,queryDailyAverageDurations,queryTotalUserNumber };
