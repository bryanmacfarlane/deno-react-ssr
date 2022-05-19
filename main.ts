import { Application } from "./deps.ts";
import { api } from "./api/routes.ts";
import { ux } from "./routes.ts";

const app = new Application();

app.use(api.routes());
app.use(ux.routes());

await app.listen({ port: 8000 });