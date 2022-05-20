import { Router } from './deps.ts'

import { renderToString } from './deps.ts';
import { React } from "./deps.ts";
import {IndexView, IndexProps} from "./views/index.tsx"
import {render} from "./ssr.tsx"

const ux = new Router()
    .get("/", (ctx) => {
        const props: IndexProps = {
            name: "World!",
            title: "foo"
        }
        const el=React.createElement(IndexView, props)
        const content = renderToString(el)
        const html=render(content)

        ctx.response.body = html 
    });

export { ux }