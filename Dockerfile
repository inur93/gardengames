# build the Vue app for production
FROM node:16.9.0-alpine as client

# working directory inside the container
WORKDIR /frontend

# copy package.json and lock file from host to image and install node modules
# this will speed up rebuilding image due to changes of source files as
# these layer are cached and do not have to be rebuilt
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install --frozen-lockfile

#copy the rest of the source files into the container
COPY ./frontend .

# build the app ##
RUN yarn build

FROM node:16.9.0-alpine as backend

WORKDIR /backend

COPY ./backend/package.json ./
COPY ./backend/yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./backend .

RUN yarn run build

FROM node:16.9.0-alpine as production

RUN mkdir -p /home/node && chown -R node:node /home/node

# set working directory to /home/node as we will run the app using the user 'node'
WORKDIR /home/node

# Copy package.json and package-lock.json
COPY ./backend/package.json ./
COPY ./backend/yarn.lock ./

# Switch to user node
USER node

# Install libraries as user node. If NODE_ENV=production dev_dependencies will not be installed.
RUN yarn install --frozen-lockfile --production=true

# Copy built js files for server and change ownership to user node. 
COPY --chown=node:node --from=backend /backend/build /home/node/backend

# Copy build js files for react app and change ownership to user node.
COPY --chown=node:node --from=client /frontend/dist ./public

# run the server
CMD ["node", "./backend/src/server.js"]