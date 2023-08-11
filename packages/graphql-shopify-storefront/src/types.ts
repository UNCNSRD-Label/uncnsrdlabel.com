import { type ParsedMetafields } from "@shopify/hydrogen-react";
import {
  type CollectionConnection,
  type Metafield,
  type Metaobject,
  type PageConnection,
  type ProductConnection,
  type BaseCartLine as ShopifyBaseCartLine,
  type Cart as ShopifyCart,
  type CartLine as ShopifyCartLine,
  type Collection as ShopifyCollection,
  type ComponentizableCartLine as ShopifyComponentizableCartLine,
  type Metafield as ShopifyMetafield,
  type Metaobject as ShopifyMetaobject,
  type Page as ShopifyPage,
  type Product as ShopifyProduct,
  type ProductOption as ShopifyProductOption,
  type ProductVariant as ShopifyProductVariant,
  type ShopPolicy as ShopifyShopPolicy,
} from "@shopify/hydrogen-react/storefront-api-types";

export type {
  ShopifyBaseCartLine,
  ShopifyCart,
  ShopifyCollection,
  ShopifyMetafield,
  ShopifyMetaobject,
  ShopifyPage,
  ShopifyProduct,
  ShopifyProductOption,
  ShopifyProductVariant,
  ShopifyShopPolicy
};

  export { ParsedMetafields, type Metafield, type Metaobject };

export type Maybe<T> = T | null;

export type Edge<T> = {
  node: T;
};

export type Cart = ShopifyCart & {
  linesArray: CartItem[];
};

export type CartLine = ShopifyCartLine

export type ComponentizableCartLine = ShopifyComponentizableCartLine

export type CartItem = ShopifyCartLine | ShopifyComponentizableCartLine

// export type CartItem = {
//   id: string;
//   quantity: number;
//   cost: {
//     totalAmount: Money;
//   };
//   merchandise: {
//     id: string;
//     title: string;
//     selectedOptions: {
//       name: string;
//       value: string;
//     }[];
//     product: Product;
//   };
// };

export type Collection = ShopifyCollection & {
  path: string;
};

export type Image = {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type MediaImage = {
  id: string;
  image: Image;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = ShopifyPage & {
  imagesArray: Image[];
};

export type Policy = {
  __typename?: "ShopPolicy";
  body: string;
  handle: string;
  id: string;
  title: string;
  url: string;
};

export type PolicyHandle =
  | "privacy-policy"
  | "refund-policy"
  | "shipping-policy"
  | "terms-of-service";

export type PolicyName =
  | "privacyPolicy"
  | "refundPolicy"
  | "shippingPolicy"
  | "termsOfService";

export type Policies = {
  privacyPolicy: Policy;
  refundPolicy: Policy;
  shippingPolicy: Policy;
  termsOfService: Policy;
};

export type Product = ShopifyProduct & {
  collectionsArray: Collection[];
  variantsArray: ProductVariant[];
  imagesArray: Image[];
};

export type ProductOption = ShopifyProductOption & {
  // id: string;
  // name: string;
  // values: string[];
};

export type ProductVariant = ShopifyProductVariant & {
  // id: string;
  // image: Image;
  // title: string;
  // availableForSale: boolean;
  // selectedOptions: {
  //   name: string;
  //   value: string;
  // }[];
  // price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

// export type ShopifyCart = {
//   id: string;
//   checkoutUrl: string;
//   cost: {
//     subtotalAmount: Money;
//     totalAmount: Money;
//     totalTaxAmount: Money;
//   };
//   lines: Connection<CartItem>;
//   totalQuantity: number;
// };

// export type ShopifyCollection = {
//   handle: string;
//   title: string;
//   description: string;
//   seo: SEO;
//   updatedAt: string;
// };

// export type ShopifyPage = {
//   id: string;
//   title: string;
//   handle: string;
//   body: string;
//   bodySummary: string;
//   seo?: SEO;
//   createdAt: string;
//   updatedAt: string;
//   mediaImages: {
//     references: Connection<MediaImage>;
//   };
// };

// export type ShopifyProduct = {
//   id: string;
//   handle: string;
//   availableForSale: boolean;
//   title: string;
//   description: string;
//   descriptionHtml: string;
//   options: ProductOption[];
//   priceRange: {
//     maxVariantPrice: Money;
//     minVariantPrice: Money;
//   };
//   compareAtPriceRange: {
//     maxVariantPrice: Money;
//     minVariantPrice: Money;
//   };
//   variants: Connection<ProductVariant>;
//   featuredImage: Image;
//   images: Connection<Image>;
//   seo: SEO;
//   tags: string[];
//   updatedAt: string;
//   metafields: Metafield[];
//   collections: Connection<Collection>;
//   vendor: string;
// };

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: ProductConnection;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: CollectionConnection;
  };
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopifyPageOperation = {
  data: { pageByHandle: ShopifyPage };
  variables: { handle: string };
};

export type ShopifyPagesOperation = {
  data: {
    pages: PageConnection;
  };
};

export type ShopifyPoliciesOperation = {
  data: {
    shop: Policies;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: ProductConnection;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};
