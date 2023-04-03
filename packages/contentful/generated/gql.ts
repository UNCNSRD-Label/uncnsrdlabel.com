/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  'fragment AboutBasicInformation on About {\n  __typename\n  colorShadow\n  contentBottom\n  contentTop\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  pressCollection {\n    items {\n      logo {\n        ...ImageBasicInformation\n      }\n      quote\n    }\n    total\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}':
    types.AboutBasicInformationFragmentDoc,
  'fragment AssociationBasicInformation on Association {\n  colorText\n  colorAccent\n  colorShadow\n  colorBackground\n  deck\n  heading\n  layout\n  lookImage {\n    description\n    height\n    title\n    url\n    width\n  }\n  shopifyProducts\n  sys {\n    ...SysBasicInformation\n  }\n}':
    types.AssociationBasicInformationFragmentDoc,
  'fragment EditBasicInformation on Edit {\n  category\n  categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  videoLandscape {\n    ...ImageBasicInformation\n  }\n  videoPortrait {\n    ...ImageBasicInformation\n  }\n}':
    types.EditBasicInformationFragmentDoc,
  'fragment EditCollectionBasicInformation on EditCollection {\n  items {\n    ...EditBasicInformation\n  }\n  total\n}':
    types.EditCollectionBasicInformationFragmentDoc,
  'fragment EditCollectionDetailedInformation on EditCollection {\n  items {\n    ...EditDetailedInformation\n  }\n  total\n}':
    types.EditCollectionDetailedInformationFragmentDoc,
  'fragment EditContentBasicInformation on EditContent {\n  __typename\n  colorBackground\n  colorText\n  content\n  eyebrow\n  signature\n  sys {\n    ...SysBasicInformation\n  }\n}':
    types.EditContentBasicInformationFragmentDoc,
  'fragment EditDetailedInformation on Edit {\n  category: categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  colorBackground\n  colorText\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...EditModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}':
    types.EditDetailedInformationFragmentDoc,
  'fragment EditModulesCollectionBasicInformation on EditModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...EditContentBasicInformation\n    ...ImageVideoBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}':
    types.EditModulesCollectionBasicInformationFragmentDoc,
  'fragment EditRelatedFeaturesCollectionBasicInformation on EditRelatedFeaturesCollection {\n  items {\n    category: categorisation {\n      name\n      slug\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    imageLandscape {\n      ...ImageBasicInformation\n    }\n    slug\n    title\n  }\n  total\n}':
    types.EditRelatedFeaturesCollectionBasicInformationFragmentDoc,
  'fragment HpModuleBasicInformation on HpModule {\n  __typename\n  association {\n    ...AssociationBasicInformation\n  }\n  backgroundDesktop {\n    ...ImageBasicInformation\n  }\n  backgroundMobile {\n    ...ImageBasicInformation\n  }\n  categoryName\n  colorAccent\n  colorBackground\n  colorShadow\n  colorSticker\n  colorText\n  cta\n  deck\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  imagesSupportingCollection {\n    items {\n      ...ImageBasicInformation\n    }\n    total\n  }\n  layout\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}':
    types.HpModuleBasicInformationFragmentDoc,
  'fragment ImageBasicInformation on Asset {\n  contentType\n  description\n  height\n  title\n  url\n  width\n}':
    types.ImageBasicInformationFragmentDoc,
  'fragment ImageVideoBasicInformation on ImageVideo {\n  autoplay\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  controls\n  cover {\n    ...ImageBasicInformation\n  }\n  deck\n  heading\n  media {\n    ...ImageBasicInformation\n  }\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}':
    types.ImageVideoBasicInformationFragmentDoc,
  'fragment LinkCore on Link {\n  sys {\n    ...SysBasicInformation\n  }\n  __typename\n  label\n  href\n  shouldOpenInNewTab\n}':
    types.LinkCoreFragmentDoc,
  'fragment NavigationDesktopMenu on NavigationDesktopMenuCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    subNavTemplate\n    subNav: subNavCollection(limit: 7) {\n      ...NavigationGroupSubNav\n    }\n    promoTiles: promoTilesCollection(limit: 3) {\n      ...NavigationGroupPromoTiles\n    }\n  }\n  total\n}':
    types.NavigationDesktopMenuFragmentDoc,
  'fragment NavigationGroupPromoTiles on NavigationGroupPromoTilesCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    linkedEntry {\n      __typename\n      ... on Story {\n        title\n        slug\n        category {\n          slug\n        }\n        imagePortrait {\n          url\n        }\n      }\n    }\n  }\n  total\n}':
    types.NavigationGroupPromoTilesFragmentDoc,
  'fragment NavigationGroupSubNav on NavigationGroupSubNavCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    items: itemsCollection(limit: 10) {\n      ...NavigationSectionItems\n    }\n  }\n  total\n}':
    types.NavigationGroupSubNavFragmentDoc,
  'fragment NavigationSectionItems on NavigationSectionItemsCollection {\n  items {\n    ...LinkCore\n  }\n  total\n}':
    types.NavigationSectionItemsFragmentDoc,
  'fragment PageBasicInformation on Page {\n  __typename\n  content\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  shopifyProducts\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  type\n}':
    types.PageBasicInformationFragmentDoc,
  'fragment PageModulesCollection on PageModulesCollection {\n  items {\n    ...HpModuleBasicInformation\n    ... on HpModule {\n      secondTile {\n        ...HpModuleBasicInformation\n      }\n    }\n  }\n  total\n}':
    types.PageModulesCollectionFragmentDoc,
  'fragment StoryBasicInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}':
    types.StoryBasicInformationFragmentDoc,
  'fragment StoryCollectionBasicInformation on StoryCollection {\n  items {\n    ...StoryBasicInformation\n  }\n  total\n}':
    types.StoryCollectionBasicInformationFragmentDoc,
  'fragment StoryCollectionDetailedInformation on StoryCollection {\n  items {\n    ...StoryDetailedInformation\n  }\n  total\n}':
    types.StoryCollectionDetailedInformationFragmentDoc,
  'fragment StoryContentBasicInformation on StoryContent {\n  __typename\n  content\n  sys {\n    ...SysBasicInformation\n  }\n}':
    types.StoryContentBasicInformationFragmentDoc,
  'fragment StoryDetailedInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...StoryModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}':
    types.StoryDetailedInformationFragmentDoc,
  'fragment StoryModulesCollectionBasicInformation on StoryModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...ImageVideoBasicInformation\n    ...StoryContentBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}':
    types.StoryModulesCollectionBasicInformationFragmentDoc,
  'fragment SysBasicInformation on Sys {\n  firstPublishedAt\n  id\n  publishedAt\n}':
    types.SysBasicInformationFragmentDoc,
  'fragment TilesBasicInformation on Tiles {\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  deck\n  heading\n  layout\n  leftTileCaption\n  leftTileImage {\n    ...ImageBasicInformation\n  }\n  leftTileObject {\n    ...AssociationBasicInformation\n  }\n  leftTileShopifyProduct\n  rightTileCaption\n  rightTileImage {\n    ...ImageBasicInformation\n  }\n  rightTileObject {\n    ...AssociationBasicInformation\n  }\n  rightTileShopifyProduct\n  sys {\n    ...SysBasicInformation\n  }\n}':
    types.TilesBasicInformationFragmentDoc,
  'query AboutById($id: String!, $locale: String, $preview: Boolean) {\n  about(id: $id, locale: $locale, preview: $preview) {\n    ...AboutBasicInformation\n  }\n}':
    types.AboutByIdDocument,
  'query AboutCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n      }\n    }\n  }\n}':
    types.AboutCollectionDocument,
  'query AboutCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  aboutCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...AboutBasicInformation\n    }\n  }\n}':
    types.AboutCollectionBySlugDocument,
  'query AboutCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        slug\n      }\n    }\n  }\n}':
    types.AboutCollectionPathsDocument,
  'query BrandCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  brandCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Brand {\n        accentColour\n        borderColour\n        description\n        image {\n          ...ImageBasicInformation\n        }\n        name\n      }\n    }\n  }\n}':
    types.BrandCollectionDocument,
  'query EditBySlug($categorySlug: String!, $editSlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: editCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $editSlug}\n  ) {\n    items {\n      category\n      categorisation {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      eyebrow\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...EditModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n      videoLandscape {\n        ...ImageBasicInformation\n      }\n      videoPortrait {\n        ...ImageBasicInformation\n      }\n    }\n  }\n  related: editCollection(limit: 3, where: {category: $categorySlug}) {\n    ...EditCollectionBasicInformation\n  }\n}':
    types.EditBySlugDocument,
  'query EditCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        editCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}':
    types.EditCategoryCollectionByTypeDocument,
  'query EditCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryEditCollectionWhere: EditFilter, $categoryEditLimit: Int = 3, $currentEditCollectionWhere: EditFilter, $currentEditCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryEditSkip: Int = 0) {\n  categoryCollection(\n    limit: $categoryLimit\n    locale: $locale\n    preview: $preview\n    where: $categoryCollectionWhere\n  ) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryEditCollection: editCollection(\n    limit: $categoryEditLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryEditSkip\n    where: $categoryEditCollectionWhere\n  ) {\n    ...EditCollectionBasicInformation\n  }\n  currentEditCollection: editCollection(\n    limit: $currentEditCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentEditCollectionWhere\n  ) {\n    ...EditCollectionDetailedInformation\n  }\n}':
    types.EditCollectionByCategoryDocument,
  'query EditCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  editCollection(\n    locale: $locale\n    preview: $preview\n    where: {OR: [{category: $categorySlug}, {categorisation: {slug: $categorySlug}}]}\n  ) {\n    total\n  }\n}':
    types.EditCollectionCountByCategoryDocument,
  'query EditCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  editCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Edit {\n        category\n        categorisation {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}':
    types.EditCollectionPathsDocument,
  'query HomepageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n    ... on Page {\n      modulesCollection(limit: 12) {\n        ...PageModulesCollection\n        total\n      }\n    }\n  }\n}':
    types.HomepageByIdDocument,
  'query HomepageCollectionByType($limit: Int = 1, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ...PageBasicInformation\n      ... on Page {\n        modulesCollection {\n          items {\n            ...HpModuleBasicInformation\n          }\n          total\n        }\n      }\n    }\n  }\n}':
    types.HomepageCollectionByTypeDocument,
  'query Navigation($id: String!, $locale: String, $preview: Boolean) {\n  navigation(id: $id, locale: $locale, preview: $preview) {\n    desktopMenu: desktopMenuCollection(limit: 10) {\n      ...NavigationDesktopMenu\n    }\n  }\n}':
    types.NavigationDocument,
  'query PageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n  }\n}':
    types.PageByIdDocument,
  'query PageCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n        type\n      }\n    }\n  }\n}':
    types.PageCollectionDocument,
  'query PageCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...PageBasicInformation\n    }\n  }\n}':
    types.PageCollectionBySlugDocument,
  'query PageCollectionByType($limit: Int = 250, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ... on Page {\n        slug\n        title\n        type\n      }\n    }\n  }\n}':
    types.PageCollectionByTypeDocument,
  'query PageCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        slug\n      }\n    }\n  }\n}':
    types.PageCollectionPathsDocument,
  'query StoryBySlug($categorySlug: String!, $storySlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: storyCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $storySlug}\n  ) {\n    items {\n      category {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...StoryModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n    }\n  }\n  related: storyCollection(limit: 3, where: {category: {slug: $categorySlug}}) {\n    ...StoryCollectionBasicInformation\n  }\n}':
    types.StoryBySlugDocument,
  'query StoryCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        storyCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}':
    types.StoryCategoryCollectionByTypeDocument,
  'query StoryCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryStoryCollectionWhere: StoryFilter, $categoryStoryLimit: Int = 3, $currentStoryCollectionWhere: StoryFilter, $currentStoryCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryStorySkip: Int = 0) {\n  categoryCollection(limit: $categoryLimit, where: $categoryCollectionWhere) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryStoryCollection: storyCollection(\n    limit: $categoryStoryLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryStorySkip\n    where: $categoryStoryCollectionWhere\n  ) {\n    ...StoryCollectionBasicInformation\n  }\n  currentStoryCollection: storyCollection(\n    limit: $currentStoryCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentStoryCollectionWhere\n  ) {\n    ...StoryCollectionDetailedInformation\n  }\n}':
    types.StoryCollectionByCategoryDocument,
  'query StoryCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  storyCollection(where: {category: {slug: $categorySlug}}) {\n    total\n  }\n}':
    types.StoryCollectionCountByCategoryDocument,
  'query StoryCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  storyCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Story {\n        category {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}':
    types.StoryCollectionPathsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment AboutBasicInformation on About {\n  __typename\n  colorShadow\n  contentBottom\n  contentTop\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  pressCollection {\n    items {\n      logo {\n        ...ImageBasicInformation\n      }\n      quote\n    }\n    total\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}'
): (typeof documents)['fragment AboutBasicInformation on About {\n  __typename\n  colorShadow\n  contentBottom\n  contentTop\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  pressCollection {\n    items {\n      logo {\n        ...ImageBasicInformation\n      }\n      quote\n    }\n    total\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment AssociationBasicInformation on Association {\n  colorText\n  colorAccent\n  colorShadow\n  colorBackground\n  deck\n  heading\n  layout\n  lookImage {\n    description\n    height\n    title\n    url\n    width\n  }\n  shopifyProducts\n  sys {\n    ...SysBasicInformation\n  }\n}'
): (typeof documents)['fragment AssociationBasicInformation on Association {\n  colorText\n  colorAccent\n  colorShadow\n  colorBackground\n  deck\n  heading\n  layout\n  lookImage {\n    description\n    height\n    title\n    url\n    width\n  }\n  shopifyProducts\n  sys {\n    ...SysBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditBasicInformation on Edit {\n  category\n  categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  videoLandscape {\n    ...ImageBasicInformation\n  }\n  videoPortrait {\n    ...ImageBasicInformation\n  }\n}'
): (typeof documents)['fragment EditBasicInformation on Edit {\n  category\n  categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  videoLandscape {\n    ...ImageBasicInformation\n  }\n  videoPortrait {\n    ...ImageBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditCollectionBasicInformation on EditCollection {\n  items {\n    ...EditBasicInformation\n  }\n  total\n}'
): (typeof documents)['fragment EditCollectionBasicInformation on EditCollection {\n  items {\n    ...EditBasicInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditCollectionDetailedInformation on EditCollection {\n  items {\n    ...EditDetailedInformation\n  }\n  total\n}'
): (typeof documents)['fragment EditCollectionDetailedInformation on EditCollection {\n  items {\n    ...EditDetailedInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditContentBasicInformation on EditContent {\n  __typename\n  colorBackground\n  colorText\n  content\n  eyebrow\n  signature\n  sys {\n    ...SysBasicInformation\n  }\n}'
): (typeof documents)['fragment EditContentBasicInformation on EditContent {\n  __typename\n  colorBackground\n  colorText\n  content\n  eyebrow\n  signature\n  sys {\n    ...SysBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditDetailedInformation on Edit {\n  category: categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  colorBackground\n  colorText\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...EditModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}'
): (typeof documents)['fragment EditDetailedInformation on Edit {\n  category: categorisation {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  colorBackground\n  colorText\n  deck\n  eyebrow\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...EditModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditModulesCollectionBasicInformation on EditModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...EditContentBasicInformation\n    ...ImageVideoBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}'
): (typeof documents)['fragment EditModulesCollectionBasicInformation on EditModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...EditContentBasicInformation\n    ...ImageVideoBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment EditRelatedFeaturesCollectionBasicInformation on EditRelatedFeaturesCollection {\n  items {\n    category: categorisation {\n      name\n      slug\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    imageLandscape {\n      ...ImageBasicInformation\n    }\n    slug\n    title\n  }\n  total\n}'
): (typeof documents)['fragment EditRelatedFeaturesCollectionBasicInformation on EditRelatedFeaturesCollection {\n  items {\n    category: categorisation {\n      name\n      slug\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    imageLandscape {\n      ...ImageBasicInformation\n    }\n    slug\n    title\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment HpModuleBasicInformation on HpModule {\n  __typename\n  association {\n    ...AssociationBasicInformation\n  }\n  backgroundDesktop {\n    ...ImageBasicInformation\n  }\n  backgroundMobile {\n    ...ImageBasicInformation\n  }\n  categoryName\n  colorAccent\n  colorBackground\n  colorShadow\n  colorSticker\n  colorText\n  cta\n  deck\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  imagesSupportingCollection {\n    items {\n      ...ImageBasicInformation\n    }\n    total\n  }\n  layout\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}'
): (typeof documents)['fragment HpModuleBasicInformation on HpModule {\n  __typename\n  association {\n    ...AssociationBasicInformation\n  }\n  backgroundDesktop {\n    ...ImageBasicInformation\n  }\n  backgroundMobile {\n    ...ImageBasicInformation\n  }\n  categoryName\n  colorAccent\n  colorBackground\n  colorShadow\n  colorSticker\n  colorText\n  cta\n  deck\n  heading\n  image {\n    ...ImageBasicInformation\n  }\n  imagesSupportingCollection {\n    items {\n      ...ImageBasicInformation\n    }\n    total\n  }\n  layout\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ImageBasicInformation on Asset {\n  contentType\n  description\n  height\n  title\n  url\n  width\n}'
): (typeof documents)['fragment ImageBasicInformation on Asset {\n  contentType\n  description\n  height\n  title\n  url\n  width\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ImageVideoBasicInformation on ImageVideo {\n  autoplay\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  controls\n  cover {\n    ...ImageBasicInformation\n  }\n  deck\n  heading\n  media {\n    ...ImageBasicInformation\n  }\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}'
): (typeof documents)['fragment ImageVideoBasicInformation on ImageVideo {\n  autoplay\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  controls\n  cover {\n    ...ImageBasicInformation\n  }\n  deck\n  heading\n  media {\n    ...ImageBasicInformation\n  }\n  sys {\n    ...SysBasicInformation\n  }\n  url\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment LinkCore on Link {\n  sys {\n    ...SysBasicInformation\n  }\n  __typename\n  label\n  href\n  shouldOpenInNewTab\n}'
): (typeof documents)['fragment LinkCore on Link {\n  sys {\n    ...SysBasicInformation\n  }\n  __typename\n  label\n  href\n  shouldOpenInNewTab\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment NavigationDesktopMenu on NavigationDesktopMenuCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    subNavTemplate\n    subNav: subNavCollection(limit: 7) {\n      ...NavigationGroupSubNav\n    }\n    promoTiles: promoTilesCollection(limit: 3) {\n      ...NavigationGroupPromoTiles\n    }\n  }\n  total\n}'
): (typeof documents)['fragment NavigationDesktopMenu on NavigationDesktopMenuCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    subNavTemplate\n    subNav: subNavCollection(limit: 7) {\n      ...NavigationGroupSubNav\n    }\n    promoTiles: promoTilesCollection(limit: 3) {\n      ...NavigationGroupPromoTiles\n    }\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment NavigationGroupPromoTiles on NavigationGroupPromoTilesCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    linkedEntry {\n      __typename\n      ... on Story {\n        title\n        slug\n        category {\n          slug\n        }\n        imagePortrait {\n          url\n        }\n      }\n    }\n  }\n  total\n}'
): (typeof documents)['fragment NavigationGroupPromoTiles on NavigationGroupPromoTilesCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    linkedEntry {\n      __typename\n      ... on Story {\n        title\n        slug\n        category {\n          slug\n        }\n        imagePortrait {\n          url\n        }\n      }\n    }\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment NavigationGroupSubNav on NavigationGroupSubNavCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    items: itemsCollection(limit: 10) {\n      ...NavigationSectionItems\n    }\n  }\n  total\n}'
): (typeof documents)['fragment NavigationGroupSubNav on NavigationGroupSubNavCollection {\n  items {\n    sys {\n      ...SysBasicInformation\n    }\n    __typename\n    heading\n    headingLink {\n      ...LinkCore\n    }\n    items: itemsCollection(limit: 10) {\n      ...NavigationSectionItems\n    }\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment NavigationSectionItems on NavigationSectionItemsCollection {\n  items {\n    ...LinkCore\n  }\n  total\n}'
): (typeof documents)['fragment NavigationSectionItems on NavigationSectionItemsCollection {\n  items {\n    ...LinkCore\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment PageBasicInformation on Page {\n  __typename\n  content\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  shopifyProducts\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  type\n}'
): (typeof documents)['fragment PageBasicInformation on Page {\n  __typename\n  content\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  shopifyProducts\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n  type\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment PageModulesCollection on PageModulesCollection {\n  items {\n    ...HpModuleBasicInformation\n    ... on HpModule {\n      secondTile {\n        ...HpModuleBasicInformation\n      }\n    }\n  }\n  total\n}'
): (typeof documents)['fragment PageModulesCollection on PageModulesCollection {\n  items {\n    ...HpModuleBasicInformation\n    ... on HpModule {\n      secondTile {\n        ...HpModuleBasicInformation\n      }\n    }\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryBasicInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}'
): (typeof documents)['fragment StoryBasicInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryCollectionBasicInformation on StoryCollection {\n  items {\n    ...StoryBasicInformation\n  }\n  total\n}'
): (typeof documents)['fragment StoryCollectionBasicInformation on StoryCollection {\n  items {\n    ...StoryBasicInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryCollectionDetailedInformation on StoryCollection {\n  items {\n    ...StoryDetailedInformation\n  }\n  total\n}'
): (typeof documents)['fragment StoryCollectionDetailedInformation on StoryCollection {\n  items {\n    ...StoryDetailedInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryContentBasicInformation on StoryContent {\n  __typename\n  content\n  sys {\n    ...SysBasicInformation\n  }\n}'
): (typeof documents)['fragment StoryContentBasicInformation on StoryContent {\n  __typename\n  content\n  sys {\n    ...SysBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryDetailedInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...StoryModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}'
): (typeof documents)['fragment StoryDetailedInformation on Story {\n  category {\n    metaDescription\n    metaTitle\n    name\n    slug\n  }\n  deck\n  imageLandscape {\n    ...ImageBasicInformation\n  }\n  imagePortrait {\n    ...ImageBasicInformation\n  }\n  metaDescription\n  metaImage {\n    ...ImageBasicInformation\n  }\n  metaTitle\n  modulesCollection {\n    ...StoryModulesCollectionBasicInformation\n  }\n  slug\n  sys {\n    ...SysBasicInformation\n  }\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment StoryModulesCollectionBasicInformation on StoryModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...ImageVideoBasicInformation\n    ...StoryContentBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}'
): (typeof documents)['fragment StoryModulesCollectionBasicInformation on StoryModulesCollection {\n  items {\n    __typename\n    ...AssociationBasicInformation\n    ...ImageVideoBasicInformation\n    ...StoryContentBasicInformation\n    ...TilesBasicInformation\n  }\n  total\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment SysBasicInformation on Sys {\n  firstPublishedAt\n  id\n  publishedAt\n}'
): (typeof documents)['fragment SysBasicInformation on Sys {\n  firstPublishedAt\n  id\n  publishedAt\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment TilesBasicInformation on Tiles {\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  deck\n  heading\n  layout\n  leftTileCaption\n  leftTileImage {\n    ...ImageBasicInformation\n  }\n  leftTileObject {\n    ...AssociationBasicInformation\n  }\n  leftTileShopifyProduct\n  rightTileCaption\n  rightTileImage {\n    ...ImageBasicInformation\n  }\n  rightTileObject {\n    ...AssociationBasicInformation\n  }\n  rightTileShopifyProduct\n  sys {\n    ...SysBasicInformation\n  }\n}'
): (typeof documents)['fragment TilesBasicInformation on Tiles {\n  colorAccent\n  colorBackground\n  colorHeading\n  colorShadow\n  colorText\n  deck\n  heading\n  layout\n  leftTileCaption\n  leftTileImage {\n    ...ImageBasicInformation\n  }\n  leftTileObject {\n    ...AssociationBasicInformation\n  }\n  leftTileShopifyProduct\n  rightTileCaption\n  rightTileImage {\n    ...ImageBasicInformation\n  }\n  rightTileObject {\n    ...AssociationBasicInformation\n  }\n  rightTileShopifyProduct\n  sys {\n    ...SysBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AboutById($id: String!, $locale: String, $preview: Boolean) {\n  about(id: $id, locale: $locale, preview: $preview) {\n    ...AboutBasicInformation\n  }\n}'
): (typeof documents)['query AboutById($id: String!, $locale: String, $preview: Boolean) {\n  about(id: $id, locale: $locale, preview: $preview) {\n    ...AboutBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AboutCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n      }\n    }\n  }\n}'
): (typeof documents)['query AboutCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AboutCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  aboutCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...AboutBasicInformation\n    }\n  }\n}'
): (typeof documents)['query AboutCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  aboutCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...AboutBasicInformation\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AboutCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        slug\n      }\n    }\n  }\n}'
): (typeof documents)['query AboutCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  aboutCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on About {\n        slug\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query BrandCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  brandCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Brand {\n        accentColour\n        borderColour\n        description\n        image {\n          ...ImageBasicInformation\n        }\n        name\n      }\n    }\n  }\n}'
): (typeof documents)['query BrandCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  brandCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Brand {\n        accentColour\n        borderColour\n        description\n        image {\n          ...ImageBasicInformation\n        }\n        name\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EditBySlug($categorySlug: String!, $editSlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: editCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $editSlug}\n  ) {\n    items {\n      category\n      categorisation {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      eyebrow\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...EditModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n      videoLandscape {\n        ...ImageBasicInformation\n      }\n      videoPortrait {\n        ...ImageBasicInformation\n      }\n    }\n  }\n  related: editCollection(limit: 3, where: {category: $categorySlug}) {\n    ...EditCollectionBasicInformation\n  }\n}'
): (typeof documents)['query EditBySlug($categorySlug: String!, $editSlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: editCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $editSlug}\n  ) {\n    items {\n      category\n      categorisation {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      eyebrow\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...EditModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n      videoLandscape {\n        ...ImageBasicInformation\n      }\n      videoPortrait {\n        ...ImageBasicInformation\n      }\n    }\n  }\n  related: editCollection(limit: 3, where: {category: $categorySlug}) {\n    ...EditCollectionBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EditCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        editCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}'
): (typeof documents)['query EditCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        editCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EditCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryEditCollectionWhere: EditFilter, $categoryEditLimit: Int = 3, $currentEditCollectionWhere: EditFilter, $currentEditCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryEditSkip: Int = 0) {\n  categoryCollection(\n    limit: $categoryLimit\n    locale: $locale\n    preview: $preview\n    where: $categoryCollectionWhere\n  ) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryEditCollection: editCollection(\n    limit: $categoryEditLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryEditSkip\n    where: $categoryEditCollectionWhere\n  ) {\n    ...EditCollectionBasicInformation\n  }\n  currentEditCollection: editCollection(\n    limit: $currentEditCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentEditCollectionWhere\n  ) {\n    ...EditCollectionDetailedInformation\n  }\n}'
): (typeof documents)['query EditCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryEditCollectionWhere: EditFilter, $categoryEditLimit: Int = 3, $currentEditCollectionWhere: EditFilter, $currentEditCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryEditSkip: Int = 0) {\n  categoryCollection(\n    limit: $categoryLimit\n    locale: $locale\n    preview: $preview\n    where: $categoryCollectionWhere\n  ) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryEditCollection: editCollection(\n    limit: $categoryEditLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryEditSkip\n    where: $categoryEditCollectionWhere\n  ) {\n    ...EditCollectionBasicInformation\n  }\n  currentEditCollection: editCollection(\n    limit: $currentEditCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentEditCollectionWhere\n  ) {\n    ...EditCollectionDetailedInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EditCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  editCollection(\n    locale: $locale\n    preview: $preview\n    where: {OR: [{category: $categorySlug}, {categorisation: {slug: $categorySlug}}]}\n  ) {\n    total\n  }\n}'
): (typeof documents)['query EditCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  editCollection(\n    locale: $locale\n    preview: $preview\n    where: {OR: [{category: $categorySlug}, {categorisation: {slug: $categorySlug}}]}\n  ) {\n    total\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EditCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  editCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Edit {\n        category\n        categorisation {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}'
): (typeof documents)['query EditCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  editCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Edit {\n        category\n        categorisation {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HomepageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n    ... on Page {\n      modulesCollection(limit: 12) {\n        ...PageModulesCollection\n        total\n      }\n    }\n  }\n}'
): (typeof documents)['query HomepageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n    ... on Page {\n      modulesCollection(limit: 12) {\n        ...PageModulesCollection\n        total\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HomepageCollectionByType($limit: Int = 1, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ...PageBasicInformation\n      ... on Page {\n        modulesCollection {\n          items {\n            ...HpModuleBasicInformation\n          }\n          total\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query HomepageCollectionByType($limit: Int = 1, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ...PageBasicInformation\n      ... on Page {\n        modulesCollection {\n          items {\n            ...HpModuleBasicInformation\n          }\n          total\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Navigation($id: String!, $locale: String, $preview: Boolean) {\n  navigation(id: $id, locale: $locale, preview: $preview) {\n    desktopMenu: desktopMenuCollection(limit: 10) {\n      ...NavigationDesktopMenu\n    }\n  }\n}'
): (typeof documents)['query Navigation($id: String!, $locale: String, $preview: Boolean) {\n  navigation(id: $id, locale: $locale, preview: $preview) {\n    desktopMenu: desktopMenuCollection(limit: 10) {\n      ...NavigationDesktopMenu\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n  }\n}'
): (typeof documents)['query PageById($id: String!, $locale: String, $preview: Boolean) {\n  page(id: $id, locale: $locale, preview: $preview) {\n    ...PageBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n        type\n      }\n    }\n  }\n}'
): (typeof documents)['query PageCollection($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        contentfulMetadata {\n          tags {\n            name\n          }\n        }\n        metaDescription\n        metaTitle\n        metaImage {\n          ...ImageBasicInformation\n        }\n        slug\n        sys {\n          publishedAt\n          id\n        }\n        title\n        type\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...PageBasicInformation\n    }\n  }\n}'
): (typeof documents)['query PageCollectionBySlug($limit: Int = 1, $locale: String, $preview: Boolean, $slug: String) {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $slug}\n  ) {\n    items {\n      ...PageBasicInformation\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageCollectionByType($limit: Int = 250, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ... on Page {\n        slug\n        title\n        type\n      }\n    }\n  }\n}'
): (typeof documents)['query PageCollectionByType($limit: Int = 250, $locale: String, $preview: Boolean, $type: String = "homepage") {\n  pageCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {type: $type}\n  ) {\n    items {\n      ... on Page {\n        slug\n        title\n        type\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        slug\n      }\n    }\n  }\n}'
): (typeof documents)['query PageCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  pageCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Page {\n        slug\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query StoryBySlug($categorySlug: String!, $storySlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: storyCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $storySlug}\n  ) {\n    items {\n      category {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...StoryModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n    }\n  }\n  related: storyCollection(limit: 3, where: {category: {slug: $categorySlug}}) {\n    ...StoryCollectionBasicInformation\n  }\n}'
): (typeof documents)['query StoryBySlug($categorySlug: String!, $storySlug: String!, $limit: Int = 1, $locale: String, $preview: Boolean) {\n  current: storyCollection(\n    limit: $limit\n    locale: $locale\n    preview: $preview\n    where: {slug: $storySlug}\n  ) {\n    items {\n      category {\n        name\n        slug\n      }\n      colorAccent\n      colorBackground\n      credits\n      date\n      deck\n      imageLandscape {\n        ...ImageBasicInformation\n      }\n      imagePortrait {\n        ...ImageBasicInformation\n      }\n      metaDescription\n      metaImage {\n        ...ImageBasicInformation\n      }\n      metaTitle\n      modulesCollection {\n        ...StoryModulesCollectionBasicInformation\n      }\n      slug\n      sys {\n        ...SysBasicInformation\n      }\n      title\n    }\n  }\n  related: storyCollection(limit: 3, where: {category: {slug: $categorySlug}}) {\n    ...StoryCollectionBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query StoryCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        storyCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}'
): (typeof documents)['query StoryCategoryCollectionByType($locale: String, $preview: Boolean, $type: String!) {\n  categoryCollection(locale: $locale, preview: $preview, where: {type: $type}) {\n    items {\n      linkedFrom {\n        storyCollection {\n          total\n        }\n      }\n      name\n      slug\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query StoryCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryStoryCollectionWhere: StoryFilter, $categoryStoryLimit: Int = 3, $currentStoryCollectionWhere: StoryFilter, $currentStoryCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryStorySkip: Int = 0) {\n  categoryCollection(limit: $categoryLimit, where: $categoryCollectionWhere) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryStoryCollection: storyCollection(\n    limit: $categoryStoryLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryStorySkip\n    where: $categoryStoryCollectionWhere\n  ) {\n    ...StoryCollectionBasicInformation\n  }\n  currentStoryCollection: storyCollection(\n    limit: $currentStoryCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentStoryCollectionWhere\n  ) {\n    ...StoryCollectionDetailedInformation\n  }\n}'
): (typeof documents)['query StoryCollectionByCategory($categoryCollectionWhere: CategoryFilter, $categoryLimit: Int = 1, $categoryStoryCollectionWhere: StoryFilter, $categoryStoryLimit: Int = 3, $currentStoryCollectionWhere: StoryFilter, $currentStoryCollectionLimit: Int = 1, $locale: String, $preview: Boolean, $categoryStorySkip: Int = 0) {\n  categoryCollection(limit: $categoryLimit, where: $categoryCollectionWhere) {\n    items {\n      metaDescription\n      metaTitle\n      name\n      sys {\n        firstPublishedAt\n        id\n        publishedAt\n      }\n    }\n  }\n  categoryStoryCollection: storyCollection(\n    limit: $categoryStoryLimit\n    locale: $locale\n    order: [date_DESC, sys_publishedAt_DESC]\n    preview: $preview\n    skip: $categoryStorySkip\n    where: $categoryStoryCollectionWhere\n  ) {\n    ...StoryCollectionBasicInformation\n  }\n  currentStoryCollection: storyCollection(\n    limit: $currentStoryCollectionLimit\n    locale: $locale\n    preview: $preview\n    where: $currentStoryCollectionWhere\n  ) {\n    ...StoryCollectionDetailedInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query StoryCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  storyCollection(where: {category: {slug: $categorySlug}}) {\n    total\n  }\n}'
): (typeof documents)['query StoryCollectionCountByCategory($categorySlug: String!, $locale: String, $preview: Boolean) {\n  storyCollection(where: {category: {slug: $categorySlug}}) {\n    total\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query StoryCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  storyCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Story {\n        category {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}'
): (typeof documents)['query StoryCollectionPaths($limit: Int = 250, $locale: String, $preview: Boolean) {\n  storyCollection(limit: $limit, locale: $locale, preview: $preview) {\n    items {\n      ... on Story {\n        category {\n          slug\n        }\n        slug\n      }\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
