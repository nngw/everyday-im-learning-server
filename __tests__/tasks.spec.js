const request = require('supertest')
const app = require('../app')

describe(' Tasks server', () => {
  let testApp

  beforeAll(() => {
    testApp = app.listen(6000, () => {
      console.log('Test server running on port 6000')
    })
  })

  afterAll((done) => {
    console.log('stops test server')
    testApp.close(done)
  })

  it('responds to get / with status 200', (done) => {
    request(app).get('/').expect(200, done)
  })

  it('responds to get /user/:id/task with status 200', (done) => {
    const id = res.body.user_id
    request(app).get(`/user/${id}/task`).expect(200, done)
  })
  it('responds to get /user/:id/task/:id with status 200', (done) => {
    const u_id = res.body.user_id
    const t_id = res.body.task_id
    request(app).get(`/user/${u_id}/tasks/${t_id}`).expect(200, done)
  })

  // delete
  it('responds to DELETE /tests/:id with status 204', (done) => {
    // First, we need to get an existing complaint from the database
    request(app)
      .get('/complaints')
      .then((res) => {
        const u_id = res.body.user_id
        const t_id = res.body.task_id
        // Once we have the ID, we can use it to send a DELETE request to remove the complaint
        return request(app).delete(`/user/${u_id}/tasks/${t_id}`).expect(204)
      })
      .then(() => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
  // get error
  it('throws an error when there are no tasks', (done) => {
    const id = res.body.user_id
    request(app)
      .get(`/user/${id}/tasks`)
      .expect(500)
      .expect('{"error":"No tasks here."}', done)
  })
  // post error
  it('responds to invalid post method request with 404', (done) => {
    request(app).post('/tests').expect(404, done)
  })

  // delete error
  it('responds to invalid delete method request with 404', (done) => {
    request(app).delete('/tasks/:id').expect(404, done)
  })

})
