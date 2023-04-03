/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type About = Entry & {
  __typename?: 'About'
  colorShadow?: Maybe<Scalars['String']>
  contentBottom?: Maybe<Scalars['String']>
  contentTop?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  heading?: Maybe<Scalars['String']>
  image?: Maybe<Asset>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<AboutLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  pressCollection?: Maybe<AboutPressCollection>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  title?: Maybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutColorShadowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutContentBottomArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutContentTopArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutPressCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** About page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/about) */
export type AboutTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type AboutCollection = {
  __typename?: 'AboutCollection'
  items: Array<Maybe<About>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type AboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AboutFilter>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentBottom?: InputMaybe<Scalars['String']>
  contentBottom_contains?: InputMaybe<Scalars['String']>
  contentBottom_exists?: InputMaybe<Scalars['Boolean']>
  contentBottom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentBottom_not?: InputMaybe<Scalars['String']>
  contentBottom_not_contains?: InputMaybe<Scalars['String']>
  contentBottom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentTop?: InputMaybe<Scalars['String']>
  contentTop_contains?: InputMaybe<Scalars['String']>
  contentTop_exists?: InputMaybe<Scalars['Boolean']>
  contentTop_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentTop_not?: InputMaybe<Scalars['String']>
  contentTop_not_contains?: InputMaybe<Scalars['String']>
  contentTop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  image_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  pressCollection_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type AboutLinkingCollections = {
  __typename?: 'AboutLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum AboutOrder {
  ColorShadowAsc = 'colorShadow_ASC',
  ColorShadowDesc = 'colorShadow_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type AboutPressCollection = {
  __typename?: 'AboutPressCollection'
  items: Array<Maybe<PressItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']>
  contentType_contains?: InputMaybe<Scalars['String']>
  contentType_exists?: InputMaybe<Scalars['Boolean']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_not?: InputMaybe<Scalars['String']>
  contentType_not_contains?: InputMaybe<Scalars['String']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName?: InputMaybe<Scalars['String']>
  fileName_contains?: InputMaybe<Scalars['String']>
  fileName_exists?: InputMaybe<Scalars['Boolean']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_not?: InputMaybe<Scalars['String']>
  fileName_not_contains?: InputMaybe<Scalars['String']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  height?: InputMaybe<Scalars['Int']>
  height_exists?: InputMaybe<Scalars['Boolean']>
  height_gt?: InputMaybe<Scalars['Int']>
  height_gte?: InputMaybe<Scalars['Int']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_lt?: InputMaybe<Scalars['Int']>
  height_lte?: InputMaybe<Scalars['Int']>
  height_not?: InputMaybe<Scalars['Int']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size?: InputMaybe<Scalars['Int']>
  size_exists?: InputMaybe<Scalars['Boolean']>
  size_gt?: InputMaybe<Scalars['Int']>
  size_gte?: InputMaybe<Scalars['Int']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_lt?: InputMaybe<Scalars['Int']>
  size_lte?: InputMaybe<Scalars['Int']>
  size_not?: InputMaybe<Scalars['Int']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  width?: InputMaybe<Scalars['Int']>
  width_exists?: InputMaybe<Scalars['Boolean']>
  width_gt?: InputMaybe<Scalars['Int']>
  width_gte?: InputMaybe<Scalars['Int']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_lt?: InputMaybe<Scalars['Int']>
  width_lte?: InputMaybe<Scalars['Int']>
  width_not?: InputMaybe<Scalars['Int']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  aboutCollection?: Maybe<AboutCollection>
  associationCollection?: Maybe<AssociationCollection>
  brandCollection?: Maybe<BrandCollection>
  categoryCollection?: Maybe<CategoryCollection>
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  hpModuleCollection?: Maybe<HpModuleCollection>
  imageVideoCollection?: Maybe<ImageVideoCollection>
  pageCollection?: Maybe<PageCollection>
  pressItemCollection?: Maybe<PressItemCollection>
  productCollection?: Maybe<ProductCollection>
  settingsCollection?: Maybe<SettingsCollection>
  storyCollection?: Maybe<StoryCollection>
  tilesCollection?: Maybe<TilesCollection>
}

export type AssetLinkingCollectionsAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsAssociationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsBrandCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsHpModuleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsImageVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsPressItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type Association = Entry & {
  __typename?: 'Association'
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorShadow?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  deck?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  layout?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<AssociationLinkingCollections>
  lookImage?: Maybe<Asset>
  productsCollection?: Maybe<AssociationProductsCollection>
  shopifyProducts?: Maybe<Array<Maybe<Scalars['String']>>>
  sys: Sys
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationColorShadowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationLookImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Container for related products [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/association) */
export type AssociationShopifyProductsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type AssociationCollection = {
  __typename?: 'AssociationCollection'
  items: Array<Maybe<Association>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type AssociationFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssociationFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssociationFilter>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout?: InputMaybe<Scalars['String']>
  layout_contains?: InputMaybe<Scalars['String']>
  layout_exists?: InputMaybe<Scalars['Boolean']>
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout_not?: InputMaybe<Scalars['String']>
  layout_not_contains?: InputMaybe<Scalars['String']>
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lookImage_exists?: InputMaybe<Scalars['Boolean']>
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>
  shopifyProducts_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type AssociationLinkingCollections = {
  __typename?: 'AssociationLinkingCollections'
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  hpModuleCollection?: Maybe<HpModuleCollection>
  storyCollection?: Maybe<StoryCollection>
  tilesCollection?: Maybe<TilesCollection>
}

export type AssociationLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssociationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssociationLinkingCollectionsHpModuleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssociationLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssociationLinkingCollectionsTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum AssociationOrder {
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorShadowAsc = 'colorShadow_ASC',
  ColorShadowDesc = 'colorShadow_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AssociationProductsCollection = {
  __typename?: 'AssociationProductsCollection'
  items: Array<Maybe<Product>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type Brand = Entry & {
  __typename?: 'Brand'
  accentColour?: Maybe<Scalars['String']>
  borderColour?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  image?: Maybe<Asset>
  linkedFrom?: Maybe<BrandLinkingCollections>
  name?: Maybe<Scalars['String']>
  sys: Sys
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandAccentColourArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandBorderColourArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Partner brand [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/brand) */
export type BrandNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type BrandCollection = {
  __typename?: 'BrandCollection'
  items: Array<Maybe<Brand>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type BrandFilter = {
  AND?: InputMaybe<Array<InputMaybe<BrandFilter>>>
  OR?: InputMaybe<Array<InputMaybe<BrandFilter>>>
  accentColour?: InputMaybe<Scalars['String']>
  accentColour_contains?: InputMaybe<Scalars['String']>
  accentColour_exists?: InputMaybe<Scalars['Boolean']>
  accentColour_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  accentColour_not?: InputMaybe<Scalars['String']>
  accentColour_not_contains?: InputMaybe<Scalars['String']>
  accentColour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  borderColour?: InputMaybe<Scalars['String']>
  borderColour_contains?: InputMaybe<Scalars['String']>
  borderColour_exists?: InputMaybe<Scalars['Boolean']>
  borderColour_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  borderColour_not?: InputMaybe<Scalars['String']>
  borderColour_not_contains?: InputMaybe<Scalars['String']>
  borderColour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  image_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_contains?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type BrandLinkingCollections = {
  __typename?: 'BrandLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  promoTilesCollection?: Maybe<PromoTilesCollection>
}

export type BrandLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type BrandLinkingCollectionsPromoTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum BrandOrder {
  AccentColourAsc = 'accentColour_ASC',
  AccentColourDesc = 'accentColour_DESC',
  BorderColourAsc = 'borderColour_ASC',
  BorderColourDesc = 'borderColour_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category'
  colorBackground?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  deck?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<CategoryLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  subcategoriesCollection?: Maybe<CategorySubcategoriesCollection>
  sys: Sys
  type?: Maybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryOrderArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategorySubcategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Categories for Edits and Stories [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/category) */
export type CategoryTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type CategoryCollection = {
  __typename?: 'CategoryCollection'
  items: Array<Maybe<Category>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
  name_contains?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  order?: InputMaybe<Scalars['Int']>
  order_exists?: InputMaybe<Scalars['Boolean']>
  order_gt?: InputMaybe<Scalars['Int']>
  order_gte?: InputMaybe<Scalars['Int']>
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  order_lt?: InputMaybe<Scalars['Int']>
  order_lte?: InputMaybe<Scalars['Int']>
  order_not?: InputMaybe<Scalars['Int']>
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']>
  type_contains?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_not?: InputMaybe<Scalars['String']>
  type_not_contains?: InputMaybe<Scalars['String']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections'
  categoryCollection?: Maybe<CategoryCollection>
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  productCollection?: Maybe<ProductCollection>
  storyCollection?: Maybe<StoryCollection>
}

export type CategoryLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type CategoryLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type CategoryLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type CategoryLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum CategoryOrder {
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type CategorySubcategoriesCollection = {
  __typename?: 'CategorySubcategoriesCollection'
  items: Array<Maybe<Category>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type Edit = Entry & {
  __typename?: 'Edit'
  categorisation?: Maybe<Category>
  category?: Maybe<Scalars['String']>
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  credits?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  deck?: Maybe<Scalars['String']>
  eyebrow?: Maybe<Scalars['String']>
  imageLandscape?: Maybe<Asset>
  imagePortrait?: Maybe<Asset>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<EditLinkingCollections>
  menuLocation?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  modulesCollection?: Maybe<EditModulesCollection>
  relatedFeaturesCollection?: Maybe<EditRelatedFeaturesCollection>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  videoLandscape?: Maybe<Asset>
  videoPortrait?: Maybe<Asset>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditCategorisationArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditCreditsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditDateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditImageLandscapeArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditImagePortraitArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditMenuLocationArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditRelatedFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditVideoLandscapeArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Edit item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/edit) */
export type EditVideoPortraitArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type EditCollection = {
  __typename?: 'EditCollection'
  items: Array<Maybe<Edit>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContent = Entry & {
  __typename?: 'EditContent'
  colorBackground?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  eyebrow?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<EditContentLinkingCollections>
  signature?: Maybe<Scalars['String']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentContentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/editContent) */
export type EditContentSignatureArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type EditContentCollection = {
  __typename?: 'EditContentCollection'
  items: Array<Maybe<EditContent>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type EditContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EditContentFilter>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  content?: InputMaybe<Scalars['String']>
  content_contains?: InputMaybe<Scalars['String']>
  content_exists?: InputMaybe<Scalars['Boolean']>
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  content_not?: InputMaybe<Scalars['String']>
  content_not_contains?: InputMaybe<Scalars['String']>
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  eyebrow?: InputMaybe<Scalars['String']>
  eyebrow_contains?: InputMaybe<Scalars['String']>
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  eyebrow_not?: InputMaybe<Scalars['String']>
  eyebrow_not_contains?: InputMaybe<Scalars['String']>
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  signature?: InputMaybe<Scalars['String']>
  signature_contains?: InputMaybe<Scalars['String']>
  signature_exists?: InputMaybe<Scalars['Boolean']>
  signature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  signature_not?: InputMaybe<Scalars['String']>
  signature_not_contains?: InputMaybe<Scalars['String']>
  signature_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type EditContentLinkingCollections = {
  __typename?: 'EditContentLinkingCollections'
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
}

export type EditContentLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type EditContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type EditContentLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum EditContentOrder {
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SignatureAsc = 'signature_ASC',
  SignatureDesc = 'signature_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type EditFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EditFilter>>>
  categorisation?: InputMaybe<CfCategoryNestedFilter>
  categorisation_exists?: InputMaybe<Scalars['Boolean']>
  category?: InputMaybe<Scalars['String']>
  category_contains?: InputMaybe<Scalars['String']>
  category_exists?: InputMaybe<Scalars['Boolean']>
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  category_not?: InputMaybe<Scalars['String']>
  category_not_contains?: InputMaybe<Scalars['String']>
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  credits?: InputMaybe<Scalars['String']>
  credits_contains?: InputMaybe<Scalars['String']>
  credits_exists?: InputMaybe<Scalars['Boolean']>
  credits_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  credits_not?: InputMaybe<Scalars['String']>
  credits_not_contains?: InputMaybe<Scalars['String']>
  credits_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  date?: InputMaybe<Scalars['DateTime']>
  date_exists?: InputMaybe<Scalars['Boolean']>
  date_gt?: InputMaybe<Scalars['DateTime']>
  date_gte?: InputMaybe<Scalars['DateTime']>
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  date_lt?: InputMaybe<Scalars['DateTime']>
  date_lte?: InputMaybe<Scalars['DateTime']>
  date_not?: InputMaybe<Scalars['DateTime']>
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  eyebrow?: InputMaybe<Scalars['String']>
  eyebrow_contains?: InputMaybe<Scalars['String']>
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  eyebrow_not?: InputMaybe<Scalars['String']>
  eyebrow_not_contains?: InputMaybe<Scalars['String']>
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imageLandscape_exists?: InputMaybe<Scalars['Boolean']>
  imagePortrait_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  menuLocation?: InputMaybe<Scalars['String']>
  menuLocation_contains?: InputMaybe<Scalars['String']>
  menuLocation_exists?: InputMaybe<Scalars['Boolean']>
  menuLocation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  menuLocation_not?: InputMaybe<Scalars['String']>
  menuLocation_not_contains?: InputMaybe<Scalars['String']>
  menuLocation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  modulesCollection_exists?: InputMaybe<Scalars['Boolean']>
  relatedFeaturesCollection_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  videoLandscape_exists?: InputMaybe<Scalars['Boolean']>
  videoPortrait_exists?: InputMaybe<Scalars['Boolean']>
}

export type EditLinkingCollections = {
  __typename?: 'EditLinkingCollections'
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  promoTilesCollection?: Maybe<PromoTilesCollection>
}

export type EditLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type EditLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type EditLinkingCollectionsPromoTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type EditModulesCollection = {
  __typename?: 'EditModulesCollection'
  items: Array<Maybe<EditModulesItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type EditModulesItem = Association | EditContent | ImageVideo | Tiles

export enum EditOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MenuLocationAsc = 'menuLocation_ASC',
  MenuLocationDesc = 'menuLocation_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type EditRelatedFeaturesCollection = {
  __typename?: 'EditRelatedFeaturesCollection'
  items: Array<Maybe<Edit>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModule = Entry & {
  __typename?: 'HpModule'
  association?: Maybe<Association>
  backgroundDesktop?: Maybe<Asset>
  backgroundMobile?: Maybe<Asset>
  categoryName?: Maybe<Scalars['String']>
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorShadow?: Maybe<Scalars['String']>
  colorSticker?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  cta?: Maybe<Scalars['String']>
  deck?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  image?: Maybe<Asset>
  imagesSupportingCollection?: Maybe<AssetCollection>
  internalTitle?: Maybe<Scalars['String']>
  layout?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<HpModuleLinkingCollections>
  secondTile?: Maybe<HpModule>
  sys: Sys
  url?: Maybe<Scalars['String']>
  video?: Maybe<Asset>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleAssociationArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleBackgroundDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleBackgroundMobileArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleColorShadowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleColorStickerArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleCtaArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleImagesSupportingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleSecondTileArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for homepage content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/hpModule) */
export type HpModuleVideoArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type HpModuleCollection = {
  __typename?: 'HpModuleCollection'
  items: Array<Maybe<HpModule>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type HpModuleFilter = {
  AND?: InputMaybe<Array<InputMaybe<HpModuleFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HpModuleFilter>>>
  association?: InputMaybe<CfAssociationNestedFilter>
  association_exists?: InputMaybe<Scalars['Boolean']>
  backgroundDesktop_exists?: InputMaybe<Scalars['Boolean']>
  backgroundMobile_exists?: InputMaybe<Scalars['Boolean']>
  categoryName?: InputMaybe<Scalars['String']>
  categoryName_contains?: InputMaybe<Scalars['String']>
  categoryName_exists?: InputMaybe<Scalars['Boolean']>
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  categoryName_not?: InputMaybe<Scalars['String']>
  categoryName_not_contains?: InputMaybe<Scalars['String']>
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorSticker?: InputMaybe<Scalars['String']>
  colorSticker_contains?: InputMaybe<Scalars['String']>
  colorSticker_exists?: InputMaybe<Scalars['Boolean']>
  colorSticker_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorSticker_not?: InputMaybe<Scalars['String']>
  colorSticker_not_contains?: InputMaybe<Scalars['String']>
  colorSticker_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  cta?: InputMaybe<Scalars['String']>
  cta_contains?: InputMaybe<Scalars['String']>
  cta_exists?: InputMaybe<Scalars['Boolean']>
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  cta_not?: InputMaybe<Scalars['String']>
  cta_not_contains?: InputMaybe<Scalars['String']>
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  image_exists?: InputMaybe<Scalars['Boolean']>
  imagesSupportingCollection_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout?: InputMaybe<Scalars['String']>
  layout_contains?: InputMaybe<Scalars['String']>
  layout_exists?: InputMaybe<Scalars['Boolean']>
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout_not?: InputMaybe<Scalars['String']>
  layout_not_contains?: InputMaybe<Scalars['String']>
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  secondTile?: InputMaybe<CfHpModuleNestedFilter>
  secondTile_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  video_exists?: InputMaybe<Scalars['Boolean']>
}

export type HpModuleLinkingCollections = {
  __typename?: 'HpModuleLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  hpModuleCollection?: Maybe<HpModuleCollection>
  pageCollection?: Maybe<PageCollection>
}

export type HpModuleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type HpModuleLinkingCollectionsHpModuleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type HpModuleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum HpModuleOrder {
  CategoryNameAsc = 'categoryName_ASC',
  CategoryNameDesc = 'categoryName_DESC',
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorShadowAsc = 'colorShadow_ASC',
  ColorShadowDesc = 'colorShadow_DESC',
  ColorStickerAsc = 'colorSticker_ASC',
  ColorStickerDesc = 'colorSticker_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideo = Entry & {
  __typename?: 'ImageVideo'
  autoplay?: Maybe<Scalars['Boolean']>
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorHeading?: Maybe<Scalars['String']>
  colorShadow?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  controls?: Maybe<Scalars['Boolean']>
  cover?: Maybe<Asset>
  deck?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<ImageVideoLinkingCollections>
  media?: Maybe<Asset>
  sys: Sys
  url?: Maybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoColorHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoColorShadowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoControlsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoCoverArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoMediaArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for edits [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/imageVideo) */
export type ImageVideoUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type ImageVideoCollection = {
  __typename?: 'ImageVideoCollection'
  items: Array<Maybe<ImageVideo>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type ImageVideoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageVideoFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ImageVideoFilter>>>
  autoplay?: InputMaybe<Scalars['Boolean']>
  autoplay_exists?: InputMaybe<Scalars['Boolean']>
  autoplay_not?: InputMaybe<Scalars['Boolean']>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorHeading?: InputMaybe<Scalars['String']>
  colorHeading_contains?: InputMaybe<Scalars['String']>
  colorHeading_exists?: InputMaybe<Scalars['Boolean']>
  colorHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorHeading_not?: InputMaybe<Scalars['String']>
  colorHeading_not_contains?: InputMaybe<Scalars['String']>
  colorHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  controls?: InputMaybe<Scalars['Boolean']>
  controls_exists?: InputMaybe<Scalars['Boolean']>
  controls_not?: InputMaybe<Scalars['Boolean']>
  cover_exists?: InputMaybe<Scalars['Boolean']>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  media_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ImageVideoLinkingCollections = {
  __typename?: 'ImageVideoLinkingCollections'
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  storyCollection?: Maybe<StoryCollection>
}

export type ImageVideoLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ImageVideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ImageVideoLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum ImageVideoOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorHeadingAsc = 'colorHeading_ASC',
  ColorHeadingDesc = 'colorHeading_DESC',
  ColorShadowAsc = 'colorShadow_ASC',
  ColorShadowDesc = 'colorShadow_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  ControlsAsc = 'controls_ASC',
  ControlsDesc = 'controls_DESC',
  DeckAsc = 'deck_ASC',
  DeckDesc = 'deck_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type Link = Entry & {
  __typename?: 'Link'
  contentfulMetadata: ContentfulMetadata
  href?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<LinkLinkingCollections>
  shouldOpenInNewTab?: Maybe<Scalars['Boolean']>
  sys: Sys
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type LinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type LinkInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type LinkLabelArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Internal or External link [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/link) */
export type LinkShouldOpenInNewTabArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type LinkCollection = {
  __typename?: 'LinkCollection'
  items: Array<Maybe<Link>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  href?: InputMaybe<Scalars['String']>
  href_contains?: InputMaybe<Scalars['String']>
  href_exists?: InputMaybe<Scalars['Boolean']>
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  href_not?: InputMaybe<Scalars['String']>
  href_not_contains?: InputMaybe<Scalars['String']>
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label?: InputMaybe<Scalars['String']>
  label_contains?: InputMaybe<Scalars['String']>
  label_exists?: InputMaybe<Scalars['Boolean']>
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label_not?: InputMaybe<Scalars['String']>
  label_not_contains?: InputMaybe<Scalars['String']>
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  shouldOpenInNewTab?: InputMaybe<Scalars['Boolean']>
  shouldOpenInNewTab_exists?: InputMaybe<Scalars['Boolean']>
  shouldOpenInNewTab_not?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navigationGroupCollection?: Maybe<NavigationGroupCollection>
  navigationSectionCollection?: Maybe<NavigationSectionCollection>
}

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type LinkLinkingCollectionsNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type LinkLinkingCollectionsNavigationSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum LinkOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  ShouldOpenInNewTabAsc = 'shouldOpenInNewTab_ASC',
  ShouldOpenInNewTabDesc = 'shouldOpenInNewTab_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** The primary navigation for the website [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation'
  contentfulMetadata: ContentfulMetadata
  desktopMenuCollection?: Maybe<NavigationDesktopMenuCollection>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<NavigationLinkingCollections>
  sys: Sys
}

/** The primary navigation for the website [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigation) */
export type NavigationDesktopMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** The primary navigation for the website [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigation) */
export type NavigationInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** The primary navigation for the website [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type NavigationCollection = {
  __typename?: 'NavigationCollection'
  items: Array<Maybe<Navigation>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationDesktopMenuCollection = {
  __typename?: 'NavigationDesktopMenuCollection'
  items: Array<Maybe<NavigationGroup>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  desktopMenuCollection_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroup = Entry & {
  __typename?: 'NavigationGroup'
  contentfulMetadata: ContentfulMetadata
  heading?: Maybe<Scalars['String']>
  headingLink?: Maybe<Link>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<NavigationGroupLinkingCollections>
  promoTilesCollection?: Maybe<NavigationGroupPromoTilesCollection>
  subNavCollection?: Maybe<NavigationGroupSubNavCollection>
  subNavTemplate?: Maybe<Scalars['String']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupHeadingLinkArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupPromoTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupSubNavCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationGroup) */
export type NavigationGroupSubNavTemplateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type NavigationGroupCollection = {
  __typename?: 'NavigationGroupCollection'
  items: Array<Maybe<NavigationGroup>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationGroupFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavigationGroupFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  heading?: InputMaybe<Scalars['String']>
  headingLink?: InputMaybe<CfLinkNestedFilter>
  headingLink_exists?: InputMaybe<Scalars['Boolean']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  promoTilesCollection_exists?: InputMaybe<Scalars['Boolean']>
  subNavCollection_exists?: InputMaybe<Scalars['Boolean']>
  subNavTemplate?: InputMaybe<Scalars['String']>
  subNavTemplate_contains?: InputMaybe<Scalars['String']>
  subNavTemplate_exists?: InputMaybe<Scalars['Boolean']>
  subNavTemplate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subNavTemplate_not?: InputMaybe<Scalars['String']>
  subNavTemplate_not_contains?: InputMaybe<Scalars['String']>
  subNavTemplate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type NavigationGroupLinkingCollections = {
  __typename?: 'NavigationGroupLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navigationCollection?: Maybe<NavigationCollection>
}

export type NavigationGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type NavigationGroupLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum NavigationGroupOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubNavTemplateAsc = 'subNavTemplate_ASC',
  SubNavTemplateDesc = 'subNavTemplate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type NavigationGroupPromoTilesCollection = {
  __typename?: 'NavigationGroupPromoTilesCollection'
  items: Array<Maybe<PromoTiles>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationGroupSubNavCollection = {
  __typename?: 'NavigationGroupSubNavCollection'
  items: Array<Maybe<NavigationSection>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItem = Entry & {
  __typename?: 'NavigationItem'
  contentfulMetadata: ContentfulMetadata
  external?: Maybe<Scalars['Boolean']>
  internalTitle?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<NavigationItemLinkingCollections>
  name?: Maybe<Scalars['String']>
  submenuCollection?: Maybe<NavigationItemSubmenuCollection>
  sys: Sys
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemExternalArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemLinkArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Navigation menu item (old) [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationItem) */
export type NavigationItemSubmenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection'
  items: Array<Maybe<NavigationItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  external?: InputMaybe<Scalars['Boolean']>
  external_exists?: InputMaybe<Scalars['Boolean']>
  external_not?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  link?: InputMaybe<Scalars['String']>
  link_contains?: InputMaybe<Scalars['String']>
  link_exists?: InputMaybe<Scalars['Boolean']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  link_not?: InputMaybe<Scalars['String']>
  link_not_contains?: InputMaybe<Scalars['String']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
  name_contains?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  submenuCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type NavigationItemLinkingCollections = {
  __typename?: 'NavigationItemLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navigationItemCollection?: Maybe<NavigationItemCollection>
}

export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type NavigationItemLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum NavigationItemOrder {
  ExternalAsc = 'external_ASC',
  ExternalDesc = 'external_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type NavigationItemSubmenuCollection = {
  __typename?: 'NavigationItemSubmenuCollection'
  items: Array<Maybe<NavigationItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum NavigationOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSection = Entry & {
  __typename?: 'NavigationSection'
  contentfulMetadata: ContentfulMetadata
  heading?: Maybe<Scalars['String']>
  headingLink?: Maybe<Link>
  internalTitle?: Maybe<Scalars['String']>
  itemsCollection?: Maybe<NavigationSectionItemsCollection>
  linkedFrom?: Maybe<NavigationSectionLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSectionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSectionHeadingLinkArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSectionItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/navigationSection) */
export type NavigationSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type NavigationSectionCollection = {
  __typename?: 'NavigationSectionCollection'
  items: Array<Maybe<NavigationSection>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationSectionFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavigationSectionFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  heading?: InputMaybe<Scalars['String']>
  headingLink?: InputMaybe<CfLinkNestedFilter>
  headingLink_exists?: InputMaybe<Scalars['Boolean']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type NavigationSectionItemsCollection = {
  __typename?: 'NavigationSectionItemsCollection'
  items: Array<Maybe<Link>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type NavigationSectionLinkingCollections = {
  __typename?: 'NavigationSectionLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navigationGroupCollection?: Maybe<NavigationGroupCollection>
}

export type NavigationSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type NavigationSectionLinkingCollectionsNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum NavigationSectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page'
  content?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<PageLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  modulesCollection?: Maybe<PageModulesCollection>
  productsCollection?: Maybe<PageProductsCollection>
  shopifyProducts?: Maybe<Array<Maybe<Scalars['String']>>>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageContentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageShopifyProductsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Generic page item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/page) */
export type PageTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type PageCollection = {
  __typename?: 'PageCollection'
  items: Array<Maybe<Page>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>
  content?: InputMaybe<Scalars['String']>
  content_contains?: InputMaybe<Scalars['String']>
  content_exists?: InputMaybe<Scalars['Boolean']>
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  content_not?: InputMaybe<Scalars['String']>
  content_not_contains?: InputMaybe<Scalars['String']>
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  modulesCollection_exists?: InputMaybe<Scalars['Boolean']>
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>
  shopifyProducts_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type?: InputMaybe<Scalars['String']>
  type_contains?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_not?: InputMaybe<Scalars['String']>
  type_not_contains?: InputMaybe<Scalars['String']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type PageModulesCollection = {
  __typename?: 'PageModulesCollection'
  items: Array<Maybe<PageModulesItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PageModulesItem = EditContent | HpModule

export enum PageOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type PageProductsCollection = {
  __typename?: 'PageProductsCollection'
  items: Array<Maybe<Product>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** Press quote item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/pressItem) */
export type PressItem = Entry & {
  __typename?: 'PressItem'
  contentfulMetadata: ContentfulMetadata
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<PressItemLinkingCollections>
  logo?: Maybe<Asset>
  quote?: Maybe<Scalars['String']>
  sys: Sys
}

/** Press quote item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/pressItem) */
export type PressItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Press quote item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/pressItem) */
export type PressItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Press quote item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/pressItem) */
export type PressItemLogoArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Press quote item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/pressItem) */
export type PressItemQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type PressItemCollection = {
  __typename?: 'PressItemCollection'
  items: Array<Maybe<PressItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PressItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<PressItemFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PressItemFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  logo_exists?: InputMaybe<Scalars['Boolean']>
  quote?: InputMaybe<Scalars['String']>
  quote_contains?: InputMaybe<Scalars['String']>
  quote_exists?: InputMaybe<Scalars['Boolean']>
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  quote_not?: InputMaybe<Scalars['String']>
  quote_not_contains?: InputMaybe<Scalars['String']>
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type PressItemLinkingCollections = {
  __typename?: 'PressItemLinkingCollections'
  aboutCollection?: Maybe<AboutCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type PressItemLinkingCollectionsAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type PressItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum PressItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type Product = Entry & {
  __typename?: 'Product'
  brand?: Maybe<Scalars['String']>
  categoriesCollection?: Maybe<ProductCategoriesCollection>
  contentfulMetadata: ContentfulMetadata
  date?: Maybe<Scalars['DateTime']>
  descriptionCopy?: Maybe<Scalars['String']>
  galleryCollection?: Maybe<AssetCollection>
  hideFromShopView?: Maybe<Scalars['Boolean']>
  image?: Maybe<Asset>
  internalTitle?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  linkedFrom?: Maybe<ProductLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  productName?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  styleTrick?: Maybe<Scalars['String']>
  styleTrickAuthor?: Maybe<Scalars['String']>
  styleTrickContent?: Maybe<StyleTrickContent>
  sys: Sys
  url?: Maybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductBrandArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductCategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductDateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductDescriptionCopyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductHideFromShopViewArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductStyleTrickArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductStyleTrickAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductStyleTrickContentArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Product tile [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/product) */
export type ProductUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type ProductCategoriesCollection = {
  __typename?: 'ProductCategoriesCollection'
  items: Array<Maybe<Category>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type ProductCollection = {
  __typename?: 'ProductCollection'
  items: Array<Maybe<Product>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>
  brand?: InputMaybe<Scalars['String']>
  brand_contains?: InputMaybe<Scalars['String']>
  brand_exists?: InputMaybe<Scalars['Boolean']>
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  brand_not?: InputMaybe<Scalars['String']>
  brand_not_contains?: InputMaybe<Scalars['String']>
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  categoriesCollection_exists?: InputMaybe<Scalars['Boolean']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  date?: InputMaybe<Scalars['DateTime']>
  date_exists?: InputMaybe<Scalars['Boolean']>
  date_gt?: InputMaybe<Scalars['DateTime']>
  date_gte?: InputMaybe<Scalars['DateTime']>
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  date_lt?: InputMaybe<Scalars['DateTime']>
  date_lte?: InputMaybe<Scalars['DateTime']>
  date_not?: InputMaybe<Scalars['DateTime']>
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  descriptionCopy?: InputMaybe<Scalars['String']>
  descriptionCopy_contains?: InputMaybe<Scalars['String']>
  descriptionCopy_exists?: InputMaybe<Scalars['Boolean']>
  descriptionCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  descriptionCopy_not?: InputMaybe<Scalars['String']>
  descriptionCopy_not_contains?: InputMaybe<Scalars['String']>
  descriptionCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>
  hideFromShopView?: InputMaybe<Scalars['Boolean']>
  hideFromShopView_exists?: InputMaybe<Scalars['Boolean']>
  hideFromShopView_not?: InputMaybe<Scalars['Boolean']>
  image_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  keywords_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  price?: InputMaybe<Scalars['Float']>
  price_exists?: InputMaybe<Scalars['Boolean']>
  price_gt?: InputMaybe<Scalars['Float']>
  price_gte?: InputMaybe<Scalars['Float']>
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  price_lt?: InputMaybe<Scalars['Float']>
  price_lte?: InputMaybe<Scalars['Float']>
  price_not?: InputMaybe<Scalars['Float']>
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  productName?: InputMaybe<Scalars['String']>
  productName_contains?: InputMaybe<Scalars['String']>
  productName_exists?: InputMaybe<Scalars['Boolean']>
  productName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  productName_not?: InputMaybe<Scalars['String']>
  productName_not_contains?: InputMaybe<Scalars['String']>
  productName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  styleTrick?: InputMaybe<Scalars['String']>
  styleTrickAuthor?: InputMaybe<Scalars['String']>
  styleTrickAuthor_contains?: InputMaybe<Scalars['String']>
  styleTrickAuthor_exists?: InputMaybe<Scalars['Boolean']>
  styleTrickAuthor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  styleTrickAuthor_not?: InputMaybe<Scalars['String']>
  styleTrickAuthor_not_contains?: InputMaybe<Scalars['String']>
  styleTrickAuthor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  styleTrickContent?: InputMaybe<CfStyleTrickContentNestedFilter>
  styleTrickContent_exists?: InputMaybe<Scalars['Boolean']>
  styleTrick_contains?: InputMaybe<Scalars['String']>
  styleTrick_exists?: InputMaybe<Scalars['Boolean']>
  styleTrick_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  styleTrick_not?: InputMaybe<Scalars['String']>
  styleTrick_not_contains?: InputMaybe<Scalars['String']>
  styleTrick_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections'
  associationCollection?: Maybe<AssociationCollection>
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
  tilesCollection?: Maybe<TilesCollection>
}

export type ProductLinkingCollectionsAssociationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ProductLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ProductLinkingCollectionsTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum ProductOrder {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HideFromShopViewAsc = 'hideFromShopView_ASC',
  HideFromShopViewDesc = 'hideFromShopView_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  ProductNameAsc = 'productName_ASC',
  ProductNameDesc = 'productName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StyleTrickAuthorAsc = 'styleTrickAuthor_ASC',
  StyleTrickAuthorDesc = 'styleTrickAuthor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/promoTiles) */
export type PromoTiles = Entry & {
  __typename?: 'PromoTiles'
  contentfulMetadata: ContentfulMetadata
  internalTitle?: Maybe<Scalars['String']>
  linkedEntry?: Maybe<PromoTilesLinkedEntry>
  linkedFrom?: Maybe<PromoTilesLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/promoTiles) */
export type PromoTilesInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/promoTiles) */
export type PromoTilesLinkedEntryArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/promoTiles) */
export type PromoTilesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PromoTilesCollection = {
  __typename?: 'PromoTilesCollection'
  items: Array<Maybe<PromoTiles>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PromoTilesFilter = {
  AND?: InputMaybe<Array<InputMaybe<PromoTilesFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PromoTilesFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  linkedEntry_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type PromoTilesLinkedEntry = Brand | Edit | Story

export type PromoTilesLinkingCollections = {
  __typename?: 'PromoTilesLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navigationGroupCollection?: Maybe<NavigationGroupCollection>
}

export type PromoTilesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type PromoTilesLinkingCollectionsNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum PromoTilesOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Query = {
  __typename?: 'Query'
  about?: Maybe<About>
  aboutCollection?: Maybe<AboutCollection>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  association?: Maybe<Association>
  associationCollection?: Maybe<AssociationCollection>
  brand?: Maybe<Brand>
  brandCollection?: Maybe<BrandCollection>
  category?: Maybe<Category>
  categoryCollection?: Maybe<CategoryCollection>
  edit?: Maybe<Edit>
  editCollection?: Maybe<EditCollection>
  editContent?: Maybe<EditContent>
  editContentCollection?: Maybe<EditContentCollection>
  entryCollection?: Maybe<EntryCollection>
  hpModule?: Maybe<HpModule>
  hpModuleCollection?: Maybe<HpModuleCollection>
  imageVideo?: Maybe<ImageVideo>
  imageVideoCollection?: Maybe<ImageVideoCollection>
  link?: Maybe<Link>
  linkCollection?: Maybe<LinkCollection>
  navigation?: Maybe<Navigation>
  navigationCollection?: Maybe<NavigationCollection>
  navigationGroup?: Maybe<NavigationGroup>
  navigationGroupCollection?: Maybe<NavigationGroupCollection>
  navigationItem?: Maybe<NavigationItem>
  navigationItemCollection?: Maybe<NavigationItemCollection>
  navigationSection?: Maybe<NavigationSection>
  navigationSectionCollection?: Maybe<NavigationSectionCollection>
  page?: Maybe<Page>
  pageCollection?: Maybe<PageCollection>
  pressItem?: Maybe<PressItem>
  pressItemCollection?: Maybe<PressItemCollection>
  product?: Maybe<Product>
  productCollection?: Maybe<ProductCollection>
  promoTiles?: Maybe<PromoTiles>
  promoTilesCollection?: Maybe<PromoTilesCollection>
  settings?: Maybe<Settings>
  settingsCollection?: Maybe<SettingsCollection>
  story?: Maybe<Story>
  storyCollection?: Maybe<StoryCollection>
  storyContent?: Maybe<StoryContent>
  storyContentCollection?: Maybe<StoryContentCollection>
  styleTrickContent?: Maybe<StyleTrickContent>
  styleTrickContentCollection?: Maybe<StyleTrickContentCollection>
  tiles?: Maybe<Tiles>
  tilesCollection?: Maybe<TilesCollection>
}

export type QueryAboutArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<AboutOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AboutFilter>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetFilter>
}

export type QueryAssociationArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryAssociationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<AssociationOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssociationFilter>
}

export type QueryBrandArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryBrandCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<BrandOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BrandFilter>
}

export type QueryCategoryArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryFilter>
}

export type QueryEditArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<EditOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EditFilter>
}

export type QueryEditContentArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryEditContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<EditContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EditContentFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EntryFilter>
}

export type QueryHpModuleArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryHpModuleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<HpModuleOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HpModuleFilter>
}

export type QueryImageVideoArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryImageVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<ImageVideoOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ImageVideoFilter>
}

export type QueryLinkArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<LinkFilter>
}

export type QueryNavigationArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<NavigationFilter>
}

export type QueryNavigationGroupArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryNavigationGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<NavigationGroupOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<NavigationGroupFilter>
}

export type QueryNavigationItemArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<NavigationItemFilter>
}

export type QueryNavigationSectionArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryNavigationSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<NavigationSectionOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<NavigationSectionFilter>
}

export type QueryPageArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PageFilter>
}

export type QueryPressItemArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryPressItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<PressItemOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PressItemFilter>
}

export type QueryProductArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProductFilter>
}

export type QueryPromoTilesArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryPromoTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<PromoTilesOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PromoTilesFilter>
}

export type QuerySettingsArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SettingsFilter>
}

export type QueryStoryArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<StoryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<StoryFilter>
}

export type QueryStoryContentArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryStoryContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<StoryContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<StoryContentFilter>
}

export type QueryStyleTrickContentArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryStyleTrickContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<StyleTrickContentOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<StyleTrickContentFilter>
}

export type QueryTilesArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<TilesOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TilesFilter>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type Settings = Entry & {
  __typename?: 'Settings'
  contentfulMetadata: ContentfulMetadata
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<SettingsLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  newsletterCopy?: Maybe<Scalars['String']>
  newsletterCta?: Maybe<Scalars['String']>
  newsletterHeader?: Maybe<Scalars['String']>
  newsletterLegal?: Maybe<Scalars['String']>
  newsletterPopupCopy?: Maybe<Scalars['String']>
  sys: Sys
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsNewsletterCopyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsNewsletterCtaArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsNewsletterHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsNewsletterLegalArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Global settings [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/settings) */
export type SettingsNewsletterPopupCopyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type SettingsCollection = {
  __typename?: 'SettingsCollection'
  items: Array<Maybe<Settings>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterCopy?: InputMaybe<Scalars['String']>
  newsletterCopy_contains?: InputMaybe<Scalars['String']>
  newsletterCopy_exists?: InputMaybe<Scalars['Boolean']>
  newsletterCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterCopy_not?: InputMaybe<Scalars['String']>
  newsletterCopy_not_contains?: InputMaybe<Scalars['String']>
  newsletterCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterCta?: InputMaybe<Scalars['String']>
  newsletterCta_contains?: InputMaybe<Scalars['String']>
  newsletterCta_exists?: InputMaybe<Scalars['Boolean']>
  newsletterCta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterCta_not?: InputMaybe<Scalars['String']>
  newsletterCta_not_contains?: InputMaybe<Scalars['String']>
  newsletterCta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterHeader?: InputMaybe<Scalars['String']>
  newsletterHeader_contains?: InputMaybe<Scalars['String']>
  newsletterHeader_exists?: InputMaybe<Scalars['Boolean']>
  newsletterHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterHeader_not?: InputMaybe<Scalars['String']>
  newsletterHeader_not_contains?: InputMaybe<Scalars['String']>
  newsletterHeader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterLegal?: InputMaybe<Scalars['String']>
  newsletterLegal_contains?: InputMaybe<Scalars['String']>
  newsletterLegal_exists?: InputMaybe<Scalars['Boolean']>
  newsletterLegal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterLegal_not?: InputMaybe<Scalars['String']>
  newsletterLegal_not_contains?: InputMaybe<Scalars['String']>
  newsletterLegal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterPopupCopy?: InputMaybe<Scalars['String']>
  newsletterPopupCopy_contains?: InputMaybe<Scalars['String']>
  newsletterPopupCopy_exists?: InputMaybe<Scalars['Boolean']>
  newsletterPopupCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  newsletterPopupCopy_not?: InputMaybe<Scalars['String']>
  newsletterPopupCopy_not_contains?: InputMaybe<Scalars['String']>
  newsletterPopupCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum SettingsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NewsletterCtaAsc = 'newsletterCta_ASC',
  NewsletterCtaDesc = 'newsletterCta_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type Story = Entry & {
  __typename?: 'Story'
  category?: Maybe<Category>
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  credits?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  deck?: Maybe<Scalars['String']>
  imageLandscape?: Maybe<Asset>
  imagePortrait?: Maybe<Asset>
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<StoryLinkingCollections>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  metaTitle?: Maybe<Scalars['String']>
  modulesCollection?: Maybe<StoryModulesCollection>
  relatedFeaturesCollection?: Maybe<StoryRelatedFeaturesCollection>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  title?: Maybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryCreditsArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryDateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryImageLandscapeArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryImagePortraitArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryMetaImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryRelatedFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Story item [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/story) */
export type StoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type StoryCollection = {
  __typename?: 'StoryCollection'
  items: Array<Maybe<Story>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** Module for the Story content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/storyContent) */
export type StoryContent = Entry & {
  __typename?: 'StoryContent'
  content?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  internalTitle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<StoryContentLinkingCollections>
  sys: Sys
}

/** Module for the Story content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/storyContent) */
export type StoryContentContentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Story content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/storyContent) */
export type StoryContentInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Story content [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/storyContent) */
export type StoryContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryContentCollection = {
  __typename?: 'StoryContentCollection'
  items: Array<Maybe<StoryContent>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type StoryContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoryContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<StoryContentFilter>>>
  content?: InputMaybe<Scalars['String']>
  content_contains?: InputMaybe<Scalars['String']>
  content_exists?: InputMaybe<Scalars['Boolean']>
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  content_not?: InputMaybe<Scalars['String']>
  content_not_contains?: InputMaybe<Scalars['String']>
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type StoryContentLinkingCollections = {
  __typename?: 'StoryContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  storyCollection?: Maybe<StoryCollection>
}

export type StoryContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type StoryContentLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum StoryContentOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type StoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<StoryFilter>>>
  category?: InputMaybe<CfCategoryNestedFilter>
  category_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  credits?: InputMaybe<Scalars['String']>
  credits_contains?: InputMaybe<Scalars['String']>
  credits_exists?: InputMaybe<Scalars['Boolean']>
  credits_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  credits_not?: InputMaybe<Scalars['String']>
  credits_not_contains?: InputMaybe<Scalars['String']>
  credits_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  date?: InputMaybe<Scalars['DateTime']>
  date_exists?: InputMaybe<Scalars['Boolean']>
  date_gt?: InputMaybe<Scalars['DateTime']>
  date_gte?: InputMaybe<Scalars['DateTime']>
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  date_lt?: InputMaybe<Scalars['DateTime']>
  date_lte?: InputMaybe<Scalars['DateTime']>
  date_not?: InputMaybe<Scalars['DateTime']>
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imageLandscape_exists?: InputMaybe<Scalars['Boolean']>
  imagePortrait_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  modulesCollection_exists?: InputMaybe<Scalars['Boolean']>
  relatedFeaturesCollection_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryLinkingCollections = {
  __typename?: 'StoryLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  promoTilesCollection?: Maybe<PromoTilesCollection>
  storyCollection?: Maybe<StoryCollection>
}

export type StoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type StoryLinkingCollectionsPromoTilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type StoryLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type StoryModulesCollection = {
  __typename?: 'StoryModulesCollection'
  items: Array<Maybe<StoryModulesItem>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type StoryModulesItem = Association | ImageVideo | StoryContent | Tiles

export enum StoryOrder {
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type StoryRelatedFeaturesCollection = {
  __typename?: 'StoryRelatedFeaturesCollection'
  items: Array<Maybe<Story>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/styleTrickContent) */
export type StyleTrickContent = Entry & {
  __typename?: 'StyleTrickContent'
  author?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<StyleTrickContentLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/styleTrickContent) */
export type StyleTrickContentAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/styleTrickContent) */
export type StyleTrickContentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/styleTrickContent) */
export type StyleTrickContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StyleTrickContentCollection = {
  __typename?: 'StyleTrickContentCollection'
  items: Array<Maybe<StyleTrickContent>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type StyleTrickContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<StyleTrickContentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<StyleTrickContentFilter>>>
  author?: InputMaybe<Scalars['String']>
  author_contains?: InputMaybe<Scalars['String']>
  author_exists?: InputMaybe<Scalars['Boolean']>
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  author_not?: InputMaybe<Scalars['String']>
  author_not_contains?: InputMaybe<Scalars['String']>
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type StyleTrickContentLinkingCollections = {
  __typename?: 'StyleTrickContentLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  productCollection?: Maybe<ProductCollection>
}

export type StyleTrickContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type StyleTrickContentLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum StyleTrickContentOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
  spaceId: Scalars['String']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['String']>
  id_contains?: InputMaybe<Scalars['String']>
  id_exists?: InputMaybe<Scalars['Boolean']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_not?: InputMaybe<Scalars['String']>
  id_not_contains?: InputMaybe<Scalars['String']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedVersion?: InputMaybe<Scalars['Float']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']>
  publishedVersion_not?: InputMaybe<Scalars['Float']>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type Tiles = Entry & {
  __typename?: 'Tiles'
  colorAccent?: Maybe<Scalars['String']>
  colorBackground?: Maybe<Scalars['String']>
  colorHeading?: Maybe<Scalars['String']>
  colorShadow?: Maybe<Scalars['String']>
  colorText?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  deck?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  internalTitle?: Maybe<Scalars['String']>
  layout?: Maybe<Scalars['String']>
  leftTileCaption?: Maybe<Scalars['String']>
  leftTileImage?: Maybe<Asset>
  leftTileObject?: Maybe<TilesLeftTileObject>
  leftTileShopifyProduct?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<TilesLinkingCollections>
  rightTileCaption?: Maybe<Scalars['String']>
  rightTileImage?: Maybe<Asset>
  rightTileObject?: Maybe<TilesRightTileObject>
  rightTileShopifyProduct?: Maybe<Scalars['String']>
  sys: Sys
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesColorAccentArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesColorBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesColorHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesColorShadowArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesColorTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesDeckArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLeftTileCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLeftTileImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLeftTileObjectArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLeftTileShopifyProductArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesRightTileCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesRightTileImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesRightTileObjectArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Module for the Edit and Story tiles [See type definition](https://app.contentful.com/spaces/gyod7rp86p1e/content_types/tiles) */
export type TilesRightTileShopifyProductArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type TilesCollection = {
  __typename?: 'TilesCollection'
  items: Array<Maybe<Tiles>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type TilesFilter = {
  AND?: InputMaybe<Array<InputMaybe<TilesFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TilesFilter>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorHeading?: InputMaybe<Scalars['String']>
  colorHeading_contains?: InputMaybe<Scalars['String']>
  colorHeading_exists?: InputMaybe<Scalars['Boolean']>
  colorHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorHeading_not?: InputMaybe<Scalars['String']>
  colorHeading_not_contains?: InputMaybe<Scalars['String']>
  colorHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout?: InputMaybe<Scalars['String']>
  layout_contains?: InputMaybe<Scalars['String']>
  layout_exists?: InputMaybe<Scalars['Boolean']>
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout_not?: InputMaybe<Scalars['String']>
  layout_not_contains?: InputMaybe<Scalars['String']>
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  leftTileCaption?: InputMaybe<Scalars['String']>
  leftTileCaption_contains?: InputMaybe<Scalars['String']>
  leftTileCaption_exists?: InputMaybe<Scalars['Boolean']>
  leftTileCaption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  leftTileCaption_not?: InputMaybe<Scalars['String']>
  leftTileCaption_not_contains?: InputMaybe<Scalars['String']>
  leftTileCaption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  leftTileImage_exists?: InputMaybe<Scalars['Boolean']>
  leftTileObject_exists?: InputMaybe<Scalars['Boolean']>
  leftTileShopifyProduct?: InputMaybe<Scalars['String']>
  leftTileShopifyProduct_contains?: InputMaybe<Scalars['String']>
  leftTileShopifyProduct_exists?: InputMaybe<Scalars['Boolean']>
  leftTileShopifyProduct_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  leftTileShopifyProduct_not?: InputMaybe<Scalars['String']>
  leftTileShopifyProduct_not_contains?: InputMaybe<Scalars['String']>
  leftTileShopifyProduct_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  rightTileCaption?: InputMaybe<Scalars['String']>
  rightTileCaption_contains?: InputMaybe<Scalars['String']>
  rightTileCaption_exists?: InputMaybe<Scalars['Boolean']>
  rightTileCaption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  rightTileCaption_not?: InputMaybe<Scalars['String']>
  rightTileCaption_not_contains?: InputMaybe<Scalars['String']>
  rightTileCaption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  rightTileImage_exists?: InputMaybe<Scalars['Boolean']>
  rightTileObject_exists?: InputMaybe<Scalars['Boolean']>
  rightTileShopifyProduct?: InputMaybe<Scalars['String']>
  rightTileShopifyProduct_contains?: InputMaybe<Scalars['String']>
  rightTileShopifyProduct_exists?: InputMaybe<Scalars['Boolean']>
  rightTileShopifyProduct_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  rightTileShopifyProduct_not?: InputMaybe<Scalars['String']>
  rightTileShopifyProduct_not_contains?: InputMaybe<Scalars['String']>
  rightTileShopifyProduct_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  sys?: InputMaybe<SysFilter>
}

export type TilesLeftTileObject = Association | Product

export type TilesLinkingCollections = {
  __typename?: 'TilesLinkingCollections'
  editCollection?: Maybe<EditCollection>
  entryCollection?: Maybe<EntryCollection>
  storyCollection?: Maybe<StoryCollection>
}

export type TilesLinkingCollectionsEditCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type TilesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type TilesLinkingCollectionsStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum TilesOrder {
  ColorAccentAsc = 'colorAccent_ASC',
  ColorAccentDesc = 'colorAccent_DESC',
  ColorBackgroundAsc = 'colorBackground_ASC',
  ColorBackgroundDesc = 'colorBackground_DESC',
  ColorHeadingAsc = 'colorHeading_ASC',
  ColorHeadingDesc = 'colorHeading_DESC',
  ColorShadowAsc = 'colorShadow_ASC',
  ColorShadowDesc = 'colorShadow_DESC',
  ColorTextAsc = 'colorText_ASC',
  ColorTextDesc = 'colorText_DESC',
  DeckAsc = 'deck_ASC',
  DeckDesc = 'deck_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LeftTileCaptionAsc = 'leftTileCaption_ASC',
  LeftTileCaptionDesc = 'leftTileCaption_DESC',
  LeftTileShopifyProductAsc = 'leftTileShopifyProduct_ASC',
  LeftTileShopifyProductDesc = 'leftTileShopifyProduct_DESC',
  RightTileCaptionAsc = 'rightTileCaption_ASC',
  RightTileCaptionDesc = 'rightTileCaption_DESC',
  RightTileShopifyProductAsc = 'rightTileShopifyProduct_ASC',
  RightTileShopifyProductDesc = 'rightTileShopifyProduct_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TilesRightTileObject = Association | Product

export type CfAssociationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAssociationNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfAssociationNestedFilter>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout?: InputMaybe<Scalars['String']>
  layout_contains?: InputMaybe<Scalars['String']>
  layout_exists?: InputMaybe<Scalars['Boolean']>
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout_not?: InputMaybe<Scalars['String']>
  layout_not_contains?: InputMaybe<Scalars['String']>
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lookImage_exists?: InputMaybe<Scalars['Boolean']>
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>
  shopifyProducts_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >
  shopifyProducts_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaTitle_contains?: InputMaybe<Scalars['String']>
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaTitle_not?: InputMaybe<Scalars['String']>
  metaTitle_not_contains?: InputMaybe<Scalars['String']>
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
  name_contains?: InputMaybe<Scalars['String']>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  order?: InputMaybe<Scalars['Int']>
  order_exists?: InputMaybe<Scalars['Boolean']>
  order_gt?: InputMaybe<Scalars['Int']>
  order_gte?: InputMaybe<Scalars['Int']>
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  order_lt?: InputMaybe<Scalars['Int']>
  order_lte?: InputMaybe<Scalars['Int']>
  order_not?: InputMaybe<Scalars['Int']>
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']>
  type_contains?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_not?: InputMaybe<Scalars['String']>
  type_not_contains?: InputMaybe<Scalars['String']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CfHpModuleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHpModuleNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfHpModuleNestedFilter>>>
  association_exists?: InputMaybe<Scalars['Boolean']>
  backgroundDesktop_exists?: InputMaybe<Scalars['Boolean']>
  backgroundMobile_exists?: InputMaybe<Scalars['Boolean']>
  categoryName?: InputMaybe<Scalars['String']>
  categoryName_contains?: InputMaybe<Scalars['String']>
  categoryName_exists?: InputMaybe<Scalars['Boolean']>
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  categoryName_not?: InputMaybe<Scalars['String']>
  categoryName_not_contains?: InputMaybe<Scalars['String']>
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent?: InputMaybe<Scalars['String']>
  colorAccent_contains?: InputMaybe<Scalars['String']>
  colorAccent_exists?: InputMaybe<Scalars['Boolean']>
  colorAccent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorAccent_not?: InputMaybe<Scalars['String']>
  colorAccent_not_contains?: InputMaybe<Scalars['String']>
  colorAccent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground?: InputMaybe<Scalars['String']>
  colorBackground_contains?: InputMaybe<Scalars['String']>
  colorBackground_exists?: InputMaybe<Scalars['Boolean']>
  colorBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorBackground_not?: InputMaybe<Scalars['String']>
  colorBackground_not_contains?: InputMaybe<Scalars['String']>
  colorBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow?: InputMaybe<Scalars['String']>
  colorShadow_contains?: InputMaybe<Scalars['String']>
  colorShadow_exists?: InputMaybe<Scalars['Boolean']>
  colorShadow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorShadow_not?: InputMaybe<Scalars['String']>
  colorShadow_not_contains?: InputMaybe<Scalars['String']>
  colorShadow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorSticker?: InputMaybe<Scalars['String']>
  colorSticker_contains?: InputMaybe<Scalars['String']>
  colorSticker_exists?: InputMaybe<Scalars['Boolean']>
  colorSticker_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorSticker_not?: InputMaybe<Scalars['String']>
  colorSticker_not_contains?: InputMaybe<Scalars['String']>
  colorSticker_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText?: InputMaybe<Scalars['String']>
  colorText_contains?: InputMaybe<Scalars['String']>
  colorText_exists?: InputMaybe<Scalars['Boolean']>
  colorText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  colorText_not?: InputMaybe<Scalars['String']>
  colorText_not_contains?: InputMaybe<Scalars['String']>
  colorText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  cta?: InputMaybe<Scalars['String']>
  cta_contains?: InputMaybe<Scalars['String']>
  cta_exists?: InputMaybe<Scalars['Boolean']>
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  cta_not?: InputMaybe<Scalars['String']>
  cta_not_contains?: InputMaybe<Scalars['String']>
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck?: InputMaybe<Scalars['String']>
  deck_contains?: InputMaybe<Scalars['String']>
  deck_exists?: InputMaybe<Scalars['Boolean']>
  deck_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  deck_not?: InputMaybe<Scalars['String']>
  deck_not_contains?: InputMaybe<Scalars['String']>
  deck_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading?: InputMaybe<Scalars['String']>
  heading_contains?: InputMaybe<Scalars['String']>
  heading_exists?: InputMaybe<Scalars['Boolean']>
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  heading_not?: InputMaybe<Scalars['String']>
  heading_not_contains?: InputMaybe<Scalars['String']>
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  image_exists?: InputMaybe<Scalars['Boolean']>
  imagesSupportingCollection_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout?: InputMaybe<Scalars['String']>
  layout_contains?: InputMaybe<Scalars['String']>
  layout_exists?: InputMaybe<Scalars['Boolean']>
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  layout_not?: InputMaybe<Scalars['String']>
  layout_not_contains?: InputMaybe<Scalars['String']>
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  secondTile_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  video_exists?: InputMaybe<Scalars['Boolean']>
}

export type CfLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  href?: InputMaybe<Scalars['String']>
  href_contains?: InputMaybe<Scalars['String']>
  href_exists?: InputMaybe<Scalars['Boolean']>
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  href_not?: InputMaybe<Scalars['String']>
  href_not_contains?: InputMaybe<Scalars['String']>
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle?: InputMaybe<Scalars['String']>
  internalTitle_contains?: InputMaybe<Scalars['String']>
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  internalTitle_not?: InputMaybe<Scalars['String']>
  internalTitle_not_contains?: InputMaybe<Scalars['String']>
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label?: InputMaybe<Scalars['String']>
  label_contains?: InputMaybe<Scalars['String']>
  label_exists?: InputMaybe<Scalars['Boolean']>
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label_not?: InputMaybe<Scalars['String']>
  label_not_contains?: InputMaybe<Scalars['String']>
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  shouldOpenInNewTab?: InputMaybe<Scalars['Boolean']>
  shouldOpenInNewTab_exists?: InputMaybe<Scalars['Boolean']>
  shouldOpenInNewTab_not?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
}

export type CfStyleTrickContentNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfStyleTrickContentNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfStyleTrickContentNestedFilter>>>
  author?: InputMaybe<Scalars['String']>
  author_contains?: InputMaybe<Scalars['String']>
  author_exists?: InputMaybe<Scalars['Boolean']>
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  author_not?: InputMaybe<Scalars['String']>
  author_not_contains?: InputMaybe<Scalars['String']>
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<SysFilter>
}

export type AboutBasicInformationFragment = {
  __typename: 'About'
  colorShadow?: string | null
  contentBottom?: string | null
  contentTop?: string | null
  heading?: string | null
  metaDescription?: string | null
  metaTitle?: string | null
  slug?: string | null
  title?: string | null
  image?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  metaImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  pressCollection?: {
    __typename?: 'AboutPressCollection'
    total: number
    items: Array<{
      __typename?: 'PressItem'
      quote?: string | null
      logo?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
    } | null>
  } | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'AboutBasicInformationFragment' }

export type AssociationBasicInformationFragment = {
  __typename?: 'Association'
  colorText?: string | null
  colorAccent?: string | null
  colorShadow?: string | null
  colorBackground?: string | null
  deck?: string | null
  heading?: string | null
  layout?: string | null
  shopifyProducts?: Array<string | null> | null
  lookImage?: {
    __typename?: 'Asset'
    description?: string | null
    height?: number | null
    title?: string | null
    url?: string | null
    width?: number | null
  } | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'AssociationBasicInformationFragment' }

export type EditBasicInformationFragment = {
  __typename?: 'Edit'
  category?: string | null
  deck?: string | null
  eyebrow?: string | null
  slug?: string | null
  title?: string | null
  categorisation?: {
    __typename?: 'Category'
    metaDescription?: string | null
    metaTitle?: string | null
    name?: string | null
    slug?: string | null
  } | null
  imageLandscape?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  imagePortrait?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
  videoLandscape?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  videoPortrait?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
} & { ' $fragmentName'?: 'EditBasicInformationFragment' }

export type EditCollectionBasicInformationFragment = {
  __typename?: 'EditCollection'
  total: number
  items: Array<
    | ({ __typename?: 'Edit' } & {
        ' $fragmentRefs'?: {
          EditBasicInformationFragment: EditBasicInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'EditCollectionBasicInformationFragment' }

export type EditCollectionDetailedInformationFragment = {
  __typename?: 'EditCollection'
  total: number
  items: Array<
    | ({ __typename?: 'Edit' } & {
        ' $fragmentRefs'?: {
          EditDetailedInformationFragment: EditDetailedInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'EditCollectionDetailedInformationFragment' }

export type EditContentBasicInformationFragment = {
  __typename: 'EditContent'
  colorBackground?: string | null
  colorText?: string | null
  content?: string | null
  eyebrow?: string | null
  signature?: string | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'EditContentBasicInformationFragment' }

export type EditDetailedInformationFragment = {
  __typename?: 'Edit'
  colorBackground?: string | null
  colorText?: string | null
  deck?: string | null
  eyebrow?: string | null
  metaDescription?: string | null
  metaTitle?: string | null
  slug?: string | null
  title?: string | null
  category?: {
    __typename?: 'Category'
    metaDescription?: string | null
    metaTitle?: string | null
    name?: string | null
    slug?: string | null
  } | null
  imageLandscape?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  imagePortrait?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  metaImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  modulesCollection?:
    | ({ __typename?: 'EditModulesCollection' } & {
        ' $fragmentRefs'?: {
          EditModulesCollectionBasicInformationFragment: EditModulesCollectionBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'EditDetailedInformationFragment' }

export type EditModulesCollectionBasicInformationFragment = {
  __typename?: 'EditModulesCollection'
  total: number
  items: Array<
    | ({ __typename: 'Association' } & {
        ' $fragmentRefs'?: {
          AssociationBasicInformationFragment: AssociationBasicInformationFragment
        }
      })
    | ({ __typename: 'EditContent' } & {
        ' $fragmentRefs'?: {
          EditContentBasicInformationFragment: EditContentBasicInformationFragment
        }
      })
    | ({ __typename: 'ImageVideo' } & {
        ' $fragmentRefs'?: {
          ImageVideoBasicInformationFragment: ImageVideoBasicInformationFragment
        }
      })
    | ({ __typename: 'Tiles' } & {
        ' $fragmentRefs'?: {
          TilesBasicInformationFragment: TilesBasicInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'EditModulesCollectionBasicInformationFragment' }

export type EditRelatedFeaturesCollectionBasicInformationFragment = {
  __typename?: 'EditRelatedFeaturesCollection'
  total: number
  items: Array<{
    __typename?: 'Edit'
    slug?: string | null
    title?: string | null
    category?: {
      __typename?: 'Category'
      name?: string | null
      slug?: string | null
    } | null
    contentfulMetadata: {
      __typename?: 'ContentfulMetadata'
      tags: Array<{ __typename?: 'ContentfulTag'; name?: string | null } | null>
    }
    imageLandscape?:
      | ({ __typename?: 'Asset' } & {
          ' $fragmentRefs'?: {
            ImageBasicInformationFragment: ImageBasicInformationFragment
          }
        })
      | null
  } | null>
} & {
  ' $fragmentName'?: 'EditRelatedFeaturesCollectionBasicInformationFragment'
}

export type HpModuleBasicInformationFragment = {
  __typename: 'HpModule'
  categoryName?: string | null
  colorAccent?: string | null
  colorBackground?: string | null
  colorShadow?: string | null
  colorSticker?: string | null
  colorText?: string | null
  cta?: string | null
  deck?: string | null
  heading?: string | null
  layout?: string | null
  url?: string | null
  association?:
    | ({ __typename?: 'Association' } & {
        ' $fragmentRefs'?: {
          AssociationBasicInformationFragment: AssociationBasicInformationFragment
        }
      })
    | null
  backgroundDesktop?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  backgroundMobile?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  image?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  imagesSupportingCollection?: {
    __typename?: 'AssetCollection'
    total: number
    items: Array<
      | ({ __typename?: 'Asset' } & {
          ' $fragmentRefs'?: {
            ImageBasicInformationFragment: ImageBasicInformationFragment
          }
        })
      | null
    >
  } | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'HpModuleBasicInformationFragment' }

export type ImageBasicInformationFragment = {
  __typename?: 'Asset'
  contentType?: string | null
  description?: string | null
  height?: number | null
  title?: string | null
  url?: string | null
  width?: number | null
} & { ' $fragmentName'?: 'ImageBasicInformationFragment' }

export type ImageVideoBasicInformationFragment = {
  __typename?: 'ImageVideo'
  autoplay?: boolean | null
  colorAccent?: string | null
  colorBackground?: string | null
  colorHeading?: string | null
  colorShadow?: string | null
  colorText?: string | null
  controls?: boolean | null
  deck?: string | null
  heading?: string | null
  url?: string | null
  cover?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  media?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'ImageVideoBasicInformationFragment' }

export type LinkCoreFragment = {
  __typename: 'Link'
  label?: string | null
  href?: string | null
  shouldOpenInNewTab?: boolean | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'LinkCoreFragment' }

export type NavigationDesktopMenuFragment = {
  __typename?: 'NavigationDesktopMenuCollection'
  total: number
  items: Array<{
    __typename: 'NavigationGroup'
    heading?: string | null
    subNavTemplate?: string | null
    sys: { __typename?: 'Sys' } & {
      ' $fragmentRefs'?: {
        SysBasicInformationFragment: SysBasicInformationFragment
      }
    }
    headingLink?:
      | ({ __typename?: 'Link' } & {
          ' $fragmentRefs'?: { LinkCoreFragment: LinkCoreFragment }
        })
      | null
    subNav?:
      | ({ __typename?: 'NavigationGroupSubNavCollection' } & {
          ' $fragmentRefs'?: {
            NavigationGroupSubNavFragment: NavigationGroupSubNavFragment
          }
        })
      | null
    promoTiles?:
      | ({ __typename?: 'NavigationGroupPromoTilesCollection' } & {
          ' $fragmentRefs'?: {
            NavigationGroupPromoTilesFragment: NavigationGroupPromoTilesFragment
          }
        })
      | null
  } | null>
} & { ' $fragmentName'?: 'NavigationDesktopMenuFragment' }

export type NavigationGroupPromoTilesFragment = {
  __typename?: 'NavigationGroupPromoTilesCollection'
  total: number
  items: Array<{
    __typename: 'PromoTiles'
    sys: { __typename?: 'Sys' } & {
      ' $fragmentRefs'?: {
        SysBasicInformationFragment: SysBasicInformationFragment
      }
    }
    linkedEntry?:
      | { __typename: 'Brand' }
      | { __typename: 'Edit' }
      | {
          __typename: 'Story'
          title?: string | null
          slug?: string | null
          category?: { __typename?: 'Category'; slug?: string | null } | null
          imagePortrait?: { __typename?: 'Asset'; url?: string | null } | null
        }
      | null
  } | null>
} & { ' $fragmentName'?: 'NavigationGroupPromoTilesFragment' }

export type NavigationGroupSubNavFragment = {
  __typename?: 'NavigationGroupSubNavCollection'
  total: number
  items: Array<{
    __typename: 'NavigationSection'
    heading?: string | null
    sys: { __typename?: 'Sys' } & {
      ' $fragmentRefs'?: {
        SysBasicInformationFragment: SysBasicInformationFragment
      }
    }
    headingLink?:
      | ({ __typename?: 'Link' } & {
          ' $fragmentRefs'?: { LinkCoreFragment: LinkCoreFragment }
        })
      | null
    items?:
      | ({ __typename?: 'NavigationSectionItemsCollection' } & {
          ' $fragmentRefs'?: {
            NavigationSectionItemsFragment: NavigationSectionItemsFragment
          }
        })
      | null
  } | null>
} & { ' $fragmentName'?: 'NavigationGroupSubNavFragment' }

export type NavigationSectionItemsFragment = {
  __typename?: 'NavigationSectionItemsCollection'
  total: number
  items: Array<
    | ({ __typename?: 'Link' } & {
        ' $fragmentRefs'?: { LinkCoreFragment: LinkCoreFragment }
      })
    | null
  >
} & { ' $fragmentName'?: 'NavigationSectionItemsFragment' }

export type PageBasicInformationFragment = {
  __typename: 'Page'
  content?: string | null
  metaDescription?: string | null
  metaTitle?: string | null
  shopifyProducts?: Array<string | null> | null
  slug?: string | null
  title?: string | null
  type?: string | null
  metaImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'PageBasicInformationFragment' }

export type PageModulesCollectionFragment = {
  __typename?: 'PageModulesCollection'
  total: number
  items: Array<
    | { __typename?: 'EditContent' }
    | ({
        __typename?: 'HpModule'
        secondTile?:
          | ({ __typename?: 'HpModule' } & {
              ' $fragmentRefs'?: {
                HpModuleBasicInformationFragment: HpModuleBasicInformationFragment
              }
            })
          | null
      } & {
        ' $fragmentRefs'?: {
          HpModuleBasicInformationFragment: HpModuleBasicInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'PageModulesCollectionFragment' }

export type StoryBasicInformationFragment = {
  __typename?: 'Story'
  deck?: string | null
  slug?: string | null
  title?: string | null
  category?: {
    __typename?: 'Category'
    metaDescription?: string | null
    metaTitle?: string | null
    name?: string | null
    slug?: string | null
  } | null
  imageLandscape?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  imagePortrait?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'StoryBasicInformationFragment' }

export type StoryCollectionBasicInformationFragment = {
  __typename?: 'StoryCollection'
  total: number
  items: Array<
    | ({ __typename?: 'Story' } & {
        ' $fragmentRefs'?: {
          StoryBasicInformationFragment: StoryBasicInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'StoryCollectionBasicInformationFragment' }

export type StoryCollectionDetailedInformationFragment = {
  __typename?: 'StoryCollection'
  total: number
  items: Array<
    | ({ __typename?: 'Story' } & {
        ' $fragmentRefs'?: {
          StoryDetailedInformationFragment: StoryDetailedInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'StoryCollectionDetailedInformationFragment' }

export type StoryContentBasicInformationFragment = {
  __typename: 'StoryContent'
  content?: string | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'StoryContentBasicInformationFragment' }

export type StoryDetailedInformationFragment = {
  __typename?: 'Story'
  deck?: string | null
  metaDescription?: string | null
  metaTitle?: string | null
  slug?: string | null
  title?: string | null
  category?: {
    __typename?: 'Category'
    metaDescription?: string | null
    metaTitle?: string | null
    name?: string | null
    slug?: string | null
  } | null
  imageLandscape?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  imagePortrait?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  metaImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  modulesCollection?:
    | ({ __typename?: 'StoryModulesCollection' } & {
        ' $fragmentRefs'?: {
          StoryModulesCollectionBasicInformationFragment: StoryModulesCollectionBasicInformationFragment
        }
      })
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'StoryDetailedInformationFragment' }

export type StoryModulesCollectionBasicInformationFragment = {
  __typename?: 'StoryModulesCollection'
  total: number
  items: Array<
    | ({ __typename: 'Association' } & {
        ' $fragmentRefs'?: {
          AssociationBasicInformationFragment: AssociationBasicInformationFragment
        }
      })
    | ({ __typename: 'ImageVideo' } & {
        ' $fragmentRefs'?: {
          ImageVideoBasicInformationFragment: ImageVideoBasicInformationFragment
        }
      })
    | ({ __typename: 'StoryContent' } & {
        ' $fragmentRefs'?: {
          StoryContentBasicInformationFragment: StoryContentBasicInformationFragment
        }
      })
    | ({ __typename: 'Tiles' } & {
        ' $fragmentRefs'?: {
          TilesBasicInformationFragment: TilesBasicInformationFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'StoryModulesCollectionBasicInformationFragment' }

export type SysBasicInformationFragment = {
  __typename?: 'Sys'
  firstPublishedAt?: any | null
  id: string
  publishedAt?: any | null
} & { ' $fragmentName'?: 'SysBasicInformationFragment' }

export type TilesBasicInformationFragment = {
  __typename?: 'Tiles'
  colorAccent?: string | null
  colorBackground?: string | null
  colorHeading?: string | null
  colorShadow?: string | null
  colorText?: string | null
  deck?: string | null
  heading?: string | null
  layout?: string | null
  leftTileCaption?: string | null
  leftTileShopifyProduct?: string | null
  rightTileCaption?: string | null
  rightTileShopifyProduct?: string | null
  leftTileImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  leftTileObject?:
    | ({ __typename?: 'Association' } & {
        ' $fragmentRefs'?: {
          AssociationBasicInformationFragment: AssociationBasicInformationFragment
        }
      })
    | { __typename?: 'Product' }
    | null
  rightTileImage?:
    | ({ __typename?: 'Asset' } & {
        ' $fragmentRefs'?: {
          ImageBasicInformationFragment: ImageBasicInformationFragment
        }
      })
    | null
  rightTileObject?:
    | ({ __typename?: 'Association' } & {
        ' $fragmentRefs'?: {
          AssociationBasicInformationFragment: AssociationBasicInformationFragment
        }
      })
    | { __typename?: 'Product' }
    | null
  sys: { __typename?: 'Sys' } & {
    ' $fragmentRefs'?: {
      SysBasicInformationFragment: SysBasicInformationFragment
    }
  }
} & { ' $fragmentName'?: 'TilesBasicInformationFragment' }

export type AboutByIdQueryVariables = Exact<{
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type AboutByIdQuery = {
  __typename?: 'Query'
  about?:
    | ({ __typename?: 'About' } & {
        ' $fragmentRefs'?: {
          AboutBasicInformationFragment: AboutBasicInformationFragment
        }
      })
    | null
}

export type AboutCollectionQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type AboutCollectionQuery = {
  __typename?: 'Query'
  aboutCollection?: {
    __typename?: 'AboutCollection'
    items: Array<{
      __typename?: 'About'
      metaDescription?: string | null
      metaTitle?: string | null
      slug?: string | null
      title?: string | null
      contentfulMetadata: {
        __typename?: 'ContentfulMetadata'
        tags: Array<{
          __typename?: 'ContentfulTag'
          name?: string | null
        } | null>
      }
      metaImage?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      sys: { __typename?: 'Sys'; publishedAt?: any | null; id: string }
    } | null>
  } | null
}

export type AboutCollectionBySlugQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
}>

export type AboutCollectionBySlugQuery = {
  __typename?: 'Query'
  aboutCollection?: {
    __typename?: 'AboutCollection'
    items: Array<
      | ({ __typename?: 'About' } & {
          ' $fragmentRefs'?: {
            AboutBasicInformationFragment: AboutBasicInformationFragment
          }
        })
      | null
    >
  } | null
}

export type AboutCollectionPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type AboutCollectionPathsQuery = {
  __typename?: 'Query'
  aboutCollection?: {
    __typename?: 'AboutCollection'
    items: Array<{ __typename?: 'About'; slug?: string | null } | null>
  } | null
}

export type BrandCollectionQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type BrandCollectionQuery = {
  __typename?: 'Query'
  brandCollection?: {
    __typename?: 'BrandCollection'
    items: Array<{
      __typename?: 'Brand'
      accentColour?: string | null
      borderColour?: string | null
      description?: string | null
      name?: string | null
      image?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
    } | null>
  } | null
}

export type EditBySlugQueryVariables = Exact<{
  categorySlug: Scalars['String']
  editSlug: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type EditBySlugQuery = {
  __typename?: 'Query'
  current?: {
    __typename?: 'EditCollection'
    items: Array<{
      __typename?: 'Edit'
      category?: string | null
      colorAccent?: string | null
      colorBackground?: string | null
      credits?: string | null
      date?: any | null
      deck?: string | null
      eyebrow?: string | null
      metaDescription?: string | null
      metaTitle?: string | null
      slug?: string | null
      title?: string | null
      categorisation?: {
        __typename?: 'Category'
        name?: string | null
        slug?: string | null
      } | null
      imageLandscape?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      imagePortrait?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      metaImage?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      modulesCollection?:
        | ({ __typename?: 'EditModulesCollection' } & {
            ' $fragmentRefs'?: {
              EditModulesCollectionBasicInformationFragment: EditModulesCollectionBasicInformationFragment
            }
          })
        | null
      sys: { __typename?: 'Sys' } & {
        ' $fragmentRefs'?: {
          SysBasicInformationFragment: SysBasicInformationFragment
        }
      }
      videoLandscape?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      videoPortrait?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
    } | null>
  } | null
  related?:
    | ({ __typename?: 'EditCollection' } & {
        ' $fragmentRefs'?: {
          EditCollectionBasicInformationFragment: EditCollectionBasicInformationFragment
        }
      })
    | null
}

export type EditCategoryCollectionByTypeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  type: Scalars['String']
}>

export type EditCategoryCollectionByTypeQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      name?: string | null
      slug?: string | null
      linkedFrom?: {
        __typename?: 'CategoryLinkingCollections'
        editCollection?: { __typename?: 'EditCollection'; total: number } | null
      } | null
    } | null>
  } | null
}

export type EditCollectionByCategoryQueryVariables = Exact<{
  categoryCollectionWhere?: InputMaybe<CategoryFilter>
  categoryLimit?: InputMaybe<Scalars['Int']>
  categoryEditCollectionWhere?: InputMaybe<EditFilter>
  categoryEditLimit?: InputMaybe<Scalars['Int']>
  currentEditCollectionWhere?: InputMaybe<EditFilter>
  currentEditCollectionLimit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  categoryEditSkip?: InputMaybe<Scalars['Int']>
}>

export type EditCollectionByCategoryQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      metaDescription?: string | null
      metaTitle?: string | null
      name?: string | null
      sys: {
        __typename?: 'Sys'
        firstPublishedAt?: any | null
        id: string
        publishedAt?: any | null
      }
    } | null>
  } | null
  categoryEditCollection?:
    | ({ __typename?: 'EditCollection' } & {
        ' $fragmentRefs'?: {
          EditCollectionBasicInformationFragment: EditCollectionBasicInformationFragment
        }
      })
    | null
  currentEditCollection?:
    | ({ __typename?: 'EditCollection' } & {
        ' $fragmentRefs'?: {
          EditCollectionDetailedInformationFragment: EditCollectionDetailedInformationFragment
        }
      })
    | null
}

export type EditCollectionCountByCategoryQueryVariables = Exact<{
  categorySlug: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type EditCollectionCountByCategoryQuery = {
  __typename?: 'Query'
  editCollection?: { __typename?: 'EditCollection'; total: number } | null
}

export type EditCollectionPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type EditCollectionPathsQuery = {
  __typename?: 'Query'
  editCollection?: {
    __typename?: 'EditCollection'
    items: Array<{
      __typename?: 'Edit'
      category?: string | null
      slug?: string | null
      categorisation?: { __typename?: 'Category'; slug?: string | null } | null
    } | null>
  } | null
}

export type HomepageByIdQueryVariables = Exact<{
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type HomepageByIdQuery = {
  __typename?: 'Query'
  page?:
    | ({
        __typename?: 'Page'
        modulesCollection?:
          | ({ __typename?: 'PageModulesCollection'; total: number } & {
              ' $fragmentRefs'?: {
                PageModulesCollectionFragment: PageModulesCollectionFragment
              }
            })
          | null
      } & {
        ' $fragmentRefs'?: {
          PageBasicInformationFragment: PageBasicInformationFragment
        }
      })
    | null
}

export type HomepageCollectionByTypeQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
}>

export type HomepageCollectionByTypeQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<
      | ({
          __typename?: 'Page'
          modulesCollection?: {
            __typename?: 'PageModulesCollection'
            total: number
            items: Array<
              | { __typename?: 'EditContent' }
              | ({ __typename?: 'HpModule' } & {
                  ' $fragmentRefs'?: {
                    HpModuleBasicInformationFragment: HpModuleBasicInformationFragment
                  }
                })
              | null
            >
          } | null
        } & {
          ' $fragmentRefs'?: {
            PageBasicInformationFragment: PageBasicInformationFragment
          }
        })
      | null
    >
  } | null
}

export type NavigationQueryVariables = Exact<{
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type NavigationQuery = {
  __typename?: 'Query'
  navigation?: {
    __typename?: 'Navigation'
    desktopMenu?:
      | ({ __typename?: 'NavigationDesktopMenuCollection' } & {
          ' $fragmentRefs'?: {
            NavigationDesktopMenuFragment: NavigationDesktopMenuFragment
          }
        })
      | null
  } | null
}

export type PageByIdQueryVariables = Exact<{
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type PageByIdQuery = {
  __typename?: 'Query'
  page?:
    | ({ __typename?: 'Page' } & {
        ' $fragmentRefs'?: {
          PageBasicInformationFragment: PageBasicInformationFragment
        }
      })
    | null
}

export type PageCollectionQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type PageCollectionQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<{
      __typename?: 'Page'
      metaDescription?: string | null
      metaTitle?: string | null
      slug?: string | null
      title?: string | null
      type?: string | null
      contentfulMetadata: {
        __typename?: 'ContentfulMetadata'
        tags: Array<{
          __typename?: 'ContentfulTag'
          name?: string | null
        } | null>
      }
      metaImage?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      sys: { __typename?: 'Sys'; publishedAt?: any | null; id: string }
    } | null>
  } | null
}

export type PageCollectionBySlugQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
}>

export type PageCollectionBySlugQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<
      | ({ __typename?: 'Page' } & {
          ' $fragmentRefs'?: {
            PageBasicInformationFragment: PageBasicInformationFragment
          }
        })
      | null
    >
  } | null
}

export type PageCollectionByTypeQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
}>

export type PageCollectionByTypeQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<{
      __typename?: 'Page'
      slug?: string | null
      title?: string | null
      type?: string | null
    } | null>
  } | null
}

export type PageCollectionPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type PageCollectionPathsQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<{ __typename?: 'Page'; slug?: string | null } | null>
  } | null
}

export type StoryBySlugQueryVariables = Exact<{
  categorySlug: Scalars['String']
  storySlug: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type StoryBySlugQuery = {
  __typename?: 'Query'
  current?: {
    __typename?: 'StoryCollection'
    items: Array<{
      __typename?: 'Story'
      colorAccent?: string | null
      colorBackground?: string | null
      credits?: string | null
      date?: any | null
      deck?: string | null
      metaDescription?: string | null
      metaTitle?: string | null
      slug?: string | null
      title?: string | null
      category?: {
        __typename?: 'Category'
        name?: string | null
        slug?: string | null
      } | null
      imageLandscape?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      imagePortrait?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      metaImage?:
        | ({ __typename?: 'Asset' } & {
            ' $fragmentRefs'?: {
              ImageBasicInformationFragment: ImageBasicInformationFragment
            }
          })
        | null
      modulesCollection?:
        | ({ __typename?: 'StoryModulesCollection' } & {
            ' $fragmentRefs'?: {
              StoryModulesCollectionBasicInformationFragment: StoryModulesCollectionBasicInformationFragment
            }
          })
        | null
      sys: { __typename?: 'Sys' } & {
        ' $fragmentRefs'?: {
          SysBasicInformationFragment: SysBasicInformationFragment
        }
      }
    } | null>
  } | null
  related?:
    | ({ __typename?: 'StoryCollection' } & {
        ' $fragmentRefs'?: {
          StoryCollectionBasicInformationFragment: StoryCollectionBasicInformationFragment
        }
      })
    | null
}

export type StoryCategoryCollectionByTypeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  type: Scalars['String']
}>

export type StoryCategoryCollectionByTypeQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      name?: string | null
      slug?: string | null
      linkedFrom?: {
        __typename?: 'CategoryLinkingCollections'
        storyCollection?: {
          __typename?: 'StoryCollection'
          total: number
        } | null
      } | null
    } | null>
  } | null
}

export type StoryCollectionByCategoryQueryVariables = Exact<{
  categoryCollectionWhere?: InputMaybe<CategoryFilter>
  categoryLimit?: InputMaybe<Scalars['Int']>
  categoryStoryCollectionWhere?: InputMaybe<StoryFilter>
  categoryStoryLimit?: InputMaybe<Scalars['Int']>
  currentStoryCollectionWhere?: InputMaybe<StoryFilter>
  currentStoryCollectionLimit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  categoryStorySkip?: InputMaybe<Scalars['Int']>
}>

export type StoryCollectionByCategoryQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      metaDescription?: string | null
      metaTitle?: string | null
      name?: string | null
      sys: {
        __typename?: 'Sys'
        firstPublishedAt?: any | null
        id: string
        publishedAt?: any | null
      }
    } | null>
  } | null
  categoryStoryCollection?:
    | ({ __typename?: 'StoryCollection' } & {
        ' $fragmentRefs'?: {
          StoryCollectionBasicInformationFragment: StoryCollectionBasicInformationFragment
        }
      })
    | null
  currentStoryCollection?:
    | ({ __typename?: 'StoryCollection' } & {
        ' $fragmentRefs'?: {
          StoryCollectionDetailedInformationFragment: StoryCollectionDetailedInformationFragment
        }
      })
    | null
}

export type StoryCollectionCountByCategoryQueryVariables = Exact<{
  categorySlug: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type StoryCollectionCountByCategoryQuery = {
  __typename?: 'Query'
  storyCollection?: { __typename?: 'StoryCollection'; total: number } | null
}

export type StoryCollectionPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}>

export type StoryCollectionPathsQuery = {
  __typename?: 'Query'
  storyCollection?: {
    __typename?: 'StoryCollection'
    items: Array<{
      __typename?: 'Story'
      slug?: string | null
      category?: { __typename?: 'Category'; slug?: string | null } | null
    } | null>
  } | null
}

export const ImageBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'contentType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageBasicInformationFragment, unknown>
export const SysBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SysBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Sys' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SysBasicInformationFragment, unknown>
export const AboutBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AboutBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'About' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorShadow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contentBottom' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contentTop' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pressCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'quote' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AboutBasicInformationFragment, unknown>
export const EditBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Edit' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'category' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categorisation' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metaDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imageLandscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imagePortrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'videoLandscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'videoPortrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditBasicInformationFragment, unknown>
export const EditCollectionBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditCollectionBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EditBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditCollectionBasicInformationFragment, unknown>
export const AssociationBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssociationBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Association' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorAccent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorShadow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'lookImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'shopifyProducts' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssociationBasicInformationFragment, unknown>
export const EditContentBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditContentBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditContent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'signature' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditContentBasicInformationFragment, unknown>
export const ImageVideoBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageVideoBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageVideo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'autoplay' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorAccent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorHeading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorShadow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'controls' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageVideoBasicInformationFragment, unknown>
export const TilesBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TilesBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tiles' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'colorAccent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorHeading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorShadow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'leftTileCaption' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftTileImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftTileObject' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssociationBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftTileShopifyProduct' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'rightTileCaption' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightTileImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightTileObject' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssociationBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightTileShopifyProduct' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TilesBasicInformationFragment, unknown>
export const EditModulesCollectionBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditModulesCollectionBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditModulesCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssociationBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EditContentBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageVideoBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TilesBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditModulesCollectionBasicInformationFragment,
  unknown
>
export const EditDetailedInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditDetailedInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Edit' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'category' },
            name: { kind: 'Name', value: 'categorisation' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metaDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imageLandscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imagePortrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'modulesCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'EditModulesCollectionBasicInformation',
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditDetailedInformationFragment, unknown>
export const EditCollectionDetailedInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditCollectionDetailedInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EditDetailedInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditCollectionDetailedInformationFragment, unknown>
export const EditRelatedFeaturesCollectionBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'EditRelatedFeaturesCollectionBasicInformation',
      },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditRelatedFeaturesCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'category' },
                  name: { kind: 'Name', value: 'categorisation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentfulMetadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'imageLandscape' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageBasicInformation' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditRelatedFeaturesCollectionBasicInformationFragment,
  unknown
>
export const LinkCoreFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LinkCore' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Link' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'href' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shouldOpenInNewTab' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkCoreFragment, unknown>
export const NavigationSectionItemsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationSectionItems' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationSectionItemsCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'LinkCore' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationSectionItemsFragment, unknown>
export const NavigationGroupSubNavFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationGroupSubNav' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationGroupSubNavCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sys' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SysBasicInformation' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'headingLink' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'LinkCore' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'items' },
                  name: { kind: 'Name', value: 'itemsCollection' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '10' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'NavigationSectionItems' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationGroupSubNavFragment, unknown>
export const NavigationGroupPromoTilesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationGroupPromoTiles' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationGroupPromoTilesCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sys' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SysBasicInformation' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linkedEntry' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Story' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'imagePortrait' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationGroupPromoTilesFragment, unknown>
export const NavigationDesktopMenuFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationDesktopMenu' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationDesktopMenuCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sys' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SysBasicInformation' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'headingLink' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'LinkCore' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subNavTemplate' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'subNav' },
                  name: { kind: 'Name', value: 'subNavCollection' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '7' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'NavigationGroupSubNav' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'promoTiles' },
                  name: { kind: 'Name', value: 'promoTilesCollection' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '3' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NavigationGroupPromoTiles',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationDesktopMenuFragment, unknown>
export const PageBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shopifyProducts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageBasicInformationFragment, unknown>
export const HpModuleBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HpModuleBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HpModule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'association' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssociationBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'backgroundDesktop' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'backgroundMobile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorAccent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorBackground' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorShadow' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorSticker' } },
          { kind: 'Field', name: { kind: 'Name', value: 'colorText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cta' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imagesSupportingCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageBasicInformation' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HpModuleBasicInformationFragment, unknown>
export const PageModulesCollectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageModulesCollection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageModulesCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'HpModuleBasicInformation' },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HpModule' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'secondTile' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'HpModuleBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageModulesCollectionFragment, unknown>
export const StoryBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Story' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'category' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metaDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imageLandscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imagePortrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StoryBasicInformationFragment, unknown>
export const StoryCollectionBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryCollectionBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StoryCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'StoryBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StoryCollectionBasicInformationFragment, unknown>
export const StoryContentBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryContentBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StoryContent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StoryContentBasicInformationFragment, unknown>
export const StoryModulesCollectionBasicInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryModulesCollectionBasicInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StoryModulesCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssociationBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageVideoBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'StoryContentBasicInformation' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TilesBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StoryModulesCollectionBasicInformationFragment,
  unknown
>
export const StoryDetailedInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryDetailedInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Story' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'category' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metaDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imageLandscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'imagePortrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'modulesCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'StoryModulesCollectionBasicInformation',
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sys' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SysBasicInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StoryDetailedInformationFragment, unknown>
export const StoryCollectionDetailedInformationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StoryCollectionDetailedInformation' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StoryCollection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'StoryDetailedInformation' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StoryCollectionDetailedInformationFragment,
  unknown
>
export const AboutByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AboutById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'about' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AboutBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AboutBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AboutByIdQuery, AboutByIdQueryVariables>
export const AboutCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AboutCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'aboutCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'About' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'contentfulMetadata',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tags' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageBasicInformation',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sys' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'publishedAt',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  AboutCollectionQuery,
  AboutCollectionQueryVariables
>
export const AboutCollectionBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AboutCollectionBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'aboutCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AboutBasicInformation' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...AboutBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  AboutCollectionBySlugQuery,
  AboutCollectionBySlugQueryVariables
>
export const AboutCollectionPathsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AboutCollectionPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'aboutCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'About' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AboutCollectionPathsQuery,
  AboutCollectionPathsQueryVariables
>
export const BrandCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BrandCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'brandCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Brand' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'accentColour' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'borderColour' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageBasicInformation',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  BrandCollectionQuery,
  BrandCollectionQueryVariables
>
export const EditBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EditBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categorySlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'editSlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'current' },
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'editSlug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'categorisation' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colorAccent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colorBackground' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'credits' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'eyebrow' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageLandscape' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imagePortrait' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaTitle' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'modulesCollection' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'EditModulesCollectionBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'SysBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'videoLandscape' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'videoPortrait' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'related' },
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '3' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'categorySlug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'EditCollectionBasicInformation',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageBasicInformationFragmentDoc.definitions,
    ...EditModulesCollectionBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...EditContentBasicInformationFragmentDoc.definitions,
    ...ImageVideoBasicInformationFragmentDoc.definitions,
    ...TilesBasicInformationFragmentDoc.definitions,
    ...EditCollectionBasicInformationFragmentDoc.definitions,
    ...EditBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EditBySlugQuery, EditBySlugQueryVariables>
export const EditCategoryCollectionByTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EditCategoryCollectionByType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categoryCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'type' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'linkedFrom' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'editCollection' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditCategoryCollectionByTypeQuery,
  EditCategoryCollectionByTypeQueryVariables
>
export const EditCollectionByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EditCollectionByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CategoryFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryEditCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EditFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryEditLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '3' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentEditCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EditFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentEditCollectionLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryEditSkip' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categoryCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaTitle' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'firstPublishedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'publishedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'categoryEditCollection' },
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryEditLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: {
                  kind: 'ListValue',
                  values: [
                    { kind: 'EnumValue', value: 'date_DESC' },
                    { kind: 'EnumValue', value: 'sys_publishedAt_DESC' },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryEditSkip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryEditCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'EditCollectionBasicInformation',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'currentEditCollection' },
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentEditCollectionLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentEditCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'EditCollectionDetailedInformation',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...EditCollectionBasicInformationFragmentDoc.definitions,
    ...EditBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...EditCollectionDetailedInformationFragmentDoc.definitions,
    ...EditDetailedInformationFragmentDoc.definitions,
    ...EditModulesCollectionBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
    ...EditContentBasicInformationFragmentDoc.definitions,
    ...ImageVideoBasicInformationFragmentDoc.definitions,
    ...TilesBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  EditCollectionByCategoryQuery,
  EditCollectionByCategoryQueryVariables
>
export const EditCollectionCountByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EditCollectionCountByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categorySlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'OR' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'category' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'categorySlug' },
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'categorisation' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'slug' },
                                      value: {
                                        kind: 'Variable',
                                        name: {
                                          kind: 'Name',
                                          value: 'categorySlug',
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditCollectionCountByCategoryQuery,
  EditCollectionCountByCategoryQueryVariables
>
export const EditCollectionPathsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EditCollectionPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Edit' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'categorisation' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditCollectionPathsQuery,
  EditCollectionPathsQueryVariables
>
export const HomepageByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HomepageById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageBasicInformation' },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'Page' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'modulesCollection' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '12' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PageModulesCollection',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...PageModulesCollectionFragmentDoc.definitions,
    ...HpModuleBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<HomepageByIdQuery, HomepageByIdQueryVariables>
export const HomepageCollectionByTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HomepageCollectionByType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: {
            kind: 'StringValue',
            value: 'homepage',
            block: false,
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'type' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PageBasicInformation' },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Page' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'modulesCollection',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'HpModuleBasicInformation',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...HpModuleBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  HomepageCollectionByTypeQuery,
  HomepageCollectionByTypeQueryVariables
>
export const NavigationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Navigation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'navigation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'desktopMenu' },
                  name: { kind: 'Name', value: 'desktopMenuCollection' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '10' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'NavigationDesktopMenu' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...NavigationDesktopMenuFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...LinkCoreFragmentDoc.definitions,
    ...NavigationGroupSubNavFragmentDoc.definitions,
    ...NavigationSectionItemsFragmentDoc.definitions,
    ...NavigationGroupPromoTilesFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<NavigationQuery, NavigationQueryVariables>
export const PageByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageBasicInformation' },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageByIdQuery, PageByIdQueryVariables>
export const PageCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Page' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'contentfulMetadata',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tags' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metaImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageBasicInformation',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sys' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'publishedAt',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageCollectionQuery, PageCollectionQueryVariables>
export const PageCollectionBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageCollectionBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PageBasicInformation' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  PageCollectionBySlugQuery,
  PageCollectionBySlugQueryVariables
>
export const PageCollectionByTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageCollectionByType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: {
            kind: 'StringValue',
            value: 'homepage',
            block: false,
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'type' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Page' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PageCollectionByTypeQuery,
  PageCollectionByTypeQueryVariables
>
export const PageCollectionPathsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageCollectionPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Page' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PageCollectionPathsQuery,
  PageCollectionPathsQueryVariables
>
export const StoryBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StoryBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categorySlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'storySlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'current' },
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'storySlug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colorAccent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colorBackground' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'credits' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deck' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageLandscape' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imagePortrait' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ImageBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaTitle' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'modulesCollection' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'StoryModulesCollectionBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'SysBasicInformation',
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'related' },
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '3' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'categorySlug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'StoryCollectionBasicInformation',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageBasicInformationFragmentDoc.definitions,
    ...StoryModulesCollectionBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...ImageVideoBasicInformationFragmentDoc.definitions,
    ...StoryContentBasicInformationFragmentDoc.definitions,
    ...TilesBasicInformationFragmentDoc.definitions,
    ...StoryCollectionBasicInformationFragmentDoc.definitions,
    ...StoryBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<StoryBySlugQuery, StoryBySlugQueryVariables>
export const StoryCategoryCollectionByTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StoryCategoryCollectionByType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categoryCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'type' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'linkedFrom' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'storyCollection' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StoryCategoryCollectionByTypeQuery,
  StoryCategoryCollectionByTypeQueryVariables
>
export const StoryCollectionByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StoryCollectionByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CategoryFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryStoryCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'StoryFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryStoryLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '3' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentStoryCollectionWhere' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'StoryFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currentStoryCollectionLimit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categoryStorySkip' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categoryCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'metaTitle' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'firstPublishedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'publishedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'categoryStoryCollection' },
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryStoryLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: {
                  kind: 'ListValue',
                  values: [
                    { kind: 'EnumValue', value: 'date_DESC' },
                    { kind: 'EnumValue', value: 'sys_publishedAt_DESC' },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryStorySkip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'categoryStoryCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'StoryCollectionBasicInformation',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'currentStoryCollection' },
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentStoryCollectionLimit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currentStoryCollectionWhere' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'StoryCollectionDetailedInformation',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...StoryCollectionBasicInformationFragmentDoc.definitions,
    ...StoryBasicInformationFragmentDoc.definitions,
    ...ImageBasicInformationFragmentDoc.definitions,
    ...SysBasicInformationFragmentDoc.definitions,
    ...StoryCollectionDetailedInformationFragmentDoc.definitions,
    ...StoryDetailedInformationFragmentDoc.definitions,
    ...StoryModulesCollectionBasicInformationFragmentDoc.definitions,
    ...AssociationBasicInformationFragmentDoc.definitions,
    ...ImageVideoBasicInformationFragmentDoc.definitions,
    ...StoryContentBasicInformationFragmentDoc.definitions,
    ...TilesBasicInformationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  StoryCollectionByCategoryQuery,
  StoryCollectionByCategoryQueryVariables
>
export const StoryCollectionCountByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StoryCollectionCountByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'categorySlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'categorySlug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StoryCollectionCountByCategoryQuery,
  StoryCollectionCountByCategoryQueryVariables
>
export const StoryCollectionPathsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StoryCollectionPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '250' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'preview' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'storyCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'preview' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'preview' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Story' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'category' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StoryCollectionPathsQuery,
  StoryCollectionPathsQueryVariables
>
