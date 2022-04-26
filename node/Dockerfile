FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# RUN apk update && \
  # npm install --save-dev @types/node
  # npm install --save-dev @types/express
  # npm install -g typescript
  # npm install --save lite-saver

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

