import { clsx } from "clsx";

import Demo from "#/components/canvas/Demo";
import Scene from "#/components/canvas/Scene";

import styles from "./page.module.css";

export default function Page() {
  // const ref = useRef();

  return (
    <>
      <title>UNCNSRD - Demo</title>
      <Scene>
        <Demo />
      </Scene>
    </>
  );
}
