# Run npm to install dependencies for package.json
# Run npm build to make production code
FROM node:10.15-alpine as build-deps
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
# RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY . ./
RUN echo "8.8.8.8" >> /etc/resolv.conf && \   
    # npm config set registry https://registry.npmjs.org/ && \
    npm install && \
    npm rebuild node-sass && \
    npm run build

# Stage 2 - the production environment
FROM nginx:1.15-alpine
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
# Copy the distilled version of the file
COPY --from=build-deps /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]