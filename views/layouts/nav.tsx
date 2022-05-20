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
        <nav className={tw`bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b shadow-sm max-w-screen-2xl mx-auto`}>
        {/* Logo */}
        <div>
            <h2 className={tw`text-3xl font-bold`}>
            <a>My <span className={tw`text-blue-600`}>B</span>rand</a>
            </h2>
        </div>
        {/* /End Logo */}
        <div className={tw`mt-5 md:mt-0`}>
            <ul className={tw`flex flex-col md:flex-row md:space-x-5 w-full items-center`}>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Products</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Company</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Partners</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>News</a>
            </li>
            <li>
                <a className={tw`font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300`}>Contact Us</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

