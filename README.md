[![Build Status](https://travis-ci.org/ducin/testing-boilerplate.svg?branch=karma-typescript)](https://travis-ci.org/ducin/testing-boilerplate)

This branch contains boilerplate setup for unit testing with [karma test runner](https://karma-runner.github.io/) using [TypeScript](typescriptlang.org).

* [`src/calc.ts`](src/calc.ts) is a plain TypeScript file with some logic
* [`src/calc.spec.ts`](src/calc.spec.ts) is a plain TypeScript file with BDD-style assertions
* [`karma.conf.js`](karma.conf.js) includes karma config

Karma runner will load both sources and specs, according to the config file, and execute jasmine tests in the browsers.

Among the browsers, `IE`, `Chrome`, `Firefox`, etc. are opened as windows in the OS and so require a graphical environment, whereas `PhantomJS` might be executed from the console, without graphical environment (hence used in travis job).

# installation

Install the dependencies:

    npm install

as well as karma cli:

    npm install -g karma-cli

the run one of the following:

    npm test
    karma start
    karma start karma.conf.js
    karma start --single-run
    karma start --browsers=IE
