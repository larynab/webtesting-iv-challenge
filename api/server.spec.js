//testing endpoints
//returns correct http status code
//supertest for these tests
const request = require("supertest");
//bring in server js for cruds-responses
const server = require("../api/server.js");

//SERVER
describe("server.js", () => {
  describe("GET root /", () => {
    //jest
    it("should respond with 200 ok", () => {
      //requesting from imported server.js, return to wait for promise
      return (
        request(server)
          //get the endpoint
          .get("/")
          //response from request
          .then(response => {
            expect(response.status).toBe(200);
          })
      );
    });

    //ASYNC
    it("ASYNC should respond with 200 ok", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    //DONE
    it("DONE should respond with 200 ok", done => {
      request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
          //call done
          done();
        });
    });

    //supertest
    it("shortcut with 200 ok", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    //jest
    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    //supertest
    it("shortcut check for json", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/);
    });

    //RETURN OBJECT
    it("it should return API: up", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body)
            //targetted object, check to be the same, not toBe, bu toEqual
            .toEqual({ api: 'up' });
        });
    });
  });
});

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
