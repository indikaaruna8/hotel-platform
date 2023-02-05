FROM node:14-alpine AS nodebuilder
ENV NODE_ENV production
# Add a work directory
WORKDIR /var/www/react-app
# Cache and Install dependencies
COPY  webapp/package.json .
COPY  webapp/yarn.lock .
RUN yarn install --production
# Copy app files
COPY  webapp/. .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from nodebuilder
COPY --from=nodebuilder /var/www/react-app/build /var/www/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /var/www/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
    
# Start nginx
CMD ["nginx", "-g", "daemon off;"]