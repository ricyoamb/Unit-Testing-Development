const { Movie } = require('../models')

class movieRepository {
  static findAll = async (params) => {
    try {
      const movies = await Movie.findAll(params)

      return movies
    } catch (err) {
      throw err
    }
  }

  static findOne = async (params) => {
    try {
      const movie = await Movie.findOne(params)

      return movie
    } catch (err) {
      throw err
    }
  }

  static create = async (params) => {
    try {
      const movie = await Movie.create(params, { returning: true })

      return movie
    } catch (err) {
      throw err
    }
  }

  static update = async (id, body) => {
    try {
      const movie = await Movie.findOne({
        where: {
          id,
        },
      })

      if (!movie) throw { name: 'ErrorNotFound', message: 'Movie not found' }

      await movie.update(body)
    } catch (err) {
      throw err
    }
  }

  static destroy = async (filterOption) => {
    try {
      const movie = await Movie.findOne(filterOption)

      if (!movie) throw { name: 'ErrorNotFound', message: 'Movie not found' }

      await movie.destroy()
    } catch (err) {
      throw err
    }
  }
}

module.exports = movieRepository
