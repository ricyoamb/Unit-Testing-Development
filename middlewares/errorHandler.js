const errorHandler = (err, req, res, next) => {
  console.log(err)
  if (err.name === 'ErrorNotFound') {
    res.status(404).json({ name: err.name, message: err.message })
  } else if (err.name === 'MisingFile') {
    res.status(401).json({ message: 'Missing File' })
  } else {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = errorHandler
