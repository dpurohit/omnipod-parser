TESTS=test/*.js
OPTS=-R tap

build:
	
test: build
	NODE_ENV=test mocha ${OPTS} $(TESTS)

.PHONY: test
