import { Router } from './deps.ts'

import { renderToString } from './deps.ts';
import { React } from "./deps.ts";
import {IndexView, IndexProps} from "./views/index.tsx"

const ux = new Router()
    .get("/", (ctx) => {
        const props: IndexProps = {
            name: "World!",
            title: "foo"
        }
        const el=React.createElement(IndexView, props)
        
        const body=renderToString(el)      
        ctx.response.body = body
    });

export { ux }