import LogoRotating from "#/components/canvas/scenes/LogoRotating";

import { Canvas } from "@react-three/fiber";

import styles from "./index.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <Canvas
        className={styles.canvas}
        // frameloop="demand"
        resize={{ scroll: false }}
        eventPrefix="client"
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 0],
          // fov: 35,
          near: 0.01,
          far: 100_000,
        }}
      >
        <LogoRotating position={[1, 1, 1]} />
      </Canvas>
    </main>
  );
}
