'use client';

import { useIntersectionObserver } from '@react-hooks-library/core';
import { AddToCart } from 'components/product/add-to-cart';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { useRef } from 'react';

export function Details({ product }: { product: Product }) {
  const informationRef = useRef(null);
  // const mainRef = useRef(null);

  const { inView, entry, stop } = useIntersectionObserver(
    informationRef,
    {
      // root: mainRef,
      threshold: 0.5
    },
    (entries) => {
      console.log({ entries });
    }
  );

  console.log({ inView, entry, stop });

  return (
    <div className="lg:grid lg:grid-cols-6">
      <div className="bg-red-500 lg:col-span-4"></div>

      <div className="lg:col-span-2">
        <div className="h-fit p-6" ref={informationRef}>
          {/* @ts-expect-error Server Component */}
          <VariantSelector options={product.options} variants={product.variants} />

          {product.descriptionHtml ? (
            <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
          ) : null}

          <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
        </div>
      </div>
    </div>
  );
}
