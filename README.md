# Red Companies Logic Test

This repository contains a logic test for Red Companies to apply for a Javascript Sr Developer.

This project is using es6 features some es6 features that cannot be loaded normally so we are using babel to make the transpilation to a older javascript.

## Install dependencies

First we need to install our project dependencies as almost every node.js project. All dependencies are listed in `package.json` file

```sh
npm install
```

## Run project

```sh
npm start
```

This command will build the source code, generate a `./dist` directory and runs the `index.js` file.

You will be able to see many outputs of this test in the terminal, from 0 to 1000.

## Run unit test

```sh
npm run test
```

The above command going to execute jest command through the package.json scripts