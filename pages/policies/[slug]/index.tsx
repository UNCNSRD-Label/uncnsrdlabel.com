import type { StorefrontApiResponseOk } from "@shopify/hydrogen-react";
import type { GetServerSideProps } from "next";

import type { PoliciesQuery } from "#/generated/graphql/graphql";

import { clsx } from "clsx";
import { request } from "graphql-request";
import Error from "next/error";
import { useRouter } from "next/router";
import { createRef } from "react";

import NextQueryParamsProvider from "#/lib/providers/next-query-params";

import Layout from "#/components/Layout";

import {
  getStorefrontApiUrl,
  getPublicTokenHeaders,
} from "#/lib/clients/shopify";

import document from "./index.graphql";

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
}: StorefrontApiResponseOk<PoliciesQuery>) {
  const { query } = useRouter();

  const scrollingElement = createRef<HTMLDivElement>();

  if (!data?.shop) {
    console.error({ errors });
    return <Error statusCode={404} />;
  }

  if (errors) {
    console.error({ errors });
    return <Error statusCode={500} />;
  }

  const { shop } = data;

  let innerHTML = null;

  switch (query.slug) {
    case "privacy-policy":
      // @ts-expect-error
      innerHTML = shop.privacyPolicy?.body;
      break;
    case "refund-policy":
      // @ts-expect-error
      innerHTML = shop.refundPolicy?.body;
      break;
    case "shipping-policy":
      // @ts-expect-error
      innerHTML = shop.shippingPolicy?.body;
      break;
    case "terms-of-service":
      // @ts-expect-error
      innerHTML = shop.termsOfService?.body;
      break;
    default:
      return <Error statusCode={404} />;
  }

  return (
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
            __html: innerHTML,
          }}
        />
      </Layout>
    </NextQueryParamsProvider>
  );
}
