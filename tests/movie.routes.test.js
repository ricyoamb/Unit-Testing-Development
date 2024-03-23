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

describe('GET movie /api/movies/:id', () => {
  it('GET /api/movies/:id', (done) => {
    request(app)
      .get(`${BASE_URL}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const {body} = response;
        const {data} = body;
        const {id,title,genres,year} = data;

        expect(id).toEqual(1)
        expect(title).toEqual('Reckless')
        expect(genres).toEqual('Comedy|Drama|Romance')
        expect(year).toEqual('2001')
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('CREATE movie /api/movies/:id', () => {
  it('CREATE /api/movies/', (done) => {
    request(app)
      .post(`${BASE_URL}`)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        const {body} = response;
        const {data} = body;
        const {title,genres,year} = data;

        expect(title).toEquel("Agak Lain")
        expect(genres).toEquel("Comedy|Drama|Romance")
        expect(year).toEquel("2024")
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('DELETE movie /api/movies/:id', () => {
  it('DELETE /api/movies/:id', (done) => {
    request(app)
      .delete(`${BASE_URL}/1`)
      .expect(200)
      .then((response) => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})