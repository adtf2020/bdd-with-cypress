# todos-bdd-with-cypress

The web application is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

The application tests are automated using [Cypress](https://www.cypress.io/).

## Quick start

Here's how to run the web application and the automated tests.

```
node -v
npm -v
sudo npm install -g aurelia-cli
cd path/to/project
npm install
au run --open
```
Open another cmd to run cypress tests\
Run ```npm run report:clean``` to clean report folders\
There are two ways to run cypress tests:
### 1) Run cypress tests using cmd

Run ```npm run cy:run:chrome``` to run tests on chrome browser, you can replace 'chrome' in the cmd by 'firefox' or 'electron'\
Run ```npm run cucumber:report:generate``` to generate HTML test report

### 2) Run cypress tests using cypress test runner
Run ```npm run cy:open``` to open cypress tests runner\
Select the browser to use\
Click on todos.feature file name to execute tests\
Once run is done, you can stop the runner and execute ```npm run cucumber:report:generate``` to generate HTML test report