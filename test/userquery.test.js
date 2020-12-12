const request = require('supertest');
const express = require('express');
const { TestScheduler } = require('jest');

const app = express();

app.get('/test', function (req, res) {
  res.status(200).json({ name: 'john' });
});

test('Get all users', () => {
  request(app).get('/test').expect(200);
});

request(app)
  .get('/test')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });

// function sum(a, b) {
//   return a + b;
// }

// test('a+b result', () => {
//   expect(sum(1, 4)).toBe(3);
// });
