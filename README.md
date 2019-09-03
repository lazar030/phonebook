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

# Your Task:

- Create a WEB APP using **Angular**

## Requirements:

- 1. The UI should be responsive
- 2. The APP should display all the data for each entry in the phone book(api database)
- 3. You should be able to make get/post/put/delete requests from the Web App that will effect the DB and those changes should be reflected in the APP itself
- 4. Add validation on the client side to inform the user that a **name** and a **number** are required when submitting a new entry or changing one.(The API will not accept entries without a name and a number)

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
The finished source files or a link to a github repository with your solution send to: d.sisovic@antek.it (do not send a packaged/built minified file but the whole project)
# phonebook
