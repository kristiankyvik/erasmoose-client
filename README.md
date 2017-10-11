# Unirank (beta)

Unirank is a tool that enables you too choose the right erasmus destination. Get an overview over:
  - all european erasmus university destinations
  - how students rank their experience 
  - a wide variety of metrics
 
**DEMO**: [unirank](https://unirank.now.sh/)

# Technology Stack

The webapp is implemented with the following technologies:
  - **Backend**: a serverless app employing GraphSql, contained by a AWS Lambda instance that comunicates with a MongoDB database through a REST API
  - **Frontend**: a react app, employing the [next.js](https://zeit.co/blog/next) framework

Both parts of the application are hosted separately, and communicate using the Apollo GraphSql Client.

## Setup

You need to have Node 6 or higher installed.
```
npm install -g serverless
npm install -g yarn
```

# Get Started
To get started, clone the project:
```
git clone https://github.com/kristiankyvik/unirank.git
```

Install Dependencies (FrontEnd and BackEnd)
```
cd app-backend
yarn install
cd ../app-client
npm install
```

Test Locally - Use Apollo Lambda Server
```
# Start Server http://localhost:4000/graphql
cd app-backend
yarn run start-server-lambda:offline
```

## Start Client

```
# Start Client http://localhost:3000
cd app-client
npm run dev
```

OR

```
# Start Client http://localhost:3000
cd app-backend
yarn run start-client-local
```

# Deploy

Configure your AWS keys. Here you can find a [2min walkthrough](https://www.youtube.com/watch?v=mRkUnA3mEt4) how to do retrieve the keys.

```
sls config credentials --provider aws --key <your_aws_access_key> --secret <your_aws_secret_key>
```

Then run the following command:
```
cd app-backend
yarn run deploy-server-lambda-prod
```

## Directory Layout

```bash
.
├── /app-client/                     # React Client with Apollo Integration
│   ├── /pages/                      # fpages
│   ├── /components                  # react components
│   ├── /.next                       # fNext JS  config files
│   ├── /package.json                # react app dependencies
├── /app-backend/                    # Server Backend with Apollo Integration
│   ├── /handler.js                  # AWS Lambda - Apollo Lambda Server
│   ├── /package.js                  # server side dependencies
│   ├── /resolvers.js                # graphql resolvers
│   ├── /schema.js                   # graphql schema
│   ├── /serverless.yaml             # Serverless yaml for AWS deployment
│   ├── /webpack.config.js           # Webpack server side code with ES6
├── /config/                         # Configuration files
│   ├── /security.env.local          # local config
│   ├── /security.env.prod           # production config
```

## Multiple package.json

In order to keep the total amount of code uploaded to AWS Lambda small the `foundation/app-server` directory containing the Serverless service has it's own `package.json`. This speeds up uploading and also should reduce the cold start time of Lambda functions. You don't have to run `yarn install` manually at any point. It will only happen during deploy, but you need make sure every library you are consuming in your GraphQL endpoint is added as a dependency there.

### `app-client/package.json`

- dependencies: dependencies used by the front-end
- devDependencies: dependencies used to package the front-end application & running the local environment

### `app-backend/package.json`

- dependencies: dependencies used on AWS Lambda
