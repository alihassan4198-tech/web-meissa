FROM node:16

ENV PORT 7700

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --force

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 7700

# Running the app
CMD "npm" "run" "dev"
