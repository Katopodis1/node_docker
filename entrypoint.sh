#!/bin/sh


# createdb --host=localhost -p 5432 --username=postgres --no-password pg_development
npm install
npm i -g sequelize-cli
sequelize db:migrate
sequelize db:seed:all


npm start