// /** @jsx React.createElement */
// /** @jsxFrag React.Fragment */

import { React } from "../deps.ts";
import { DefaultLayout } from "./layouts/default.tsx"
import { DefaultProps } from "./layouts/default.tsx"
import { tw } from "../deps.ts"
import { Hero } from "./hero.tsx"

export interface IndexProps extends DefaultProps {
  name: string
}

export function IndexView(props: IndexProps) {
  return (
    <DefaultLayout title={props.title}>
        <Hero/>
        <div className="py-20" style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}>
          <div className="container bg-black mx-auto px-6">
            <p className="subtitle" id="subtitle">
              Hello {props.name}
            </p>
          </div>
        </div> 
        {/* <script src="bundle.js"></script> */}
    </DefaultLayout>
  );
}
