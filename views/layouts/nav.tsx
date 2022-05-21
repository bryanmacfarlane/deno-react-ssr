/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import { React } from "../../deps.ts";
import { tw } from "../../deps.ts"

export function Nav() {
    const bgStyle = {
      backgroundImage: 'url(/img/hero-bg.jpg)'
    }

    // https://tailwindcomponents.com/component/simple-navigation-3
    return (
        <nav className={tw`dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 shadow-sm max-w-screen-2xl mx-auto`}>
        {/* Logo */}
        <div>
            <span className={tw`h-8`}>
                <img className={tw`h-8 inline w-auto px-3`} src="/logo.svg" alt=""/>
                <span className={tw`font-bold`}>Deno </span>
                <span className={tw`font-bold text-blue-600`}>React </span>
                <span className={tw`font-bold text-red-600`}>Twind</span>
            </span>
        </div>
        {/* /End Logo */}
        <div className={tw`mt-5 md:mt-0`}>
            <ul className={tw`flex flex-col md:flex-row md:space-x-5 w-full items-center`}>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Menu1</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Menu2</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}> Menu3</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

