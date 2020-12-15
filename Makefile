.PHONY: build

help:
	@echo "Usage: make <command>"
	@echo "  serve   Runs a development webserver on port 1313"
	@echo "  build   Build the site with minification."
	@echo "  deploy  Run the deployment."
	@echo "  all     Build and deploy."

serve:
	hugo serve --disableFastRender

build:
#	npm run build:styles
	rm -rf public
	hugo --minify

deploy:
	commands/deploy.sh

all:
	make build
	make deploy
