# NextJs and GraphQl

GraphQL has been very helpful in performance and security by

- not overfetching or underfetching the data from the server
- Merging data from different sources into one call.
- Massaging in a format that can be directly used by the UI components.

NextJs has been a framework to help end to end of the frontend development. Starting from Serverside rendering to deploying and all the application. Now merging these two would give quite a lot of advantage to development.

There are many packages of graphql. Here we are using "graphql-request" and "graphql" being the base of the graphql. We are using typescript for static type checking.

Steps done for creating

- Create a nextjs application using `create-next-app --ts`. --ts is for typescript.
- Add graphql modules `npm add graphql graphql-request`
- In the get static props of the component, create a graphql server and fetch the data.

To test, we have used a dummy server. We would require a endpoint where the data is hosted. Here we are using [Countries](https://countries.trevorblades.com).

### Environment setup

Create a environment file to store. (.env.local)
GRAPHQL_ENDPOINT="https://countries.trevorblades.com"

## TODO

- Create a server. : Apollo standalone server
  - Write resolvers, fetch data from 2-3 sources.
