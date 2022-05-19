import { Router } from '../deps.ts'

const msgs = new Router()
    .get("/", (ctx) => {
        ctx.response.body = JSON.stringify(['one', 'two', 'three'], null, 2)
    });

const api = new Router()
    .use("/api/messages", msgs.routes())

export { api }