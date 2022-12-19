import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useThree, type GroupProps } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { state, damp } from "#/lib/util/canvas";

const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

export function Minimap({
  nodes,
}: {
  nodes: PartialDeep<Product, { recurseIntoArrays: true }>[];
}) {
  const ref = useRef<GroupProps>(null);
  const scroll = useScroll();
  //   const { urls } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    // @ts-ignore
    ref.current?.children?.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(
        index / nodes.length - 1.5 / nodes.length,
        4 / nodes.length
      );
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta);
    });
  });
  return (
    // @ts-ignore
    <group ref={ref}>
      {nodes.map((_, i) => (
        <line
          key={i}
          // @ts-ignore
          geometry={geometry}
          material={material}
          position={[i * 0.06 - nodes.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
}
