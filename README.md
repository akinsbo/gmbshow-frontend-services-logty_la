# gmbshow-frontend-services-logty_la

Please see the docs directory for more specific documentation.
Please see the Makefile for a list of runnable commands. Report any bugs found.

Note: If Jest returns error "cannot find module xyz",
Apply [this fix]("https://stackoverflow.com/questions/12594541/npm-global-install-cannot-find-module")

## Ports and Services

Please see the Makefile for possible services and the ports they run on. For example, Stylefuidist works on port 6060.

## Production Preparation

- When serving the app in production, ensure to perform a performance check on Chrome's Lighthouse extension.

- Set the webserver configuration to serves brotli extension `.br` files rather than `.js` files.

## Reuse

To reuse this codebase for other products, e.g. product foo

- Create a folder foo in public folder and update it with assets
- Create a folder cypress-cucumber-foo directory in the project root
- Add the following to scripts in the package.json

```json

    "start:foo": "webpack-dev-server -p --progress --env.ENVIRONMENT=development --env.STYLE=foo --config webpack.dev.js",

    "build:foo": "webpack -p --progress --env.ENVIRONMENT=production --env.STYLE=foo --config webpack.prod.js",

```

- To reduce typing while working on foo project, you may replace the `npm run start-twemd` and `npm run build:twemd` commands in `make start` and `make-build` to `npm run start-foo` and `npm run build:foo`respectively.

### Acceptance Testing

To conduct acceptance testing for a product foo, first set it up using the following:

```sh

    cd cypress-cucumber-foo
    npm install

```

Now you may run `npm run cypress:run` or `npm run cypress:open`. You are encourged to use the Makefile to shorten commands for development speed.
