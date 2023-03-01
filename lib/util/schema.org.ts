import type { ParsedMetafields } from "@shopify/hydrogen-react";
import type {
  Product,
  ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";
import type { PartialDeep } from "type-fest";

import {
  ProductModel as ProductModelSchema,
  Product as ProductSchema,
  WithContext,
} from "schema-dts";

import { getMetafieldForSchemaOrg } from "#/lib/util/GraphQL";

import { getProductURL } from "#/lib/util/url";

export const getAvailability = (
  productVariant: PartialDeep<ProductVariant, { recurseIntoArrays: true }>
) => {
  // See https://schema.org/ItemAvailability
  let availability = "OutOfStock";

  if (productVariant.availableForSale) {
    availability = "InStock";
  }

  if (
    productVariant.quantityAvailable &&
    productVariant.quantityAvailable < 5
  ) {
    availability = "LimitedAvailability";
  }

  if (productVariant.currentlyNotInStock) {
    availability = "BackOrder";
  }

  //   productVariant.storeAvailability?.nodes.

  return `https://schema.org/${availability}`;
};

// TODO: Merge with version above
// const getAvailability = (
//   variant?: PartialDeep<
//     Pick<
//       ProductVariant,
//       "availableForSale" | "currentlyNotInStock" | "quantityAvailable"
//     >,
//     { recurseIntoArrays: true }
//   >
// ) => {
//   if (!variant?.availableForSale) {
//     return false;
//   }

//   let availability = "PreOrder";

//   if (variant?.currentlyNotInStock) {
//     availability = "OutOfStock";
//   }

//   if (variant?.quantityAvailable) {
//     availability = "LimitedAvailability";
//   }

//   if (variant?.availableForSale) {
//     availability = "InStock";
//   }

//   return `https://schema.org/${availability}`;
// };

export const mapProductGraphQLtoSchemaOrg = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>
): WithContext<ProductSchema> => ({
  // Properties from Product
  "@context": "https://schema.org",
  "@type": "ProductModel",
  audience: getMetafieldForSchemaOrg<
    ParsedMetafields["single_line_text_field"]
  >(product, { namespace: "custom", key: "audience" }),
  brand: getMetafieldForSchemaOrg<ParsedMetafields["single_line_text_field"]>(
    product,
    { namespace: "custom", key: "brand" }
  ),
  category: product.productType,
  color: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "color",
  }),
  countryOfAssembly: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "countryOfAssembly",
  }),
  countryOfLastProcessing: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "countryOfLastProcessing",
  }),
  countryOfOrigin: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "countryOfOrigin",
  }),
  depth: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "depth",
  }),
  gtin: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "gtin" }),
  gtin12: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "gtin12",
  }),
  gtin13: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "gtin13",
  }),
  gtin14: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "gtin14",
  }),
  gtin8: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "gtin8",
  }),
  // hasAdultConsideration: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "hasAdultConsideration",
  // }),
  height: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "height",
  }),
  identifier: product.id,
  inProductGroupWithID: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "inProductGroupWithID",
  }),
  // isAccessoryOrSparePartFor: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "isAccessoryOrSparePartFor",
  // }),
  // isConsumableFor: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "isConsumableFor",
  // }),
  // isRelatedTo: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "isRelatedTo",
  // }),
  // isSimilarTo: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "isSimilarTo",
  // }),
  // isVariantOf: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "isVariantOf",
  // }),
  // itemCondition: getMetafieldForSchemaOrg(product, {
  //   namespace: "custom",
  //   key: "itemCondition",
  // }),
  // keywords: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "keywords" }),
  logo: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "logo" }),
  manufacturer: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "manufacturer",
  }),
  material: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "material",
  }),
  model: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "model",
  }),
  mpn: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "mpn" }),
  // offers: {
  //   "@type": "Offer",
  //   availability: getAvailability(productVariant),
  //   price: "55.00",
  //   priceCurrency: "USD",
  // },
  // offers: {
  //   "@type": "AggregateOffer",
  //   highPrice: "$1495",
  //   lowPrice: "$1250",
  //   offerCount: "8",
  //   offers: [
  //     {
  //       "@type": "Offer",
  //       url: "save-a-lot-monitors.com/dell-30.html",
  //     },
  //     {
  //       "@type": "Offer",
  //       url: "jondoe-gadgets.com/dell-30.html",
  //     },
  //   ],
  // },
  pattern: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "pattern",
  }),
  productID: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "productID",
  }),
  productionDate: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "productionDate",
  }),
  releaseDate: product.publishedAt,
  size: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "size" }),
  sku: getMetafieldForSchemaOrg(product, { namespace: "custom", key: "sku" }),
  slogan: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "slogan",
  }),
  // weight: product.weight,
  width: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "width",
  }),

  // // Properties from Thing
  alternateName: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "alternateName",
  }),
  description: product.description,
  disambiguatingDescription: getMetafieldForSchemaOrg(product, {
    namespace: "custom",
    key: "disambiguatingDescription",
  }),
  image: product.featuredImage?.url,
  mainEntityOfPage: getProductURL(product),
  name: product.title,
  // potentialAction: getMetafieldForSchemaOrg(product, 'custom', 'potentialAction'),
  sameAs: getProductURL(product),
  // subjectOf: getMetafieldForSchemaOrg(product, 'custom', 'subjectOf'),
  url: getProductURL(product),
});

export const mapProductVariantGraphQLtoSchemaOrg = (
  product: PartialDeep<Product, { recurseIntoArrays: true }>,
  productVariant: PartialDeep<ProductVariant, { recurseIntoArrays: true }>
): WithContext<ProductModelSchema> => ({
  // Properties from Product
  "@context": "https://schema.org",
  "@type": "ProductModel",
  audience: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "audience",
  }),
  brand: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "brand",
  }),
  // category: productVariant.productType,
  color: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "color",
  }),
  countryOfAssembly: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "countryOfAssembly",
  }),
  countryOfLastProcessing: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "countryOfLastProcessing",
  }),
  countryOfOrigin: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "countryOfOrigin",
  }),
  depth: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "depth",
  }),
  gtin: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "gtin",
  }),
  gtin12: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "gtin12",
  }),
  gtin13: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "gtin13",
  }),
  gtin14: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "gtin14",
  }),
  gtin8: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "gtin8",
  }),
  // hasAdultConsideration: getMetafieldForSchemaOrg(productVariant, 'custom', 'hasAdultConsideration'),
  height: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "height",
  }),
  identifier: productVariant.id,
  inProductGroupWithID: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "inProductGroupWithID",
  }),
  // isAccessoryOrSparePartFor: getMetafieldForSchemaOrg(productVariant, 'custom', 'isAccessoryOrSparePartFor'),
  // isConsumableFor: getMetafieldForSchemaOrg(productVariant, 'custom', 'isConsumableFor'),
  // isRelatedTo: getMetafieldForSchemaOrg(productVariant, 'custom', 'isRelatedTo'),
  // isSimilarTo: getMetafieldForSchemaOrg(productVariant, 'custom', 'isSimilarTo'),
  // isVariantOf: getMetafieldForSchemaOrg(productVariant, 'custom', 'isVariantOf'),
  // itemCondition: getMetafieldForSchemaOrg(productVariant, 'custom', 'itemCondition'),
  // keywords: getMetafieldForSchemaOrg(productVariant, 'custom', 'keywords'),
  logo: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "logo",
  }),
  manufacturer: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "manufacturer",
  }),
  material: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "material",
  }),
  model: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "model",
  }),
  mpn: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "mpn",
  }),
  // offers: {
  //   "@type": "Offer",
  //   availability: "https://schema.org/InStock",
  //   price: "55.00",
  //   priceCurrency: "USD",
  // },
  // offers: {
  //   "@type": "AggregateOffer",
  //   highPrice: "$1495",
  //   lowPrice: "$1250",
  //   offerCount: "8",
  //   offers: [
  //     {
  //       "@type": "Offer",
  //       url: "save-a-lot-monitors.com/dell-30.html",
  //     },
  //     {
  //       "@type": "Offer",
  //       url: "jondoe-gadgets.com/dell-30.html",
  //     },
  //   ],
  // },
  pattern: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "pattern",
  }),
  productID: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "productID",
  }),
  productionDate: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "productionDate",
  }),
  releaseDate: product.publishedAt,
  size: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "size",
  }),
  sku: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "sku",
  }),
  slogan: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "slogan",
  }),
  // weight: productVariant.weight,
  width: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "width",
  }),

  // Properties from Thing
  alternateName: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "alternateName",
  }),
  description: product.description,
  disambiguatingDescription: getMetafieldForSchemaOrg(productVariant, {
    namespace: "custom",
    key: "disambiguatingDescription",
  }),
  image: productVariant.image?.url,
  mainEntityOfPage: getProductURL(product),
  name: productVariant.title,
  // potentialAction: getMetafieldForSchemaOrg(productVariant, 'custom', 'potentialAction'),
  sameAs: getProductURL(product),
  // subjectOf: getMetafieldForSchemaOrg(productVariant, 'custom', 'subjectOf'),
  url: getProductURL(product),

  // Instances of Product may appear as a value for the following properties
  // hasVariant: getMetafieldForSchemaOrg(productVariant, { namespace: "custom", key: "hasVariant" }),
  // isBasedOn: getMetafieldForSchemaOrg(productVariant, { namespace: "custom", key: "isBasedOn" }),
  // isBasedOnUrl: getMetafieldForSchemaOrg(productVariant, {
  //   namespace: "custom",
  //   key: "isBasedOnUrl",
  // }),
  // isConsumableFor: getMetafieldForSchemaOrg(productVariant, 'custom', 'isConsumableFor'),
  // isRelatedTo: getMetafieldForSchemaOrg(productVariant, 'custom', 'isRelatedTo'),
  // isSimilarTo: getMetafieldForSchemaOrg(productVariant, 'custom', 'isSimilarTo'),
  // itemShipped: getMetafieldForSchemaOrg(productVariant, {
  //   namespace: "custom",
  //   key: "itemShipped",
  // }),

  // isVariantOf
  // predecessorOf
  // successorOf
});
