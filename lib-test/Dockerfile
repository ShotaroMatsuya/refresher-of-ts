FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# RUN apk update && \
  # npm install --save-dev @types/googlemaps && \
  # npm isntall --save axios && \
  # npm install --save-dev dotenv-webpack  && \
#   npm install --save-dev @types/lodash && \
  # npm install -g typescript && \
  # npm install --save lite-saver

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

