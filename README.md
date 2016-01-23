# angular project with best practices & few dependencies, using npm scripts


## what it does

* concatenates JS from src
* uses ng-annotate to convert angular DI to explicit array form
* minifies code with uglifyjs
* optimizes images
* has unit tests set up with karma and jasmine
* has e2e tests set up with protractor and jasmine
* does JS linting with eslint
* does SCSS linting with sass-lint
* converts angular templates into JavaScript calls via ng-html-to-js
* features a pretty dumb componentized example app



## How do I?

### set it up

> [sudo] npm install


### lint

> npm run lint


### build

> npm run build


### serve the resulting app

> npm run serve


### perform unit tests

> npm run test:unit


### perform end to end tests

In a different tab do:

> npm run selenium-hub


Then:

> npm run test:e2e


You can let the hub die after testing via pressing enter at its console
