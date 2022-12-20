/* eslint-disable jsx-a11y/alt-text */

import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { ProductsQuery } from "#/gql/graphql";

import { Canvas } from "@react-three/fiber";
// import { clsx } from "clsx";
// import Link from "next/link";
import { request } from "graphql-request";
import { createRef, Suspense } from "react";
import { Vector3 } from "three";

import {
  CameraShake,
  Image,
  OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
  Stage,
  // useVideoTexture,
  // useTexture,
  // useScroll,
  useCamera,
} from "@react-three/drei";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/src/shopify-client";

import document from "../products/index.graphql";

import styles from "./index.module.css";

import Layout from "#/components/Layout";

import Gallery from "#/components/canvas/scenes/Gallery";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const requestHeaders = getPublicTokenHeaders();
    const url = getStorefrontApiUrl();

    const data = await request({
      url,
      document,
      // requestHeaders: getPrivateTokenHeaders({buyerIp}),
      requestHeaders,
    });

    // TODO I don't love how we do this with 'errors' and 'data'
    return { props: { data, errors: null } };
  } catch (err) {
    console.error({ err });
    return { props: { data: null, errors: [(err as Error).toString()] } };
  }
};

export default function Page({
  data,
  errors,
}: StorefrontApiResponseOk<ProductsQuery>) {
  const scrollingElement = createRef<HTMLDivElement>();

  // const scrollData = useScroll()

  // const camera = useCamera()

  if (!data || errors) {
    console.error({ errors });
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  return (
    <Layout ref={scrollingElement} showHeaderAndFooter={true}>
      <Suspense>
        <Canvas
          className={styles.canvas}
          // frameloop="demand"
          resize={{ scroll: false }}
          eventPrefix="client"
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 1],
            // fov: 35,
            near: 0.01,
            far: 100_000,
          }}
          // onPointerMissed={() => (state.clicked = null)}
        >
          {/* <Stage
            adjustCamera
            intensity={0.5}
            shadows="contact"
            environment="city"
          > */}
          <ScrollControls
            pages={3} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Scroll>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              {/* <Box position={[-1.2, 0, 0]} /> */}
              {/* <Box position={[1.2, 0, 0]} /> */}
              <boxGeometry args={[1, 1, 1]} />
              <Gallery
                products={data.products.nodes}
                position={new Vector3(0, 0, 0)}
                rotation={[0, 0, 0]}
              />
              {/* <Image
              url={"https://picsum.photos/536/354"}
              position={[0, 0, 0]}
              rotation={[45, 45, 45]}
            /> */}
            </Scroll>
          </ScrollControls>
          <CameraShake
            maxYaw={0.01}
            maxPitch={0.01}
            maxRoll={0.01}
            yawFrequency={0.125}
            pitchFrequency={0.025}
            rollFrequency={0.075}
          />
          {/* </Stage> */}
          <Preload all />
        </Canvas>
      </Suspense>
    </Layout>
  );
}
