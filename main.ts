import { Application } from "./deps.ts";
import { api } from "./api/routes.ts";
import { ux } from "./routes.ts";

const app = new Application();

app.use(api.routes());
app.use(ux.routes());

// static files in /public
app.use(async (context, next) => {
    try {
      await context.send({
        root: `${Deno.cwd()}/public`,
        index: "index.html",
      });
    } catch {
      next();
    }
  });

await app.listen({ port: 8000 });