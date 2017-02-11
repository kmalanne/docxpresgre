FROM node:latest
RUN mkdir /app
ADD app/ /app/
WORKDIR /app
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]