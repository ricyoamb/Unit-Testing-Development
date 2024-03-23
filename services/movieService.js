const movieRepository = require('../repositories/movieRepository')

class MovieService {
  static findAll = async (params) => {
    try {
      const movies = await movieRepository.findAll(params)

      return movies
    } catch (err) {
      throw err
    }
  }

  static findOne = async (id) => {
    try {
      const filterOption = {
        where: { id },
      }

      const movie = await movieRepository.findOne(filterOption)

      if (!movie) throw { name: 'ErrorNotFound', message: 'Movie not found' }
      return movie
    } catch (err) {
      throw err
    }
  }

  static create = async (params) => {
    try {
      const movie = await movieRepository.create(params)

      return movie
    } catch (err) {
      throw err
    }
  }

  static uploads = async (file) => {
    try {
      if (file) {
        const url = `${process.env.BASE_URL}/api/images/${file.filename}`

        return url
      } else {
        throw { name: 'MissingFile' }
      }
    } catch (err) {
      throw err
    }
  }

  static update = async (params) => {
    try {
      const { id, body } = params
      await movieRepository.update(id, body)
    } catch (err) {
      throw err
    }
  }

  static destroy = async (id) => {
    try {
      const filterOption = {
        where: {
          id
        }
      }
      await movieRepository.destroy(filterOption)
    } catch (err) {
      throw err
    }
  }
}

module.exports = MovieService
