# ultraSaucedemo
ultraSaucedemo is a sample e-commerce website built for demonstration and testing purposes. It serves as a sandbox for practicing automation testing using Cypress.

## Installation
To install and run ultraSaucedemo locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/jorge-lc/ultraSaucedemo.git
```
2. Change to the project directory:

```
cd ultraSaucedemo
```
3. Install the dependencies:
```
npm install
```
## Running the Tests
To run the Cypress tests in a headless way for ultraSaucedemo, use the following command:

```
npm run headlessTests
```
if you want to run the tests in a headed way, use the following command:
```
npm run headedTests
```
This command will launch the Cypress Test Runner, where you can select the desired test spec to run:
```
npx cypress open
```

## Test Structure
The tests for ultraSaucedemo are organized into different test files under the 'cypress/integration' directory. Each test file focuses on a specific feature or scenario of the website.

The 'cypress/fixtures' directory contains fixture files that provide test data for the tests.

## Configuration
The configuration file for Cypress can be found at cypress.json. You can modify this file to customize the behavior of Cypress, such as specifying the base URL of the application.