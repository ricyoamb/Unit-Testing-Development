const { response } = require('express')
const app = require('../app.js')
const request = require('supertest')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const BASE_URL = '/api/movies'

describe('GET List movies /api/movies', () => {
  it('GET /api/movies', (done) => {
    request(app)
      .get(`${BASE_URL}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
