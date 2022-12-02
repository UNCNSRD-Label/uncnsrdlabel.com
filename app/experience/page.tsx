// import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { clsx } from "clsx";
// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
// import { useRef } from "react";
// import * as THREE from "three";

import Lollipops from "#/components/canvas/Lollipops";
import Scene from "#/components/canvas/Scene";
import SignupForm from "#/components/SignupForm";

import styles from "./page.module.css";

// const Scene = dynamic(() => import('#/components/canvas/Scene'), { ssr: true })

export default function Page() {
  // const ref = useRef();

  return (
    <>
      <title>UNCNSRD - Experience</title>
      <Scene>
        <Lollipops />
      </Scene>
      <div className={clsx(styles.container, "fitViewport", "fixed")}>
        {/* <Link
          href="/"
          className={styles.logotype}
          title="uncnsrdlabel.com"
        >
          <Image
            alt="UNCNSRD logo"
            fill
            priority
            src="/images/logos/logotype.svg"
          />
        </Link> */}

        {/* <h1 className={styles.title}>UNCNSRD</h1> */}

        <SignupForm />

        <section className={styles.copy}>
          <h1 className={styles.title}>UNCNSRD</h1>
          <p>
            UNCNSRD is multifunctional swimwear for female figures who
            aren&apos;t afraid to show off their assets and want to feel
            unapologetically sexy.
          </p>
          <p>
            Inspired by rebellious women and street fashion, UNCNSRD strives to
            create innovative designs that can be multifunctional, yet still
            remain practical at its core.
          </p>
        </section>
      </div>
    </>
  );
}
