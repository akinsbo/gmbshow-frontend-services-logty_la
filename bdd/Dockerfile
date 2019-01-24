# Run npm to install dependencies for package.json
# Run npm build to make production code
FROM cypress/base:10 as build-deps
WORKDIR /app
COPY . ./
RUN npm install
CMD ["npm" "run" "cypress:run"]