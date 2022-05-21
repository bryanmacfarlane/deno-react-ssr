install:  
	deno cache --reload ./deps.ts

run:
	deno run -A ${DENO_ARGS} main.ts

dev:
	deno run -A ${DENO_ARGS} --watch main.ts

fmt:
	deno fmt --config=deno.json
fmt-watch:
	deno fmt --watch --config=deno.json

lint:
	deno lint --config=deno.json