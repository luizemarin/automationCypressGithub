# Introduction

Automation for repository creation, update README, delete README and delete repository

# Step 1

To run tests, first must be necessary to download the dependencies (node_modules)
after that just run `npm i` command. This command will be download all necessary dependencies.

# Step 2

In package.json two commands were configured so that the tests are run.

- `npm run cypress:open` this command will open the cypress screen so that if you want to run one or all of the tests, you can follow the tests being executed.
- `npm run test:chrome` this command will run the tests in the background and each completed test will generate a video as evidence.

# Observações

To make the execution more flexible, the username and password for these tests were configured as environment variables in the `cypress.json` file, if you want to run the tests with your personal user, just configure it in these variables.
You can find these variables named `login_user` and `login_pass` inside `env`.

- [Important]: if you change the variables `login_user` and `login_pass`, the environment variable `user_github` must also be changed because it is used for repository deletion tests (since for deletion we must confirm the username along with the repository name)
