# angular - best practices and least dependencies with tooling


## what it does

* concatenates JS from src
* uses ng-annotate to convert angular DI to explicit array form
* minifies code with uglifyjs
* optimizes images
* has unit tests set up with karma and jasmine
* has e2e tests set up with protractor and jasmine


## yet to do

* sass step, sass linting rules, add it to the process
* sass grid example
* imagemin testing (not sure it's well configured)
* compute angular templates to JS
* basic web server with proxies (out of scope maybe)
* do a simple example app


## How do I?

### build

> npm run build


### perform unit tests

> npm run unit-test


### perform end to end tests

In a different tab do:

> npm run selenium-hub


Then:

> npm run e2e-test


You can let the hub die after testing via pressing enter at its console
