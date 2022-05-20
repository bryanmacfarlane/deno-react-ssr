/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import { React } from "../deps.ts";
import { tw } from "../deps.ts"

export function Hero() {
    const bgStyle = {
      backgroundImage: 'url(/img/hero-bg.jpg)'
    }

    // https://tailwindcomponents.com/component/heros
    return (
      <div className={tw`w-full h-screen bg-center bg-no-repeat bg-cover`} style={ bgStyle }>
          <div className={tw`w-full h-screen bg-opacity-50 bg-black flex justify-center items-center`}>
              <div className={tw`mx-4 text-center text-white`}>
                  <h1 className={tw`font-bold text-6xl mb-4`}>This is a test</h1>
                  <h2 className={tw`font-bold text-3xl mb-12`}>This is a test</h2>
                  <div>
                      <a href="" className={tw`bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2`}>
                          Click here
                      </a>
                      <a href="" className={tw`bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2`}>
                          Or click here
                      </a>
                  </div>
              </div>
          </div>
      </div>      
    )
  }