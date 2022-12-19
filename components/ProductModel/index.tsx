"use client";

import type {
  Model3d,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { Stage } from "@react-three/drei";
import { Suspense } from "react";

import Mannequin from "#/components/canvas/props/Mannequin";
import Scene from "#/components/canvas/Scene";

type Props = {
  className?: ReactNode;
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
};

export const Component: FC<Props> = ({ className, product }) => {
  return (
    <Suspense>
      <Scene>
        <Stage
          adjustCamera={0.5}
          // environment="dawn"
          environment="warehouse"
          intensity={0.5}
          preset="portrait"
          shadows="contact"
        >
          {product.media?.nodes
            ?.filter((node) => node?.mediaContentType === "MODEL_3D")
            .map((node, nodeIndex) =>
              (node as Model3d)?.sources
                ?.filter((source) => source?.format === "glb")
                .map((source, sourceIndex) => (
                  <Mannequin key={sourceIndex} url={source.url} />
                ))
            )}
        </Stage>
      </Scene>
    </Suspense>
  );
};

export default Component;
