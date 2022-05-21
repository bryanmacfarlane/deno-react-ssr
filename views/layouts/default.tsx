import { React } from "../../deps.ts";
import { Nav } from "./nav.tsx"
import { tw } from "../../deps.ts"

export interface DefaultProps {
    title: string,
    children?: React.ReactNode
}

export function DefaultLayout(props: DefaultProps) {
    return (
      <div className={tw`bg-white dark:bg-black`}>
        <Nav/>
        <div>{props.children}</div>
      </div>
    );
  }
