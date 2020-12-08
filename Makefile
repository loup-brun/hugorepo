.PHONY: build

help:
	@echo "Usage: make <command>"
	@echo "  n       Create a new note."
	@echo "  serve   Runs a development webserver on port 1313"
	@echo "  build   Build the site with minification."
	@echo "  build-staging   Build the site with *staging* configuration."
	@echo "  deploy  Run the deployment."
	@echo "  all     Build and deploy."

serve:
	hugo serve --disableFastRender

build:
	npm run build:styles
	rm -rf public
	hugo --minify

deploy:
	cmd/deploy.sh

all:
	make build
	make deploy
