'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

// // [START functions_helloworld_get]
// const functions = require('@google-cloud/functions-framework');

// // Register an HTTP function with the Functions Framework that will be executed
// // when you make an HTTP request to the deployed function's endpoint.
// functions.http('helloGET', (req, res) => {
//   res.send('Hello World!');
// });
// // [END functions_helloworld_get]
