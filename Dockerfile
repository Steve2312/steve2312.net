#FROM node:20-alpine3.17 as build
#WORKDIR /steve2312.net
#COPY ..  /steve2312.net
#
#RUN npm i
#RUN npm run build
#
#FROM nginx:latest
#COPY --from=build /steve2312.net/dist /usr/share/nginx/html

FROM nginx:latest
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist /usr/share/nginx/html
