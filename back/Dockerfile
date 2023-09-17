FROM node:18-alpine
LABEL authors="daechanjo"

WORKDIR /app/back

COPY . .

RUN npm install

EXPOSE 8000

CMD ["yarn", "start"]
