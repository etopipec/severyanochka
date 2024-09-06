FROM node:20-alpine3.20 as build-stage

WORKDIR /app

RUN apk update \
  && apk add git \
  && git clone https://github.com/vadimkaKharitonenko/severyanochka.git . \
  && git pull

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-only

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]