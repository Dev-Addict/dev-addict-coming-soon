FROM ariaazadipour/node-frontend:14 as build-stage

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app/

RUN yarn build

FROM nginx:1.21.1

COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
