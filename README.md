# File-Design-Pattern

## Requirements

* Nodejs 20.11.0
* Postgresql 8.11.3
* Docker Desktop

## Pre-requesited
* migrate with sequelize
```
$ sequelize db:migrate
```

* Import this [sql](https://github.com/fathy17/modul-3-rakamin/blob/master/movies-database.sql) to postgresql
* migrate up all file
```
$ pg_restore -U postgres -d movies-database -c  movies-database.sql
```

### Getting Started

* Run unit testing local
```
$ npm run test
```

* Run docker
```
$ npm run docker
```
* Run CI/CD
```
$ npm run start
```

### References

* [Express](https://expressjs.com)
* [Postgresql](https://www.postgresql.org)
* [Docker](https://hub.docker.com/)
* [Stackoverflow](https://stackoverflow.com)
