# Run npm to install dependencies for package.json
# Run npm build to make production code
FROM node:8.15 as build-deps
RUN apt-get update
# RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY . ./
RUN echo "8.8.8.8" >> /etc/resolv.conf && \ 
    echo "8.8.8.8" >> /etc/host && \
    npm install --loglevel verbose && \
    npm run build

# Stage 2 - the production environment
FROM nginx:1.15-alpine
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
COPY --from=build-deps /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]