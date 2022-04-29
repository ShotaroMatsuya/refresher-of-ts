FROM node:16-alpine

# RUN apk update && \
#   npm install -g typscript && \
#   npm install -g parcel-bundler

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]