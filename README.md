# angular - best practices and least dependencies with tooling


## what it does

* concatenates JS from src
* uses ng-annotate to convert angular DI to explicit array form
* minifies code with uglifyjs
* optimizes images
* has unit tests set up with karma and jasmine
* has e2e tests set up with protractor and jasmine
* does JS linting with eslint
* does SCSS linting with sass-lint
* pretty dumb componentized app


## yet to do

* compute angular templates to JS


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
