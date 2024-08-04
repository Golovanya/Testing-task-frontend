FROM node:18.14.2-alpine
WORKDIR /frontend
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8085
CMD ["npm", "run", "dev"]