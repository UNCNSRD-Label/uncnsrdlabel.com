import { getInContextVariables } from "@uncnsrdlabel/lib";
import { CollectionFragment } from "../codegen/graphql";
import { getFragmentData } from "../codegen/index";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "../mutations/cart";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "../queries/collection";
// import { collectionFragment } from "../fragments/collection";
import { camelCase } from "lodash";
import {
  AddToCartMutationVariables,
  CreateCartMutationVariables,
  EditCartItemsMutationVariables,
  GetCartQueryVariables,
  GetCollectionProductsQueryVariables,
  GetCollectionQueryVariables,
  GetCollectionsQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductBasicQueryVariables,
  GetProductDetailsQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  RemoveFromCartMutationVariables,
} from "../codegen/graphql";
import {
  cartFragment,
  collectionFragment,
  pageFragment,
  productBasicFragment,
  productDetailsFragment,
} from "../fragments/index";
import {
  getCartQuery,
  getMenuQuery,
  getPageQuery,
  getPagesQuery,
  getPoliciesQuery,
  getProductBasicQuery,
  getProductDetailsQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
  getProductsWithVariantsQuery,
} from "../queries/index";
import { type PolicyName } from "../types";
import { getMenuItems, getShopifyGraphQL } from "../utilities";

export class Server {
  inContextVariables: ReturnType<typeof getInContextVariables>;
  lang: Intl.BCP47LanguageTag;

  constructor(lang: Intl.BCP47LanguageTag) {
    this.inContextVariables = getInContextVariables(lang);
    this.lang = lang;
  }

  async createCart(variables: CreateCartMutationVariables) {
    const { cartCreate } = await getShopifyGraphQL(createCartMutation, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!cartCreate) {
      return null;
    }

    // console.log({ cartCreate });

    const { cart: cartFragmentRef } = cartCreate;

    if (!cartFragmentRef) {
      return null;
    }

    // console.log({ cartFragmentRef });

    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return cart;
  }

  async addToCart(variables: AddToCartMutationVariables) {
    const { cartLinesAdd } = await getShopifyGraphQL(addToCartMutation, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!cartLinesAdd) {
      return null;
    }

    // console.log({ cartLinesAdd });

    const { cart: cartFragmentRef } = cartLinesAdd;

    if (!cartFragmentRef) {
      return null;
    }

    // console.log({ cartFragmentRef });

    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return cart;
  }

  async removeFromCart(variables: RemoveFromCartMutationVariables) {
    const { cartLinesRemove } = await getShopifyGraphQL(
      removeFromCartMutation,
      { ...this.inContextVariables, ...variables },
    );

    if (!cartLinesRemove) {
      return null;
    }

    // console.log({ cartLinesRemove });

    const { cart: cartFragmentRef } = cartLinesRemove;

    if (!cartFragmentRef) {
      return null;
    }

    // console.log({ cartFragmentRef });

    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return cart;
  }

  async updateCart(variables: EditCartItemsMutationVariables) {
    const { cartLinesUpdate } = await getShopifyGraphQL(editCartItemsMutation, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!cartLinesUpdate) {
      return null;
    }

    // console.log({ cartLinesUpdate });

    const { cart: cartFragmentRef } = cartLinesUpdate;

    if (!cartFragmentRef) {
      return null;
    }

    // console.log({ cartFragmentRef });

    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return cart;
  }

  async getCart(variables: GetCartQueryVariables) {
    // @ts-expect-error Types of property 'country' are incompatible.
    const { cart: cartFragmentRef } = await getShopifyGraphQL(getCartQuery, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!cartFragmentRef) {
      return null;
    }

    // console.log({ cartFragmentRef });

    const cart = getFragmentData(cartFragment, cartFragmentRef);

    return cart;
  }

  async getCollection(variables: GetCollectionQueryVariables) {
    const { collection: collectionFragmentRef } = await getShopifyGraphQL(
      getCollectionQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      { ...this.inContextVariables, ...variables },
    );

    if (!collectionFragmentRef) {
      throw {
        status: 404,
        message: `Collection not found for handle \`${variables.handle}\``,
      };
    }

    // console.log({ collectionFragmentRef });

    const collection = getFragmentData(
      collectionFragment,
      collectionFragmentRef,
    );

    return collection;
  }

  async getCollectionProducts(variables: GetCollectionProductsQueryVariables) {
    // @ts-expect-error Types of property 'country' are incompatible.
    const { collection } = await getShopifyGraphQL(getCollectionProductsQuery, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!collection) {
      throw {
        status: 404,
        message: `Collection not found for handle \`${variables.handle}\``,
      };
    }

    // console.log({ collection });

    const { products } = collection;

    return products;
  }

  async getCollections(variables: GetCollectionsQueryVariables) {
    const { collections: shopifyCollectionConnection } =
      // @ts-expect-error Types of property 'country' are incompatible.
      await getShopifyGraphQL(getCollectionsQuery, {
        ...this.inContextVariables,
        ...variables,
      });

    if (!shopifyCollectionConnection) {
      throw {
        status: 404,
        message: `Collections not found`,
      };
    }

    // console.log({ shopifyCollectionConnection });

    const shopifyCollections = shopifyCollectionConnection.edges.map(
      (edge) => edge?.node,
    );

    const collections: CollectionFragment[] = [
      {
        __typename: "Collection",
        handle: "",
        title: "All",
        description: "All products",
        seo: {
          //   title: "All",
          //   description: "All products",
        },
        // path: "/search",
        updatedAt: new Date().toISOString(),
      },
      // Filter out the `hidden` collections.
      // Collections that start with `hidden-*` need to be hidden on the search page.
      ...shopifyCollections
        .map((collectionFragmentRef) =>
          getFragmentData(collectionFragment, collectionFragmentRef),
        )
        .filter((collection) => !collection.handle.startsWith("hidden")),
    ];

    return collections;
  }

  async getMenu(variables: GetMenuQueryVariables) {
    // @ts-expect-error Types of property 'country' are incompatible.
    const { menu } = await getShopifyGraphQL(getMenuQuery, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!menu) {
      throw {
        status: 404,
        message: `Menu not found for handle \`${variables.handle}\``,
      };
    }

    // console.log({ menu });

    return { ...menu, items: getMenuItems(menu.items) };
  }

  async getPage(variables: GetPageQueryVariables) {
    const { pageByHandle: pageFragmentRef } = await getShopifyGraphQL(
      getPageQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      { ...this.inContextVariables, ...variables },
    );

    if (!pageFragmentRef) {
      throw {
        status: 404,
        message: `Page not found for handle \`${variables.handle}\``,
      };
    }

    const page = getFragmentData(pageFragment, pageFragmentRef);

    // console.log({ page });

    return page;
  }

  async getPages(variables: GetPagesQueryVariables) {
    // @ts-expect-error Types of property 'country' are incompatible.
    const { pages } = await getShopifyGraphQL(getPagesQuery, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!pages) {
      throw {
        status: 404,
        message: `Pages not found`,
      };
    }

    return pages;
  }

  async getPolicy(handle: PolicyName) {
    const policies = await this.getPolicies();

    const policyName = camelCase(handle) as PolicyName;

    const policy = policies[policyName];

    return policy;
  }

  async getPolicies() {
    const { shop } = await getShopifyGraphQL(
      getPoliciesQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      this.inContextVariables,
    );

    if (!shop) {
      throw {
        status: 404,
        message: `Shop not found`,
      };
    }

    // console.log({ shop });

    return shop;
  }

  async getProductBasic(variables: GetProductBasicQueryVariables) {
    const { product: productBasicFragmentRef } = await getShopifyGraphQL(
      getProductBasicQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      { ...this.inContextVariables, ...variables },
    );

    if (!productBasicFragmentRef) {
      throw {
        status: 404,
        message: `Product not found for handle \`${variables.handle}\``,
      };
    }

    // console.log({ productBasicFragmentRef });

    const product = getFragmentData(
      productBasicFragment,
      productBasicFragmentRef,
    );

    // console.log({ product });

    return product;
  }

  async getProductDetails(variables: GetProductDetailsQueryVariables) {
    const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
      getProductDetailsQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      { ...this.inContextVariables, ...variables },
    );

    if (!productDetailsFragmentRef) {
      throw {
        status: 404,
        message: `Product not found for handle \`${variables.handle}\``,
      };
    }

    // console.log({ productDetailsFragmentRef });

    const product = getFragmentData(
      productDetailsFragment,
      productDetailsFragmentRef,
    );

    // console.log({ product });

    return product;
  }

  async getProductRecommendations(
    variables: GetProductRecommendationsQueryVariables,
  ) {
    const { productRecommendations: productRecommendationRefs } =
      await getShopifyGraphQL(getProductRecommendationsQuery, variables);

    if (!productRecommendationRefs) {
      throw {
        status: 404,
        message: `Products not found`,
      };
    }

    const productRecommendations = productRecommendationRefs.map(
      (productRecommendationRef) =>
        getFragmentData(productBasicFragment, productRecommendationRef),
    );

    return productRecommendations;
  }

  async getProducts(variables: GetProductsQueryVariables) {
    const { products } = await getShopifyGraphQL(getProductsQuery, variables);

    if (!products) {
      throw {
        status: 404,
        message: `Products not found`,
      };
    }

    return products;
  }

  async getProductsWithVariants(
    variables: GetProductsWithVariantsQueryVariables,
  ) {
    const { products } = await getShopifyGraphQL(getProductsWithVariantsQuery, {
      ...this.inContextVariables,
      ...variables,
    });

    if (!products) {
      throw {
        status: 404,
        message: `Products not found`,
      };
    }

    return products;
  }
}
