FROM node:10.15-alpine as build-deps

LABEL Author="Olaolu_Akinsete"

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

# Create a working directory
WORKDIR /fakeApi

# Copy files into the working directory
COPY ./src/utils/api/fakeApi.json /fakeApi.json

# Set DNS 
RUN echo "8.8.8.8" >> /etc/resolv.conf && \   
    # Install fake-api server
    npm install -g json-server

# Make json-server available at port 3000
EXPOSE 3000

# Run command
CMD ["json-server", "--watch", "./fakeApi/fakeApi.json"]