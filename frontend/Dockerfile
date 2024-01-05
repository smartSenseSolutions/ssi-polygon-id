FROM node:18.15-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/public/ /usr/share/nginx/port80/public

COPY --from=build /app/dist/ /usr/share/nginx/port80

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]

## To Run this file Fire below command
## sudo docker build -t rrm .
## sudo docker build -t rrm --build-arg ENVIRONMENT=development . 
## sudo docker build -t rrm --build-arg ENVIRONMENT=qa . 
## sudo docker build -t rrm --build-arg ENVIRONMENT=production . 
## sudo docker build -t rrm --build-arg ENVIRONMENT=demo . 
## To run run container
## sudo docker run -d -p 1234:80 rrm