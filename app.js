const express = require('express');
const app = express();
const User = require('./src/models').User;
// console.log(t);
const testFolder = './test-vol/';
const fs = require('fs');
console.log('This is first');
app.get('/test2', async (req, res) => {
  await User.create({
    name: 'Vahram',
    email: 'Vahram@gmail.com',
    password: 12345,
  });
  res.send('11');
});

app.get('/test', (_, res) => {
  res.status(200).send('0');
});

console.log('This is second');
app.get('/', (req, res) => {
  res.send('VAHRAMCHIK');
});
// docker builder prune --all
//docker run -it -p 1010:5050 -v test:/usr/src/app node-test1
//docker build -t node-test .
//docker-compose -f my-docker.yaml up
//docker-compose rm --all &&
//docker-compose pull &&
//docker-compose build --no-cache &&
//docker-compose up -d --force-recreate &&
//
//
//
//
const PORT = 5050;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
