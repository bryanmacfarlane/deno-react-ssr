/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import { React } from "../../deps.ts";
import { tw } from "../../deps.ts"
import { SVGButton } from "./svgbutton.tsx"

export interface HeroProps {
  title: string,
  subtitle: string,
}

export function Hero(props: HeroProps) {
    const bgStyle = {
      backgroundImage: 'url(/img/hero-bg.jpg)'
    }

    // https://tailwindcomponents.com/component/heros
    return (
      <div className={tw`w-full h-screen bg-center bg-no-repeat bg-cover`} style={ bgStyle }>
          <div className={tw`w-full h-screen bg-opacity-50 bg-black flex justify-center items-center`}>
              <div className={tw`mx-4 text-center text-white`}>
                  <h1 className={tw`font-bold text-5xl mb-4`}>{props.title}</h1>
                  <h2 className={tw`font-bold text-2xl mb-12`}>{props.subtitle}</h2>
                  <div>
                      <SVGButton svgurl="/img/github.svg" text="Repo" bgcolor="bg-green-600" tgturl="https://github.com/bryanmacfarlane/deno-react-ssr"/>
                      <SVGButton svgurl="/logo.svg" text="Deno" bgcolor="bg-blue-600" tgturl="https://github.com/bryanmacfarlane/deno-react-ssr"/>
                  </div>
              </div>
          </div>
      </div>      
    )
  }