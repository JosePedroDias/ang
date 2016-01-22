# angular - best practices and least dependencies with tooling


## what it does

* concatenates JS from src
* uses ng-annotate to convert angular DI to explicit array form
* minifies code with uglifyjs
* optimizes images
* has unit tests set up with karma and jasmine
* has e2e tests set up with protractor and jasmine
* does js linting with eslint
* does scss linting with sass-lint


## yet to do

* sass grid example
* compute angular templates to JS
* imagemin testing (not sure it's well configured)
* basic web server
* do a simple example app


## How do I?

### lint

> npm run lint


### build

> npm run build


### perform unit tests

> npm run test:unit


### perform end to end tests

In a different tab do:

> npm run selenium-hub


Then:

> npm run test:e2e


You can let the hub die after testing via pressing enter at its console
