import { React } from "../../deps.ts";
import { Nav } from "./nav.tsx"

export interface DefaultProps {
    title: string,
    children?: React.ReactNode
}

export function DefaultLayout(props: DefaultProps) {
    return (
      <div>
        <Nav/>
        <div>{props.children}</div>
      </div>
    );
  }
