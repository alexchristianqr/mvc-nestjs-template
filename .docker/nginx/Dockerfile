FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY general /etc/nginx/general/
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
