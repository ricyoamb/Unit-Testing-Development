# File-Design-Pattern

## Requirements

* Nodejs 20.11.0
* Postgresql 8.11.3
* Postman (for API testing)

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

* Run the program
```
$ npm run start
```

### References

* [Express](https://expressjs.com)
* [Postgresql](https://www.postgresql.org)
* [Stackoverflow](https://stackoverflow.com)
