import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { PageQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { createRef } from "react";

import {
  IMAGE_ALT_TEXT_FALLBACK,
  IMAGE_TITLE_FALLBACK,
} from "#/lib/constants/messages";
import { theme } from "#/lib/constants/style";

import NextQueryParamsProvider from "#/lib/providers/next-query-params";

import { getMedia } from "#/lib/util/GraphQL";

import Layout from "#/components/Layout";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/lib/clients/shopify";

import document from "./index.graphql";

import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params,
    // preview = false,
  } = context;

  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const requestHeaders = getPublicTokenHeaders();
    const url = getStorefrontApiUrl();
    const variables = {
      slug,
    };

    const data = await request({
      url,
      document,
      // requestHeaders: getPrivateTokenHeaders({buyerIp}),
      requestHeaders,
      variables,
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
}: StorefrontApiResponseOk<PageQuery>) {
  const { asPath, pathname } = useRouter();

  const scrollingElement = createRef<HTMLDivElement>();

  if (!data?.page) {
    console.error({ errors });
    return <Error statusCode={404} />;
  }

  if (errors) {
    console.error({ errors });
    return <Error statusCode={500} />;
  }

  const { page } = data;

  const images = getMedia(page);

  return (
    <>
      {data.page && data.shop && (
        <NextSeo
          {...(data.page.title && {
            title: `${data.page.title} - ${data.shop?.name}`,
          })}
          {...(data.page.seo?.title && {
            title: `${data.page.seo?.title} - ${data.shop?.name}`,
          })}
          {...(data.page.bodySummary && {
            description: data.page.bodySummary,
          })}
          {...(data.page.seo?.description && {
            description: data.page.seo?.description,
          })}
        />
      )}
      <NextQueryParamsProvider>
        <Layout
          classNameDrawerContent={clsx("drawerContentOverflowY")}
          classNameMain={clsx("page")}
          data={data}
          ref={scrollingElement}
          showHeaderAndFooter={true}
        >
          <article
            dangerouslySetInnerHTML={{
              __html: page?.body,
            }}
          />
          <section className={clsx(styles.section)}>
            {images?.map((image, index) => {
              if (!image?.url) {
                return;
              }

              return (
                <figure
                  className={clsx(styles.figure)}
                  id={`productVariantMediaGallery-${index}`}
                  key={index}
                >
                  <Image
                    alt={image?.altText ?? IMAGE_ALT_TEXT_FALLBACK}
                    className={clsx(styles.image)}
                    height={image?.height ?? 0}
                    sizes={`(max-width: ${theme.screens.xs.max}) 100vw,
              25vw`}
                    src={image?.url}
                    width={image?.width ?? 0}
                  />
                  <figcaption className={clsx(styles.figcaption)}>
                    Featured image
                  </figcaption>
                </figure>
              );
            })}
          </section>
        </Layout>
      </NextQueryParamsProvider>
    </>
  );
}
