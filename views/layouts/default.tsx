import { React } from "../../deps.ts";

export interface DefaultProps {
    title: string,
    children?: React.ReactNode
}

export function DefaultLayout(props: DefaultProps) {
  return (
    <html>
      <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{props.title}</title>
          <link rel="stylesheet" href="css/styles.css"/>
      </head> 
      <body>{props.children}</body>
    </html>
  );
}
