/* eslint-disable jsx-a11y/alt-text */
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import {
  //   Float,
  //   Html,
  Image,
  //   Mask,
  OrbitControls,
  //   ScreenSpace,
  Sky,
  Stage,
  //   Text,
  useIntersect,
  useScroll,
  //   useVideoTexture,
  //   useTexture,
} from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, MathUtils, Mesh, Vector3 } from "three";

// import Logo from "#/components/canvas/props/Logo";

const Item = ({
  url,
  scale,
  ...props
}: {
  position: Vector3;
  scale: [number, number];
  url: string;
}) => {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect<Mesh>((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);

  // useFrame((state, delta) => {
  //   ref.current.position.y = MathUtils.damp(
  //     ref.current.position.y,
  //     visible.current ? 0 : -height / 2 + 1,
  //     4,
  //     delta
  //   );
  //   ref.current.material.zoom = MathUtils.damp(
  //     ref.current.material.zoom,
  //     visible.current ? 1 : 1.5,
  //     4,
  //     delta
  //   );
  //   ref.current.material.grayscale = MathUtils.damp(
  //     ref.current.material.grayscale,
  //     hovered ? 0 : 1,
  //     4,
  //     delta
  //   );
  // });

  console.log(props.position);

  return (
    <group {...props}>
      <Image
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale}
        url={url}
      />
    </group>
  );
};

const ProductsWall = (
  props: JSX.IntrinsicElements["group"] & {
    products: PartialDeep<Product, { recurseIntoArrays: true }>[];
  }
) => {
  //   const scrollData = useScroll();
  const { width: w, height: h } = useThree((state) => state.viewport);

  const group = useRef<Group>(null);

  let count = 0;
  let row = 1;

  return (
    <group {...props} ref={group}>
      {props.products.map((product, index) => {
        let position = [-w / 6, h * (row - 1), 0];
        let scale: [number, number] = [w / 3, w / 3];

        if (count === 1) {
          position = [w / 30, h * -row, 0.25];
          scale = [2, w / 3];
        }

        if (count === 2) {
          position = [-w / 4, h * 1 * -row, 1];
          scale = [w / 3, w / 5];
        }

        if (count === 3) {
          position = [w / 4, h * 1.2 * -row, 0.75];
          scale = [w / 5, w / 5];
        }

        if (count === 4) {
          position = [w / 10, h * 1.75 * -row, 0.5];
          scale = [w / 5, w / 5];
        }

        if (count === 5) {
          position = [-w / 4, h * 2 * -row, 0.125];
          scale = [w / 3, w / 3];
        }

        if (count === 6) {
          position = [-w / 4, h * 2.6 * -row, 0.375];
          scale = [w / 3, w / 3];
        }

        if (count === 7) {
          position = [w / 4, h * 3.1 * -row, 0.625];
          scale = [w / 8, w / 8];
        }

        if (count === 8) {
          position = [-w / 6, h * 4.1 * -row, 0.875];
          scale = [w / 2.5, w / 2];
        }

        count++;

        if (count > 8) {
          count = 0;
          row++;
        }

        if (!product.featuredImage?.url) {
          return null;
        }

        return (
          <Item
            key={index}
            url={product.featuredImage.url}
            position={new Vector3(...position)}
            // rotation={[0, 0, 0]}
            scale={scale}
          />
        );
      })}
    </group>
  );
};

export default function Scene(
  props: JSX.IntrinsicElements["group"] & {
    products: PartialDeep<Product, { recurseIntoArrays: true }>[];
  }
) {
  const fontUrl = `/fonts/bomber-escort/bomberescortoutital.ttf`;

  const parent = props.position as THREE.Vector3;

  const x = parent?.x ?? 0;
  const y = parent?.y ?? 0;
  const z = parent?.z + 100 ?? 100;

  const position = new Vector3(x, y, z);

  return (
    <Stage
      adjustCamera={false}
      intensity={0.5}
      shadows="contact"
      environment="city"
    >
      <group {...props} position={position}>
        {/* <Sky
        distance={450_000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}

        <ProductsWall {...props} position={position} />

        {/* <Mask id={1} position={[0, 0, 0.95]}>
        <Text
          characters="UNCNSRD"
          font={fontUrl}
          position={[0, 0.6, 0]}
          rotation={[0, 0, 0]}
          color="black"
          anchorX="center"
          anchorY="middle"
          fontSize={0.1}
        >
          UNCNSRD
        </Text>
      </Mask> */}

        {/* <Image
        url={"https://picsum.photos/536/354"}
        position={[-1, -1, -1]}
        rotation={[90, 90, 90]}
      /> */}

        {/* <Text
        characters="UNCNSRD"
        font={fontUrl}
        position={[0, 0.6, 0]}
        rotation={[0, 0, 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={0.1}
      >
        UNCNSRD
      </Text> */}
        {/* <Html occlude position={[0, -0.6, 0]}
              rotation={[0, 0, 0]}>
              <Link href="/" className={styles.logotype} title="Go to site">Shop&nbsp;now</Link>
            </Html> */}
        {/* <Logo position={[0, 0, 0]} rotation={[0, 0, 0]} /> */}
        {/* <OrbitControls makeDefault /> */}
      </group>
    </Stage>
  );
}
