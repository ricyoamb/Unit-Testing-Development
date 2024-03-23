const { response } = require('express')
const app = require('../app.js')
const request = require('supertest')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const BASE_URL = '/api/movies'

beforeAll(async () => {
  try {
    await queryInterface.bulkInsert(
      'movies-database',
      [
        {
          id: 1,
          title: 'Agak Lain',
          genres: 'Action|Comedy',
          year: '2024',
        },
      ],
      {}
    )
  } catch (err) {
    console.log(err)
  }
})

afterAll(async () => {
  try {
    await queryInterface.bulkDelete('movies-database', null)
  } catch (err) {
    console.log(err)
  }
})

describe('GET List movies /api/movies', () => {
  it('GET /api/movies', (done) => {
    request(app)
      .get(BASE_URL)
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

describe('GET movie by id /api/movies/:id', () => {
  it('GET /api/movies/:id', (done) => {
    request(app)
      .get(`${BASE_URL}/1`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const { body } = response;
        const { data } = body;
        const { id, title, genres, year } = data;

        expect(id).toBe(1)
        expect(title).toBe(null)
        expect(genres).toBe(null)
        expect(year).toBe(null)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})

describe('CREATE movie /api/movies/', () => {
  it('CREATE /api/movies/', (done) => {
    request(app)
      .post(`${BASE_URL}`)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('DELETE movie /api/movies/:id', () => {
  it('GET /api/movies/:id', (done) => {
    request(app)
      .get(`${BASE_URL}/1`)
      .expect(200)
      .then(response => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})