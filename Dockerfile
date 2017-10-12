FROM node:latest

# Copy everything
COPY . .

RUN cd app-backend

ENV NODE_ENV production

ENV AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID

RUN yarn global add serverless

RUN yarn install

# CMD [ "yarn", "run", "start-server-lambda:offline"]