import { clsx } from "clsx";

import Demo from "#/components/canvas/Demo";
import Scene from "#/components/canvas/Scene";

import styles from "./page.module.css";

export default function Page() {
  // const ref = useRef();

  return (
    <>
      <title>UNCNSRD - Demo</title>
      <Scene
        className={clsx("pointer-events-none")}
        // eventSource={ref}
        eventPrefix="client"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 160, 160], fov: 20 }}
      >
        <Demo route="/" position-y={-0.75} />
      </Scene>
    </>
  );
}
