//testing endpoints
//returns correct http status code
//supertest for these tests
const request = require('supertest');
//bring in server js for cruds-responses
const server = require('../api/server.js');

//SERVER
describe('server.js', () => {
  describe('GET root /', () => {
    it('should respond with 200 ok', () => {
      //requesting from imported server.js, return to wait for promise
      return request(server)
      //get the endpoint
      .get('/')
      //response from request 
      .then(response => {expect(response.status).toBe(200)});
    })
  })
})






















//GUIDED DEMO-------------------------------------------------------------------------------
// const request = require('supertest');
// const server = require('./server.js');

// testing endpoints
// returns correct http status code

// describe('server.js', () => {
//   describe('GET /', () => {
//     it('should respond with 200 OK', () => {
//       return request(server)
//         .get('/')
//         .then(response => {
//           expect(response.status).toBe(200);
//         });
//     });

//     it('should respond with 200 OK async', async () => {
//       const response = await request(server).get('/');

//       expect(response.status).toBe(200);
//     });

//     it('should respond with 200 OK async', done => {
//       request(server)
//         .get('/')
//         .then(response => {
//           expect(response.status).toBe(200);

//           done();
//         });
//     });

//     it('should work', () => {
//       return request(server)
//         .get('/')
//         .expect(200);
//     });

//     it('should return JSON', () => {
//       return request(server)
//         .get('/')
//         .then(res => {
//           expect(res.type).toBe('application/json');
//         });
//     });
//   });

//   it('should check for json', () => {
//     return request(server)
//       .get('/')
//       .expect('Content-Type', /json/);
//   });

//   it('should return { api: "up" }', () => {
//     return request(server)
//       .get('/')
//       .then(res => {
//         expect(res.body).toEqual({ api: 'up' });
//       });
//   });
// });