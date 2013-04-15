LICENSE_COMMENT="/*! par 0.1.1 Copyright (c) 2013 Alan Plum. MIT licensed. */"

test:
	@./node_modules/.bin/mocha \
		--growl \
		--reporter spec \
		spec/*.spec.js

clean:
	@rm -rf dist

dist/vendor: clean
	@mkdir -p dist/vendor

dist/par.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/par.js
	@cat src/par.js >> dist/par.js

dist/par.globals.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/par.globals.js
	@echo "(function(root){\
	var require=function(key){return root[key];},\
	exports=(root.par={});" >> dist/par.globals.js
	@cat src/par.js >> dist/par.globals.js
	@echo "}(this));" >> dist/par.globals.js

dist/par.amd.js: dist/vendor
	@echo $(LICENSE_COMMENT) > dist/par.amd.js
	@echo "define(function(require, exports) {" >> dist/par.amd.js
	@cat src/par.js >> dist/par.amd.js
	@echo "});" >> dist/par.amd.js

dist/par.min.js: dist/par.js
	@./node_modules/.bin/uglifyjs dist/par.js > dist/par.min.js

dist/par.globals.min.js: dist/par.globals.js
	@./node_modules/.bin/uglifyjs dist/par.globals.js > dist/par.globals.min.js

dist/par.amd.min.js: dist/par.amd.js
	@./node_modules/.bin/uglifyjs dist/par.amd.js > dist/par.amd.min.js

dist: dist/par.min.js dist/par.globals.min.js dist/par.amd.min.js

lint:
	@./node_modules/.bin/jshint src/par.js spec

.PHONY: lint test clean
