FROM node:latest
RUN mkdir /app
COPY app/ /app/
WORKDIR /app
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]