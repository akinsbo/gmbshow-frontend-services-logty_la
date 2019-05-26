start:
	npm run start

build:
	npm run build
	npm run serve

bddac:
	cd bdd
	npm run cypress:run

open:
	cd bdd
	npm run cypress:open

story:
	npm run storybook

# Serve storybook as an independent app
story-build:
	npm run build-storybook
	npx serve .

docker:
	docker build --rm -f "local.Dockerfile" -t logty_la:latest .

local-docker:
	bash build.sh
	
bdd-docker:
	docker build --rm -f "bdd/Dockerfile" -t bdd:latest bdd
	docker run --rm -d bdd:latest

# Serve fake API
api:
	npm run json:server