
.PHONY: run
run:
	hugo server --disableFastRender -w


.PHONY: css-watch
css-watch:
	sass --watch src/scss/:static/css/

.PHONY: build
build:
	npm install
	node sync-slug.js
	hugo