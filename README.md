[![Build Status](https://travis-ci.org/ducin/testing-boilerplate.svg?branch=jasmine-node)](https://travis-ci.org/ducin/testing-boilerplate)

This branch contains boilerplate setup for unit testing with [jasmine-node](https://github.com/mhevery/jasmine-node).

* [`src/calc.js`](src/calc.js) file is a node module, it's CommonJS-compliant
* [`src/calc.spec.js`](src/calc.spec.js) file imports above implementation file

# installation

Install the dependencies:

    npm install

as well as karma cli:

    npm install -g jasmine-node

the run one of the following:

    npm test
    ./node_modules/.bin/jasmine-node src/
