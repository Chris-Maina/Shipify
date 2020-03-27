# SHIPIFY
A small shipping management application used to study Optimisation of a React application i.e. CRA

## Getting started
The application is split into server and client.

To have the client up and running:
- Clone this repository.
- Intall the dependencies by running `yarn install`.
- Add a `.env` file with the environment variable similar to what is in `.env-example`
- Start the client by running `yarn start`.

To get started with the server follow instructions from [FreightHub Challenge](https://github.com/freight-hub/freighthub-frontend-challenge.git)

    PS: If you want to serve and test this application you can use [serve](https://www.npmjs.com/package/serve).
    Run your app using `serve -s build_folder_name`

### Optimisation techniques used

- Route based code splitting
- Precaching by registering CRA service worker. Apart from app loading faster, enables it to be accessible in offline mode
