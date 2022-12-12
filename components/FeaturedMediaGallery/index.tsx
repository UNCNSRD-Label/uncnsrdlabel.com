"use client";

import type {
  Model3d,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, HTMLAttributes, RefObject } from "react";
import type { PartialDeep } from "type-fest";

import { Stage } from "@react-three/drei";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef } from "react";
// import { mergeRefs } from "react-merge-refs";
import useScrollSpy from "react-use-scrollspy";

import Model from "#/components/canvas/Model";
import Scene from "#/components/canvas/Scene";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import styles from "./index.module.css";

type Props = {
  // TODO: Pass images and titles properties only so component can be used for other content types
  product: PartialDeep<Product, { recurseIntoArrays: true }>;
  scrollingElement: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLElement>;

export const Component: FC<Props> = ({
  className,
  product,
  scrollingElement,
  // scrollingElement: parentScrollingElement,
}) => {
  const localScrollingElement = useRef(null);
  // const scrollingElement = mergeRefs([
  //   localScrollingElement,
  //   parentScrollingElement,
  // ]) as RefObject<HTMLElement>;

  const imagesToShow = 2;

  const modelIndex = imagesToShow; // Do not increment as the image map operation's index starts from 0

  // const mediaToShow = imagesToShow + 1; // +1 for the 3D model

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const sectionElementRefs = ([] as Ref<HTMLElement>[]).fill(null, 0, mediaToShow).map(()=> (useRef(null)));

  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection =
    useScrollSpy({
      offsetPx: -64,
      scrollingElement,
      sectionElementRefs,
    }) ?? 0;

  return (
    <section
      className={clsx(styles.root, className)}
      id="featuredMediaGallery"
      ref={localScrollingElement}
    >
      {/* TODO: Add WAI-ARI */}
      <div className={clsx(styles.stepsContainer)}>
        <menu className={clsx(styles.steps, "steps", "steps-vertical")}>
          {product.images?.nodes?.slice(0, 2)?.map((image, index) => (
            <Link
              key={index}
              href={`#featuredMediaGallery-${index}`}
              className={clsx(
                "step",
                styles.step,
                activeSection >= index && "step-primary"
              )}
            >
              <span className={clsx("sr-only")}>Go to image {index}</span>
            </Link>
          ))}
          <Link
            href={`#featuredMediaGallery-${modelIndex}`}
            className={clsx(
              "step",
              styles.step,
              activeSection >= modelIndex && "step-primary"
            )}
          >
            <span className={clsx("sr-only")}>Go to model</span>
          </Link>
        </menu>
      </div>
      {product.images?.nodes
        ?.slice(0, imagesToShow)
        ?.filter(Boolean)
        .map((image, index) => {
          if (!image?.url) {
            return;
          }

          return (
            <figure
              className={clsx(styles.figure)}
              id={`featuredMediaGallery-${index}`}
              key={index}
              ref={sectionElementRefs[index]}
            >
              <Image
                alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                className={clsx(styles.image)}
                fill
                priority
                sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
              25vw`}
                src={image?.url}
                title={product.title ?? IMAGE_TITLE_FALLBACK}
              />
              <figcaption className={clsx(styles.figcaption)}>
                Featured image for {product.title}
              </figcaption>
            </figure>
          );
        })}

      <figure
        className={clsx(styles.figure, styles.model)}
        id={`featuredMediaGallery-${modelIndex}`}
        ref={sectionElementRefs[modelIndex]}
      >
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
                      <Model key={sourceIndex} url={source.url} />
                    ))
                )}
            </Stage>
          </Scene>
        </Suspense>
        <figcaption className={clsx(styles.figcaption)}>
          3D model view for {product.title}
        </figcaption>
      </figure>
    </section>
  );
};

export default Component;
