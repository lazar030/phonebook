# Bookphone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# PhoneBookAPI

# To run:

- Open the runapi.bat file or open a command terminal and navigate to the directory with server.js and run "node server.js"

# The Api routes

- /get - to get all the entries
- /get/:id - to get just one entry with that specific id
- /post - to post a new entry into the database
- /delete/:id - to delete an entry from the database with that specific id
- /put - to edit an entry in the database

**Note:** The database is in memory so on each restart of the server/api the db data will be reset to the default values.
**Note:** The Server runs on port 3000. (So you should sent requests to Example: http://localhost:3000/get)

# phonebook
