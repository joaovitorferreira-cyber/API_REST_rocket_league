FROM node:22
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN chown -R node:node /app
USER node
EXPOSE 3000
CMD ["npm", "start"]