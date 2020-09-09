start:
	npm run start:twemd

build:
	npm run build:twemd
	npm run serve

ssr:
	@echo "content to run on port 8080"
	@echo
	npm run dev:ssr:twemd
	npm run serve:ssr:twemd

bdd:
	npm run acceptance-test

bdd-open:
	npm run acceptance-test:open

stylesheet:
	npx styleguidist server

docker:
	docker build --rm -f "local.Dockerfile" -t logty_la:latest .

local-docker:
	bash util.sh

bdd-docker:
	docker build --rm -f "bdd/Dockerfile" -t bdd:latest bdd
	docker run --rm -d bdd:latest

# Serve fake API
api:
	echo "please first run 'npm install -g json-serve' to install json-server"
	npm run generate-fake-data
	npm run json:server --watch ./src/utils/api/data/fakeApi.json --port 3001

# Generate data
data:
	npm run generate-fake-data

test:
	npm run jest