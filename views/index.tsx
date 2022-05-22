// /** @jsx React.createElement */
// /** @jsxFrag React.Fragment */

import { React } from "../deps.ts";
import { DefaultLayout } from "./layouts/default.tsx"
import { DefaultProps } from "./layouts/default.tsx"
import { tw } from "../deps.ts"
import { Hero } from "./components/hero.tsx"

export interface IndexProps extends DefaultProps {
  name: string
}

export function IndexView(props: IndexProps) {
  return (
    <DefaultLayout title={props.title}>

        <Hero title="Deno SSR + React + Twind Sample" 
              subtitle="Composable React using Tailwind via Twind"/>
        
        <div className={tw`container bg-white mx-auto p-5`}>
          <p className={tw`subtitle`} id="subtitle">
            Body ... {props.name}
          </p>
        </div>
        {/* <script src="bundle.js"></script> */}
    </DefaultLayout>
  );
}
