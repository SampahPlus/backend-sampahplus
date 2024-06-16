FROM node:20
WORKDIR /app
ENV PORT 8081
COPY . .
RUN npm install
EXPOSE 8081
CMD ["npm","run", "start:dev"]