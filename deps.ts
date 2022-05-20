// export { extname } from "https://deno.land/std@0.140.0/path/mod.ts";

export {
    Application,
    Context,
    Response,
    etag,
    Router,
    ServerSentEvent,
  } from "https://deno.land/x/oak@v10.5.1/mod.ts";
  
export type {
    ContextSendOptions,
    Middleware,
    ServerSentEventTarget,
  } from "https://deno.land/x/oak@v10.5.1/mod.ts";

//
// ESM
// https://deno.land/x/esm@v45
//
import { default as React } from "https://esm.sh/react@17.0.2?target=deno";
import { renderToString } from "https://esm.sh/react-dom@17.0.2/server?target=deno";

//
// SKYPACK
//
// https://docs.skypack.dev/skypack-cdn/code/deno
// ?dts brings the .dts type defininition along
// import React from 'https://cdn.skypack.dev/react?dts';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom?dts';
// import { renderToString } from "https://cdn.skypack.dev/react-dom/server?dts";

export {
    React,
    // ReactDOM,
    renderToString
}

export * as twind from "https://esm.sh/twind@0.16.16?target=deno"
// export { default as serialize } from "https://esm.sh/serialize-javascript@6.0.0?target=deno&pin=v59";

// import typography from "https://esm.sh/@twind/typography@0.0.2?target=deno&pin=v61&no-check";
// export { typography };

import { setup, tw } from "https://esm.sh/twind@0.16.16";
export { setup, tw }
import { getStyleTag, virtualSheet } from "https://esm.sh/twind@0.16.16/sheets";

export {
  getStyleTag,
  virtualSheet,
} 
export type { VirtualSheet } from "https://esm.sh/twind@0.16.16/sheets?target=deno";

//
// tailwindui dependencies
//
// export {
//   Disclosure,
//   Menu,
//   Transition,
// } from "https://esm.sh/@headlessui/react@1.4.2?target=deno&deps=react@17.0.2,react-dom@17.0.2";

// export {
//   BellIcon,
//   MenuIcon,
//   XIcon,
// } from "https://esm.sh/@heroicons/react@1.0.5/outline?target=deno";
