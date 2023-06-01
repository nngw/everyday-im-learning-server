const request = require('supertest');
const app = require('../app');

describe('Api server for signup and login', () => {
  let signupLoginApi

  beforeAll(() => {
    signupLoginApi = app.listen(3000, () => {
      console.log('Test server running on port 3000')
    })
  })

  afterAll((done) => {
    console.log('Stopping test server')
    signupLoginApi.close(done)
  })

  test('it responds to get / with status 200', (done) => {
    request(signupLoginApi)
      .get('/')
      .expect(200, done)
  })

  test('allows user to sign up at /signuplogin with status 201', (done) => {
    const testData = {
      email: "Hello@hello.com",
      password: "abcABC!1"
    }

    request(signupLoginApi)
      .post('/signuplogin/signup')
      .send(testData)
      .set('Accept', 'application/json')
      .expect(400)
      .expect({ ...testData}, done)
  })



})
