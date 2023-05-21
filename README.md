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
The tests for ultraSaucedemo are organized into different test files under the `cypress/integration` directory. Each test file focuses on a specific feature or scenario of the website.

The `cypress/fixtures` directory contains fixture files that provide test data for the tests.

## Configuration
The configuration file for Cypress can be found at cypress.json. You can modify this file to customize the behavior of Cypress, such as specifying the base URL of the application.

## Continuous Integration Workflow
This repository includes a Continuous Integration (CI) workflow to automate the testing process for the UltraSaucedemo project. The workflow is defined in the `.github/workflows/ci.yml` file.

## Testing Approach:
The chosen testing approach for the "ultraSaucedemo" repository is a combination of manual testing and test automation using Cypress. The manual testing approach involves executing the specified test cases manually on the website "https://www.saucedemo.com/" to validate the expected results. The test automation approach utilizes Cypress, a JavaScript-based testing framework, to automate repetitive test scenarios and enhance the efficiency of the testing process. For both cases, I assert the expected status and information in a detailed way in order to assure quality.

## suggestions for improvements of technical task
1. Maybe each point of the tasks could be more explained (e.g., in the third task related with CI I didn't understand if you want me to implement the framework in a pipeline or if I have to prepare the framework in a ready state so that hypothetically someone else will do it)
2. I had some issues when I start working with https://www.saucedemo.com/ webpage. For some reason the webpage didn't trigger the "load" event all the times that the web loaded and with the latest Cypress version, the command cy.visit() that waits the "load" event to be triggered to start the execution of the testcases,  throws a timeout error. I solved this changing the version of Cypress (I used 10.0.0v) and delete Services workers before the page loads. All those issues could be avoid offering an optional dummy web application.


