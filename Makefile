start:
	npm run start

build:
	npm run build

bdd-open:
	npm run cypress:open

bdd:
	npm run cypress:run

prod:
	npm run build
	npm run serve
	chrome http://localhost:3000