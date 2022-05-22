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

export interface SVGButtonProps {
    tgturl: string,
    svgurl: string,
    text: string,
    bgcolor: string,
}

export function SVGButton(props: SVGButtonProps) {
  return (
    <a href={props.tgturl} className={tw`${props.bgcolor}rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2`}>
        <img className={tw`h-8 inline w-auto px-3`} src={props.svgurl} alt=""/>{props.text}
    </a>
  );
}