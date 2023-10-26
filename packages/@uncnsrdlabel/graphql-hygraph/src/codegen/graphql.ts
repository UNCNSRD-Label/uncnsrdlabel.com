/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  blogPostCoverImage: Array<BlogPost>;
  companyLogo: Array<Company>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  featureImage: Array<Feature>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  heroImage: Array<Hero>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  personPhoto: Array<Person>;
  popUpImage: Array<PopUp>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seoImage: Array<Seo>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetBlogPostCoverImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


/** Asset system model */
export type AssetCompanyLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetFeatureImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureWhereInput>;
};


/** Asset system model */
export type AssetHeroImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPersonPhotoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};


/** Asset system model */
export type AssetPopUpImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PopUpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PopUpWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetSeoImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  blogPostCoverImage?: InputMaybe<BlogPostCreateManyInlineInput>;
  companyLogo?: InputMaybe<CompanyCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  featureImage?: InputMaybe<FeatureCreateManyInlineInput>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  heroImage?: InputMaybe<HeroCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  personPhoto?: InputMaybe<PersonCreateManyInlineInput>;
  popUpImage?: InputMaybe<PopUpCreateManyInlineInput>;
  seoImage?: InputMaybe<SeoCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPostCoverImage_every?: InputMaybe<BlogPostWhereInput>;
  blogPostCoverImage_none?: InputMaybe<BlogPostWhereInput>;
  blogPostCoverImage_some?: InputMaybe<BlogPostWhereInput>;
  companyLogo_every?: InputMaybe<CompanyWhereInput>;
  companyLogo_none?: InputMaybe<CompanyWhereInput>;
  companyLogo_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  featureImage_every?: InputMaybe<FeatureWhereInput>;
  featureImage_none?: InputMaybe<FeatureWhereInput>;
  featureImage_some?: InputMaybe<FeatureWhereInput>;
  heroImage_every?: InputMaybe<HeroWhereInput>;
  heroImage_none?: InputMaybe<HeroWhereInput>;
  heroImage_some?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  personPhoto_every?: InputMaybe<PersonWhereInput>;
  personPhoto_none?: InputMaybe<PersonWhereInput>;
  personPhoto_some?: InputMaybe<PersonWhereInput>;
  popUpImage_every?: InputMaybe<PopUpWhereInput>;
  popUpImage_none?: InputMaybe<PopUpWhereInput>;
  popUpImage_some?: InputMaybe<PopUpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoImage_every?: InputMaybe<SeoWhereInput>;
  seoImage_none?: InputMaybe<SeoWhereInput>;
  seoImage_some?: InputMaybe<SeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  blogPostCoverImage?: InputMaybe<BlogPostUpdateManyInlineInput>;
  companyLogo?: InputMaybe<CompanyUpdateManyInlineInput>;
  featureImage?: InputMaybe<FeatureUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  heroImage?: InputMaybe<HeroUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  personPhoto?: InputMaybe<PersonUpdateManyInlineInput>;
  popUpImage?: InputMaybe<PopUpUpdateManyInlineInput>;
  seoImage?: InputMaybe<SeoUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPostCoverImage_every?: InputMaybe<BlogPostWhereInput>;
  blogPostCoverImage_none?: InputMaybe<BlogPostWhereInput>;
  blogPostCoverImage_some?: InputMaybe<BlogPostWhereInput>;
  companyLogo_every?: InputMaybe<CompanyWhereInput>;
  companyLogo_none?: InputMaybe<CompanyWhereInput>;
  companyLogo_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  featureImage_every?: InputMaybe<FeatureWhereInput>;
  featureImage_none?: InputMaybe<FeatureWhereInput>;
  featureImage_some?: InputMaybe<FeatureWhereInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  heroImage_every?: InputMaybe<HeroWhereInput>;
  heroImage_none?: InputMaybe<HeroWhereInput>;
  heroImage_some?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  personPhoto_every?: InputMaybe<PersonWhereInput>;
  personPhoto_none?: InputMaybe<PersonWhereInput>;
  personPhoto_some?: InputMaybe<PersonWhereInput>;
  popUpImage_every?: InputMaybe<PopUpWhereInput>;
  popUpImage_none?: InputMaybe<PopUpWhereInput>;
  popUpImage_some?: InputMaybe<PopUpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoImage_every?: InputMaybe<SeoWhereInput>;
  seoImage_none?: InputMaybe<SeoWhereInput>;
  seoImage_some?: InputMaybe<SeoWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Banner = Node & {
  __typename?: 'Banner';
  blogPosts: Array<BlogPost>;
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Banner>;
  /** List of Banner versions */
  history: Array<Version>;
  href: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Banner>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** A unique, human readable identifier for the Banner. */
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  theme: BannerTheme;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BannerBlogPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type BannerCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BannerCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BannerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BannerHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BannerLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type BannerPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type BannerPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BannerPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BannerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BannerUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BannerUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BannerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BannerWhereUniqueInput;
};

/** A connection to a list of items. */
export type BannerConnection = {
  __typename?: 'BannerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BannerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BannerCreateInput = {
  blogPosts?: InputMaybe<BlogPostCreateManyInlineInput>;
  /** content input for default locale (en) */
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  href: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<BannerCreateLocalizationsInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  theme: BannerTheme;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BannerCreateLocalizationDataInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BannerCreateLocalizationInput = {
  /** Localization input */
  data: BannerCreateLocalizationDataInput;
  locale: Locale;
};

export type BannerCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<BannerCreateLocalizationInput>>;
};

export type BannerCreateManyInlineInput = {
  /** Connect multiple existing Banner documents */
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  /** Create and connect multiple existing Banner documents */
  create?: InputMaybe<Array<BannerCreateInput>>;
};

export type BannerCreateOneInlineInput = {
  /** Connect one existing Banner document */
  connect?: InputMaybe<BannerWhereUniqueInput>;
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>;
};

/** An edge in a connection. */
export type BannerEdge = {
  __typename?: 'BannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Banner;
};

/** Identifies documents */
export type BannerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BannerWhereStageInput>;
  documentInStages_none?: InputMaybe<BannerWhereStageInput>;
  documentInStages_some?: InputMaybe<BannerWhereStageInput>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<BannerTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<BannerTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<BannerTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<BannerTheme>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BannerOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum BannerTheme {
  Info = 'INFO',
  Warning = 'WARNING'
}

export type BannerUpdateInput = {
  blogPosts?: InputMaybe<BlogPostUpdateManyInlineInput>;
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<BannerUpdateLocalizationsInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<BannerTheme>;
};

export type BannerUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type BannerUpdateLocalizationInput = {
  data: BannerUpdateLocalizationDataInput;
  locale: Locale;
};

export type BannerUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<BannerCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<BannerUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<BannerUpsertLocalizationInput>>;
};

export type BannerUpdateManyInlineInput = {
  /** Connect multiple existing Banner documents */
  connect?: InputMaybe<Array<BannerConnectInput>>;
  /** Create and connect multiple Banner documents */
  create?: InputMaybe<Array<BannerCreateInput>>;
  /** Delete multiple Banner documents */
  delete?: InputMaybe<Array<BannerWhereUniqueInput>>;
  /** Disconnect multiple Banner documents */
  disconnect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Banner documents */
  set?: InputMaybe<Array<BannerWhereUniqueInput>>;
  /** Update multiple Banner documents */
  update?: InputMaybe<Array<BannerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Banner documents */
  upsert?: InputMaybe<Array<BannerUpsertWithNestedWhereUniqueInput>>;
};

export type BannerUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<BannerUpdateManyLocalizationsInput>;
  theme?: InputMaybe<BannerTheme>;
};

export type BannerUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type BannerUpdateManyLocalizationInput = {
  data: BannerUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type BannerUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<BannerUpdateManyLocalizationInput>>;
};

export type BannerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BannerUpdateManyInput;
  /** Document search */
  where: BannerWhereInput;
};

export type BannerUpdateOneInlineInput = {
  /** Connect existing Banner document */
  connect?: InputMaybe<BannerWhereUniqueInput>;
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>;
  /** Delete currently connected Banner document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Banner document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Banner document */
  update?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Banner document */
  upsert?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
};

export type BannerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BannerUpdateInput;
  /** Unique document search */
  where: BannerWhereUniqueInput;
};

export type BannerUpsertInput = {
  /** Create document if it didn't exist */
  create: BannerCreateInput;
  /** Update document if it exists */
  update: BannerUpdateInput;
};

export type BannerUpsertLocalizationInput = {
  create: BannerCreateLocalizationDataInput;
  locale: Locale;
  update: BannerUpdateLocalizationDataInput;
};

export type BannerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BannerUpsertInput;
  /** Unique document search */
  where: BannerWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BannerWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BannerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BannerWhereStageInput>;
  documentInStages_none?: InputMaybe<BannerWhereStageInput>;
  documentInStages_some?: InputMaybe<BannerWhereStageInput>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<BannerTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<BannerTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<BannerTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<BannerTheme>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BannerWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BannerWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Banner record uniquely */
export type BannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export enum BlogCategory {
  Announcement = 'ANNOUNCEMENT',
  Guide = 'GUIDE'
}

export type BlogPost = Node & {
  __typename?: 'BlogPost';
  authors: Array<Person>;
  category: BlogCategory;
  content: Scalars['String']['output'];
  coverImage: Asset;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<BlogPost>;
  excerpt?: Maybe<Scalars['String']['output']>;
  grids: Array<Grid>;
  /** List of BlogPost versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<BlogPost>;
  marketingMaterial: Array<BlogPostMarketingMaterial>;
  published?: Maybe<Scalars['Date']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BlogPostAuthorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type BlogPostCoverImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BlogPostGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type BlogPostHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BlogPostLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type BlogPostMarketingMaterialArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BlogPostSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogPostUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogPostWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogPostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogPostCreateInput = {
  authors?: InputMaybe<PersonCreateManyInlineInput>;
  category: BlogCategory;
  /** content input for default locale (en) */
  content: Scalars['String']['input'];
  coverImage: AssetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** excerpt input for default locale (en) */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  grids?: InputMaybe<GridCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<BlogPostCreateLocalizationsInput>;
  marketingMaterial?: InputMaybe<BlogPostMarketingMaterialCreateManyInlineInput>;
  published?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoCreateOneInlineInput>;
  slug: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogPostCreateLocalizationDataInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlogPostCreateLocalizationInput = {
  /** Localization input */
  data: BlogPostCreateLocalizationDataInput;
  locale: Locale;
};

export type BlogPostCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<BlogPostCreateLocalizationInput>>;
};

export type BlogPostCreateManyInlineInput = {
  /** Connect multiple existing BlogPost documents */
  connect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Create and connect multiple existing BlogPost documents */
  create?: InputMaybe<Array<BlogPostCreateInput>>;
};

export type BlogPostCreateOneInlineInput = {
  /** Connect one existing BlogPost document */
  connect?: InputMaybe<BlogPostWhereUniqueInput>;
  /** Create and connect one BlogPost document */
  create?: InputMaybe<BlogPostCreateInput>;
};

/** An edge in a connection. */
export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BlogPost;
};

/** Identifies documents */
export type BlogPostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  authors_every?: InputMaybe<PersonWhereInput>;
  authors_none?: InputMaybe<PersonWhereInput>;
  authors_some?: InputMaybe<PersonWhereInput>;
  category?: InputMaybe<BlogCategory>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<BlogCategory>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<BlogCategory>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<BlogCategory>>>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogPostWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  marketingMaterial_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  marketingMaterial_some?: InputMaybe<BlogPostMarketingMaterialWhereInput>;
  published?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values greater than the given value. */
  published_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  published_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  published_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  published_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  published_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  published_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  published_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type BlogPostMarketingMaterial = Banner | Newsletter | PopUp;

export type BlogPostMarketingMaterialConnectInput = {
  Banner?: InputMaybe<BannerConnectInput>;
  Newsletter?: InputMaybe<NewsletterConnectInput>;
  PopUp?: InputMaybe<PopUpConnectInput>;
};

export type BlogPostMarketingMaterialCreateInput = {
  Banner?: InputMaybe<BannerCreateInput>;
  Newsletter?: InputMaybe<NewsletterCreateInput>;
  PopUp?: InputMaybe<PopUpCreateInput>;
};

export type BlogPostMarketingMaterialCreateManyInlineInput = {
  /** Connect multiple existing BlogPostMarketingMaterial documents */
  connect?: InputMaybe<Array<BlogPostMarketingMaterialWhereUniqueInput>>;
  /** Create and connect multiple existing BlogPostMarketingMaterial documents */
  create?: InputMaybe<Array<BlogPostMarketingMaterialCreateInput>>;
};

export type BlogPostMarketingMaterialCreateOneInlineInput = {
  /** Connect one existing BlogPostMarketingMaterial document */
  connect?: InputMaybe<BlogPostMarketingMaterialWhereUniqueInput>;
  /** Create and connect one BlogPostMarketingMaterial document */
  create?: InputMaybe<BlogPostMarketingMaterialCreateInput>;
};

export type BlogPostMarketingMaterialUpdateInput = {
  Banner?: InputMaybe<BannerUpdateInput>;
  Newsletter?: InputMaybe<NewsletterUpdateInput>;
  PopUp?: InputMaybe<PopUpUpdateInput>;
};

export type BlogPostMarketingMaterialUpdateManyInlineInput = {
  /** Connect multiple existing BlogPostMarketingMaterial documents */
  connect?: InputMaybe<Array<BlogPostMarketingMaterialConnectInput>>;
  /** Create and connect multiple BlogPostMarketingMaterial documents */
  create?: InputMaybe<Array<BlogPostMarketingMaterialCreateInput>>;
  /** Delete multiple BlogPostMarketingMaterial documents */
  delete?: InputMaybe<Array<BlogPostMarketingMaterialWhereUniqueInput>>;
  /** Disconnect multiple BlogPostMarketingMaterial documents */
  disconnect?: InputMaybe<Array<BlogPostMarketingMaterialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BlogPostMarketingMaterial documents */
  set?: InputMaybe<Array<BlogPostMarketingMaterialWhereUniqueInput>>;
  /** Update multiple BlogPostMarketingMaterial documents */
  update?: InputMaybe<Array<BlogPostMarketingMaterialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPostMarketingMaterial documents */
  upsert?: InputMaybe<Array<BlogPostMarketingMaterialUpsertWithNestedWhereUniqueInput>>;
};

export type BlogPostMarketingMaterialUpdateManyWithNestedWhereInput = {
  Banner?: InputMaybe<BannerUpdateManyWithNestedWhereInput>;
  Newsletter?: InputMaybe<NewsletterUpdateManyWithNestedWhereInput>;
  PopUp?: InputMaybe<PopUpUpdateManyWithNestedWhereInput>;
};

export type BlogPostMarketingMaterialUpdateOneInlineInput = {
  /** Connect existing BlogPostMarketingMaterial document */
  connect?: InputMaybe<BlogPostMarketingMaterialWhereUniqueInput>;
  /** Create and connect one BlogPostMarketingMaterial document */
  create?: InputMaybe<BlogPostMarketingMaterialCreateInput>;
  /** Delete currently connected BlogPostMarketingMaterial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected BlogPostMarketingMaterial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BlogPostMarketingMaterial document */
  update?: InputMaybe<BlogPostMarketingMaterialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPostMarketingMaterial document */
  upsert?: InputMaybe<BlogPostMarketingMaterialUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostMarketingMaterialUpdateWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterUpdateWithNestedWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpUpdateWithNestedWhereUniqueInput>;
};

export type BlogPostMarketingMaterialUpsertWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterUpsertWithNestedWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostMarketingMaterialWhereInput = {
  Banner?: InputMaybe<BannerWhereInput>;
  Newsletter?: InputMaybe<NewsletterWhereInput>;
  PopUp?: InputMaybe<PopUpWhereInput>;
};

export type BlogPostMarketingMaterialWhereUniqueInput = {
  Banner?: InputMaybe<BannerWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpWhereUniqueInput>;
};

export enum BlogPostOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlogPostUpdateInput = {
  authors?: InputMaybe<PersonUpdateManyInlineInput>;
  category?: InputMaybe<BlogCategory>;
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** excerpt input for default locale (en) */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<BlogPostUpdateLocalizationsInput>;
  marketingMaterial?: InputMaybe<BlogPostMarketingMaterialUpdateManyInlineInput>;
  published?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateLocalizationInput = {
  data: BlogPostUpdateLocalizationDataInput;
  locale: Locale;
};

export type BlogPostUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<BlogPostCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<BlogPostUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<BlogPostUpsertLocalizationInput>>;
};

export type BlogPostUpdateManyInlineInput = {
  /** Connect multiple existing BlogPost documents */
  connect?: InputMaybe<Array<BlogPostConnectInput>>;
  /** Create and connect multiple BlogPost documents */
  create?: InputMaybe<Array<BlogPostCreateInput>>;
  /** Delete multiple BlogPost documents */
  delete?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Disconnect multiple BlogPost documents */
  disconnect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BlogPost documents */
  set?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
  /** Update multiple BlogPost documents */
  update?: InputMaybe<Array<BlogPostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPost documents */
  upsert?: InputMaybe<Array<BlogPostUpsertWithNestedWhereUniqueInput>>;
};

export type BlogPostUpdateManyInput = {
  category?: InputMaybe<BlogCategory>;
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  /** excerpt input for default locale (en) */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<BlogPostUpdateManyLocalizationsInput>;
  published?: InputMaybe<Scalars['Date']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostUpdateManyLocalizationInput = {
  data: BlogPostUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type BlogPostUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<BlogPostUpdateManyLocalizationInput>>;
};

export type BlogPostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogPostUpdateManyInput;
  /** Document search */
  where: BlogPostWhereInput;
};

export type BlogPostUpdateOneInlineInput = {
  /** Connect existing BlogPost document */
  connect?: InputMaybe<BlogPostWhereUniqueInput>;
  /** Create and connect one BlogPost document */
  create?: InputMaybe<BlogPostCreateInput>;
  /** Delete currently connected BlogPost document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected BlogPost document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BlogPost document */
  update?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPost document */
  upsert?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogPostUpdateInput;
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
};

export type BlogPostUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogPostCreateInput;
  /** Update document if it exists */
  update: BlogPostUpdateInput;
};

export type BlogPostUpsertLocalizationInput = {
  create: BlogPostCreateLocalizationDataInput;
  locale: Locale;
  update: BlogPostUpdateLocalizationDataInput;
};

export type BlogPostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogPostUpsertInput;
  /** Unique document search */
  where: BlogPostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BlogPostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BlogPostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  authors_every?: InputMaybe<PersonWhereInput>;
  authors_none?: InputMaybe<PersonWhereInput>;
  authors_some?: InputMaybe<PersonWhereInput>;
  category?: InputMaybe<BlogCategory>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<BlogCategory>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<BlogCategory>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<BlogCategory>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogPostWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogPostWhereStageInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  marketingMaterial_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  marketingMaterial_some?: InputMaybe<BlogPostMarketingMaterialWhereInput>;
  published?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values greater than the given value. */
  published_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  published_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  published_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  published_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  published_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  published_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  published_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BlogPostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogPostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BlogPostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References BlogPost record uniquely */
export type BlogPostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Breakpoint = Node & {
  __typename?: 'Breakpoint';
  buttons: Array<Button>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Breakpoint>;
  /** List of Breakpoint versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Breakpoint>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BreakpointButtonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonWhereInput>;
};


export type BreakpointCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BreakpointCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BreakpointDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BreakpointHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BreakpointLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type BreakpointPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type BreakpointPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BreakpointPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BreakpointScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BreakpointUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BreakpointUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BreakpointConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BreakpointWhereUniqueInput;
};

/** A connection to a list of items. */
export type BreakpointConnection = {
  __typename?: 'BreakpointConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BreakpointEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BreakpointCreateInput = {
  buttons?: InputMaybe<ButtonCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<BreakpointCreateLocalizationsInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  /** subtitle input for default locale (en) */
  subtitle: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BreakpointCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  subtitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BreakpointCreateLocalizationInput = {
  /** Localization input */
  data: BreakpointCreateLocalizationDataInput;
  locale: Locale;
};

export type BreakpointCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<BreakpointCreateLocalizationInput>>;
};

export type BreakpointCreateManyInlineInput = {
  /** Connect multiple existing Breakpoint documents */
  connect?: InputMaybe<Array<BreakpointWhereUniqueInput>>;
  /** Create and connect multiple existing Breakpoint documents */
  create?: InputMaybe<Array<BreakpointCreateInput>>;
};

export type BreakpointCreateOneInlineInput = {
  /** Connect one existing Breakpoint document */
  connect?: InputMaybe<BreakpointWhereUniqueInput>;
  /** Create and connect one Breakpoint document */
  create?: InputMaybe<BreakpointCreateInput>;
};

/** An edge in a connection. */
export type BreakpointEdge = {
  __typename?: 'BreakpointEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Breakpoint;
};

/** Identifies documents */
export type BreakpointManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttons_every?: InputMaybe<ButtonWhereInput>;
  buttons_none?: InputMaybe<ButtonWhereInput>;
  buttons_some?: InputMaybe<ButtonWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BreakpointWhereStageInput>;
  documentInStages_none?: InputMaybe<BreakpointWhereStageInput>;
  documentInStages_some?: InputMaybe<BreakpointWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BreakpointOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BreakpointUpdateInput = {
  buttons?: InputMaybe<ButtonUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<BreakpointUpdateLocalizationsInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BreakpointUpdateLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BreakpointUpdateLocalizationInput = {
  data: BreakpointUpdateLocalizationDataInput;
  locale: Locale;
};

export type BreakpointUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<BreakpointCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<BreakpointUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<BreakpointUpsertLocalizationInput>>;
};

export type BreakpointUpdateManyInlineInput = {
  /** Connect multiple existing Breakpoint documents */
  connect?: InputMaybe<Array<BreakpointConnectInput>>;
  /** Create and connect multiple Breakpoint documents */
  create?: InputMaybe<Array<BreakpointCreateInput>>;
  /** Delete multiple Breakpoint documents */
  delete?: InputMaybe<Array<BreakpointWhereUniqueInput>>;
  /** Disconnect multiple Breakpoint documents */
  disconnect?: InputMaybe<Array<BreakpointWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Breakpoint documents */
  set?: InputMaybe<Array<BreakpointWhereUniqueInput>>;
  /** Update multiple Breakpoint documents */
  update?: InputMaybe<Array<BreakpointUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Breakpoint documents */
  upsert?: InputMaybe<Array<BreakpointUpsertWithNestedWhereUniqueInput>>;
};

export type BreakpointUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<BreakpointUpdateManyLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BreakpointUpdateManyLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BreakpointUpdateManyLocalizationInput = {
  data: BreakpointUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type BreakpointUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<BreakpointUpdateManyLocalizationInput>>;
};

export type BreakpointUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BreakpointUpdateManyInput;
  /** Document search */
  where: BreakpointWhereInput;
};

export type BreakpointUpdateOneInlineInput = {
  /** Connect existing Breakpoint document */
  connect?: InputMaybe<BreakpointWhereUniqueInput>;
  /** Create and connect one Breakpoint document */
  create?: InputMaybe<BreakpointCreateInput>;
  /** Delete currently connected Breakpoint document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Breakpoint document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Breakpoint document */
  update?: InputMaybe<BreakpointUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Breakpoint document */
  upsert?: InputMaybe<BreakpointUpsertWithNestedWhereUniqueInput>;
};

export type BreakpointUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BreakpointUpdateInput;
  /** Unique document search */
  where: BreakpointWhereUniqueInput;
};

export type BreakpointUpsertInput = {
  /** Create document if it didn't exist */
  create: BreakpointCreateInput;
  /** Update document if it exists */
  update: BreakpointUpdateInput;
};

export type BreakpointUpsertLocalizationInput = {
  create: BreakpointCreateLocalizationDataInput;
  locale: Locale;
  update: BreakpointUpdateLocalizationDataInput;
};

export type BreakpointUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BreakpointUpsertInput;
  /** Unique document search */
  where: BreakpointWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BreakpointWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BreakpointWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BreakpointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttons_every?: InputMaybe<ButtonWhereInput>;
  buttons_none?: InputMaybe<ButtonWhereInput>;
  buttons_some?: InputMaybe<ButtonWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BreakpointWhereStageInput>;
  documentInStages_none?: InputMaybe<BreakpointWhereStageInput>;
  documentInStages_some?: InputMaybe<BreakpointWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BreakpointWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BreakpointWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BreakpointWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BreakpointWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BreakpointWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Breakpoint record uniquely */
export type BreakpointWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Button = Node & {
  __typename?: 'Button';
  breakpoints: Array<Breakpoint>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Button>;
  heroes: Array<Hero>;
  /** List of Button versions */
  history: Array<Version>;
  /** href value for the Button. If this is an external URL, please prefix with https:// (i.e. https://graphcms.com). Otherwise, please prefix with a single / (i.e. /features). */
  href: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The text label for the button */
  label: Scalars['String']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Button>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** A unique, human readable identifier for the Button. */
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  theme: ButtonTheme;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ButtonBreakpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BreakpointOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BreakpointWhereInput>;
};


export type ButtonCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ButtonCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ButtonDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ButtonHeroesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroWhereInput>;
};


export type ButtonHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ButtonLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type ButtonPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ButtonPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ButtonScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ButtonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ButtonUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ButtonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ButtonWhereUniqueInput;
};

/** A connection to a list of items. */
export type ButtonConnection = {
  __typename?: 'ButtonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ButtonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ButtonCreateInput = {
  breakpoints?: InputMaybe<BreakpointCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heroes?: InputMaybe<HeroCreateManyInlineInput>;
  href: Scalars['String']['input'];
  /** label input for default locale (en) */
  label: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ButtonCreateLocalizationsInput>;
  slug: Scalars['String']['input'];
  theme: ButtonTheme;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ButtonCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ButtonCreateLocalizationInput = {
  /** Localization input */
  data: ButtonCreateLocalizationDataInput;
  locale: Locale;
};

export type ButtonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ButtonCreateLocalizationInput>>;
};

export type ButtonCreateManyInlineInput = {
  /** Connect multiple existing Button documents */
  connect?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Create and connect multiple existing Button documents */
  create?: InputMaybe<Array<ButtonCreateInput>>;
};

export type ButtonCreateOneInlineInput = {
  /** Connect one existing Button document */
  connect?: InputMaybe<ButtonWhereUniqueInput>;
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
};

/** An edge in a connection. */
export type ButtonEdge = {
  __typename?: 'ButtonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Button;
};

/** Identifies documents */
export type ButtonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  breakpoints_every?: InputMaybe<BreakpointWhereInput>;
  breakpoints_none?: InputMaybe<BreakpointWhereInput>;
  breakpoints_some?: InputMaybe<BreakpointWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ButtonWhereStageInput>;
  documentInStages_none?: InputMaybe<ButtonWhereStageInput>;
  documentInStages_some?: InputMaybe<ButtonWhereStageInput>;
  heroes_every?: InputMaybe<HeroWhereInput>;
  heroes_none?: InputMaybe<HeroWhereInput>;
  heroes_some?: InputMaybe<HeroWhereInput>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<ButtonTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<ButtonTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<ButtonTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<ButtonTheme>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ButtonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ButtonTheme {
  Indigo = 'INDIGO',
  White = 'WHITE'
}

export type ButtonUpdateInput = {
  breakpoints?: InputMaybe<BreakpointUpdateManyInlineInput>;
  heroes?: InputMaybe<HeroUpdateManyInlineInput>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ButtonUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<ButtonTheme>;
};

export type ButtonUpdateLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateLocalizationInput = {
  data: ButtonUpdateLocalizationDataInput;
  locale: Locale;
};

export type ButtonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ButtonCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ButtonUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ButtonUpsertLocalizationInput>>;
};

export type ButtonUpdateManyInlineInput = {
  /** Connect multiple existing Button documents */
  connect?: InputMaybe<Array<ButtonConnectInput>>;
  /** Create and connect multiple Button documents */
  create?: InputMaybe<Array<ButtonCreateInput>>;
  /** Delete multiple Button documents */
  delete?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Disconnect multiple Button documents */
  disconnect?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Button documents */
  set?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Update multiple Button documents */
  update?: InputMaybe<Array<ButtonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Button documents */
  upsert?: InputMaybe<Array<ButtonUpsertWithNestedWhereUniqueInput>>;
};

export type ButtonUpdateManyInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ButtonUpdateManyLocalizationsInput>;
  theme?: InputMaybe<ButtonTheme>;
};

export type ButtonUpdateManyLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyLocalizationInput = {
  data: ButtonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ButtonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ButtonUpdateManyLocalizationInput>>;
};

export type ButtonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ButtonUpdateManyInput;
  /** Document search */
  where: ButtonWhereInput;
};

export type ButtonUpdateOneInlineInput = {
  /** Connect existing Button document */
  connect?: InputMaybe<ButtonWhereUniqueInput>;
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
  /** Delete currently connected Button document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Button document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Button document */
  update?: InputMaybe<ButtonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Button document */
  upsert?: InputMaybe<ButtonUpsertWithNestedWhereUniqueInput>;
};

export type ButtonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ButtonUpdateInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpsertInput = {
  /** Create document if it didn't exist */
  create: ButtonCreateInput;
  /** Update document if it exists */
  update: ButtonUpdateInput;
};

export type ButtonUpsertLocalizationInput = {
  create: ButtonCreateLocalizationDataInput;
  locale: Locale;
  update: ButtonUpdateLocalizationDataInput;
};

export type ButtonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ButtonUpsertInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ButtonWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ButtonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  breakpoints_every?: InputMaybe<BreakpointWhereInput>;
  breakpoints_none?: InputMaybe<BreakpointWhereInput>;
  breakpoints_some?: InputMaybe<BreakpointWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ButtonWhereStageInput>;
  documentInStages_none?: InputMaybe<ButtonWhereStageInput>;
  documentInStages_some?: InputMaybe<ButtonWhereStageInput>;
  heroes_every?: InputMaybe<HeroWhereInput>;
  heroes_none?: InputMaybe<HeroWhereInput>;
  heroes_some?: InputMaybe<HeroWhereInput>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<ButtonTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<ButtonTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<ButtonTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<ButtonTheme>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ButtonWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ButtonWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Button record uniquely */
export type ButtonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type Company = Node & {
  __typename?: 'Company';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Company>;
  /** List of Company versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  logo: Asset;
  logoClouds: Array<LogoCloud>;
  name: Scalars['String']['output'];
  people: Array<Person>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CompanyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CompanyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CompanyHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CompanyLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CompanyLogoCloudsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LogoCloudOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogoCloudWhereInput>;
};


export type CompanyPeopleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type CompanyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CompanyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CompanyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CompanyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CompanyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CompanyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CompanyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo: AssetCreateOneInlineInput;
  logoClouds?: InputMaybe<LogoCloudCreateManyInlineInput>;
  name: Scalars['String']['input'];
  people?: InputMaybe<PersonCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompanyCreateManyInlineInput = {
  /** Connect multiple existing Company documents */
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Create and connect multiple existing Company documents */
  create?: InputMaybe<Array<CompanyCreateInput>>;
};

export type CompanyCreateOneInlineInput = {
  /** Connect one existing Company document */
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  /** Create and connect one Company document */
  create?: InputMaybe<CompanyCreateInput>;
};

/** An edge in a connection. */
export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Company;
};

/** Identifies documents */
export type CompanyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_none?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_some?: InputMaybe<CompanyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoClouds_every?: InputMaybe<LogoCloudWhereInput>;
  logoClouds_none?: InputMaybe<LogoCloudWhereInput>;
  logoClouds_some?: InputMaybe<LogoCloudWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  people_every?: InputMaybe<PersonWhereInput>;
  people_none?: InputMaybe<PersonWhereInput>;
  people_some?: InputMaybe<PersonWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CompanyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CompanyUpdateInput = {
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  logoClouds?: InputMaybe<LogoCloudUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  people?: InputMaybe<PersonUpdateManyInlineInput>;
};

export type CompanyUpdateManyInlineInput = {
  /** Connect multiple existing Company documents */
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  /** Create and connect multiple Company documents */
  create?: InputMaybe<Array<CompanyCreateInput>>;
  /** Delete multiple Company documents */
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Disconnect multiple Company documents */
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Company documents */
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  /** Update multiple Company documents */
  update?: InputMaybe<Array<CompanyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Company documents */
  upsert?: InputMaybe<Array<CompanyUpsertWithNestedWhereUniqueInput>>;
};

export type CompanyUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CompanyUpdateManyInput;
  /** Document search */
  where: CompanyWhereInput;
};

export type CompanyUpdateOneInlineInput = {
  /** Connect existing Company document */
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  /** Create and connect one Company document */
  create?: InputMaybe<CompanyCreateInput>;
  /** Delete currently connected Company document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Company document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Company document */
  update?: InputMaybe<CompanyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Company document */
  upsert?: InputMaybe<CompanyUpsertWithNestedWhereUniqueInput>;
};

export type CompanyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CompanyUpdateInput;
  /** Unique document search */
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: CompanyCreateInput;
  /** Update document if it exists */
  update: CompanyUpdateInput;
};

export type CompanyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CompanyUpsertInput;
  /** Unique document search */
  where: CompanyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CompanyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CompanyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_none?: InputMaybe<CompanyWhereStageInput>;
  documentInStages_some?: InputMaybe<CompanyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoClouds_every?: InputMaybe<LogoCloudWhereInput>;
  logoClouds_none?: InputMaybe<LogoCloudWhereInput>;
  logoClouds_some?: InputMaybe<LogoCloudWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  people_every?: InputMaybe<PersonWhereInput>;
  people_none?: InputMaybe<PersonWhereInput>;
  people_some?: InputMaybe<PersonWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CompanyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CompanyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CompanyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Company record uniquely */
export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components implement the Entity interface. At the moment models are not supported, models are listed in this enum to avoid an empty enum without any components. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Banner = 'Banner',
  BlogPost = 'BlogPost',
  Breakpoint = 'Breakpoint',
  Button = 'Button',
  Company = 'Company',
  Faq = 'Faq',
  Feature = 'Feature',
  Footer = 'Footer',
  Grid = 'Grid',
  Hero = 'Hero',
  LogoCloud = 'LogoCloud',
  Navigation = 'Navigation',
  Newsletter = 'Newsletter',
  Page = 'Page',
  Person = 'Person',
  PopUp = 'PopUp',
  PricingPlan = 'PricingPlan',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Seo = 'Seo',
  Stat = 'Stat',
  Testimonial = 'Testimonial',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Faq = Node & {
  __typename?: 'Faq';
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  grids: Array<Grid>;
  /** List of Faq versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FaqCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type FaqGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type FaqLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type FaqPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FaqUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  /** content input for default locale (en) */
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  grids?: InputMaybe<GridCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FaqCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FaqCreateLocalizationDataInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FaqCreateLocalizationInput = {
  /** Localization input */
  data: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
};

export type FaqCreateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Create and connect multiple existing Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Connect one existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FaqWhereStageInput>;
  documentInStages_none?: InputMaybe<FaqWhereStageInput>;
  documentInStages_some?: InputMaybe<FaqWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FaqUpdateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<FaqUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FaqUpsertLocalizationInput>>;
};

export type FaqUpdateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqConnectInput>>;
  /** Create and connect multiple Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
  /** Delete multiple Faq documents */
  delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FaqUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateManyLocalizationInput = {
  data: FaqUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateManyLocalizationInput>>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Connect existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Faq document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Faq document */
  update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
  update: FaqUpdateLocalizationDataInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FaqWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FaqWhereStageInput>;
  documentInStages_none?: InputMaybe<FaqWhereStageInput>;
  documentInStages_some?: InputMaybe<FaqWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FaqWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FaqWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Feature = Node & {
  __typename?: 'Feature';
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Feature>;
  grids: Array<Grid>;
  /** List of Feature versions */
  history: Array<Version>;
  icon: FeatureIcon;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Feature>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FeatureCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FeatureCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FeatureDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type FeatureGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type FeatureHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type FeatureImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FeatureLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type FeaturePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FeaturePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FeatureScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FeatureUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FeatureUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FeatureConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeatureWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeatureEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeatureCreateInput = {
  /** content input for default locale (en) */
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  grids?: InputMaybe<GridCreateManyInlineInput>;
  icon: FeatureIcon;
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FeatureCreateLocalizationsInput>;
  slug: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureCreateLocalizationDataInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureCreateLocalizationInput = {
  /** Localization input */
  data: FeatureCreateLocalizationDataInput;
  locale: Locale;
};

export type FeatureCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FeatureCreateLocalizationInput>>;
};

export type FeatureCreateManyInlineInput = {
  /** Connect multiple existing Feature documents */
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Create and connect multiple existing Feature documents */
  create?: InputMaybe<Array<FeatureCreateInput>>;
};

export type FeatureCreateOneInlineInput = {
  /** Connect one existing Feature document */
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  /** Create and connect one Feature document */
  create?: InputMaybe<FeatureCreateInput>;
};

/** An edge in a connection. */
export type FeatureEdge = {
  __typename?: 'FeatureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Feature;
};

export enum FeatureIcon {
  Bolt = 'BOLT',
  Globe = 'GLOBE',
  Mail = 'MAIL',
  Scale = 'SCALE'
}

/** Identifies documents */
export type FeatureManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_none?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_some?: InputMaybe<FeatureWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  icon?: InputMaybe<FeatureIcon>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<FeatureIcon>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<FeatureIcon>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<FeatureIcon>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FeatureOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FeatureUpdateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  icon?: InputMaybe<FeatureIcon>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<FeatureUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateLocalizationInput = {
  data: FeatureUpdateLocalizationDataInput;
  locale: Locale;
};

export type FeatureUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FeatureCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FeatureUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertLocalizationInput>>;
};

export type FeatureUpdateManyInlineInput = {
  /** Connect multiple existing Feature documents */
  connect?: InputMaybe<Array<FeatureConnectInput>>;
  /** Create and connect multiple Feature documents */
  create?: InputMaybe<Array<FeatureCreateInput>>;
  /** Delete multiple Feature documents */
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Disconnect multiple Feature documents */
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Feature documents */
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Update multiple Feature documents */
  update?: InputMaybe<Array<FeatureUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Feature documents */
  upsert?: InputMaybe<Array<FeatureUpsertWithNestedWhereUniqueInput>>;
};

export type FeatureUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FeatureIcon>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FeatureUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateManyLocalizationInput = {
  data: FeatureUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FeatureUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FeatureUpdateManyLocalizationInput>>;
};

export type FeatureUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeatureUpdateManyInput;
  /** Document search */
  where: FeatureWhereInput;
};

export type FeatureUpdateOneInlineInput = {
  /** Connect existing Feature document */
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  /** Create and connect one Feature document */
  create?: InputMaybe<FeatureCreateInput>;
  /** Delete currently connected Feature document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Feature document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Feature document */
  update?: InputMaybe<FeatureUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Feature document */
  upsert?: InputMaybe<FeatureUpsertWithNestedWhereUniqueInput>;
};

export type FeatureUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeatureUpdateInput;
  /** Unique document search */
  where: FeatureWhereUniqueInput;
};

export type FeatureUpsertInput = {
  /** Create document if it didn't exist */
  create: FeatureCreateInput;
  /** Update document if it exists */
  update: FeatureUpdateInput;
};

export type FeatureUpsertLocalizationInput = {
  create: FeatureCreateLocalizationDataInput;
  locale: Locale;
  update: FeatureUpdateLocalizationDataInput;
};

export type FeatureUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeatureUpsertInput;
  /** Unique document search */
  where: FeatureWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FeatureWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FeatureWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_none?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_some?: InputMaybe<FeatureWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  icon?: InputMaybe<FeatureIcon>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<FeatureIcon>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<FeatureIcon>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<FeatureIcon>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FeatureWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FeatureWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Feature record uniquely */
export type FeatureWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Footer = Node & {
  __typename?: 'Footer';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Footer>;
  /** List of Footer versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pages: Array<Page>;
  primaryLinks: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  secondaryLinks: Array<Page>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FooterCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FooterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type FooterHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type FooterPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type FooterPrimaryLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type FooterPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FooterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FooterSecondaryLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type FooterUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FooterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterConnection = {
  __typename?: 'FooterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FooterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  primaryLinks?: InputMaybe<PageCreateManyInlineInput>;
  secondaryLinks?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FooterCreateManyInlineInput = {
  /** Connect multiple existing Footer documents */
  connect?: InputMaybe<Array<FooterWhereUniqueInput>>;
  /** Create and connect multiple existing Footer documents */
  create?: InputMaybe<Array<FooterCreateInput>>;
};

export type FooterCreateOneInlineInput = {
  /** Connect one existing Footer document */
  connect?: InputMaybe<FooterWhereUniqueInput>;
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>;
};

/** An edge in a connection. */
export type FooterEdge = {
  __typename?: 'FooterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Footer;
};

/** Identifies documents */
export type FooterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FooterWhereStageInput>;
  documentInStages_none?: InputMaybe<FooterWhereStageInput>;
  documentInStages_some?: InputMaybe<FooterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  primaryLinks_every?: InputMaybe<PageWhereInput>;
  primaryLinks_none?: InputMaybe<PageWhereInput>;
  primaryLinks_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLinks_every?: InputMaybe<PageWhereInput>;
  secondaryLinks_none?: InputMaybe<PageWhereInput>;
  secondaryLinks_some?: InputMaybe<PageWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FooterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FooterUpdateInput = {
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  primaryLinks?: InputMaybe<PageUpdateManyInlineInput>;
  secondaryLinks?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FooterUpdateManyInlineInput = {
  /** Connect multiple existing Footer documents */
  connect?: InputMaybe<Array<FooterConnectInput>>;
  /** Create and connect multiple Footer documents */
  create?: InputMaybe<Array<FooterCreateInput>>;
  /** Delete multiple Footer documents */
  delete?: InputMaybe<Array<FooterWhereUniqueInput>>;
  /** Disconnect multiple Footer documents */
  disconnect?: InputMaybe<Array<FooterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Footer documents */
  set?: InputMaybe<Array<FooterWhereUniqueInput>>;
  /** Update multiple Footer documents */
  update?: InputMaybe<Array<FooterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Footer documents */
  upsert?: InputMaybe<Array<FooterUpsertWithNestedWhereUniqueInput>>;
};

export type FooterUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FooterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterUpdateManyInput;
  /** Document search */
  where: FooterWhereInput;
};

export type FooterUpdateOneInlineInput = {
  /** Connect existing Footer document */
  connect?: InputMaybe<FooterWhereUniqueInput>;
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>;
  /** Delete currently connected Footer document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Footer document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Footer document */
  update?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Footer document */
  upsert?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterUpdateInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

export type FooterUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterCreateInput;
  /** Update document if it exists */
  update: FooterUpdateInput;
};

export type FooterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterUpsertInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FooterWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FooterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FooterWhereStageInput>;
  documentInStages_none?: InputMaybe<FooterWhereStageInput>;
  documentInStages_some?: InputMaybe<FooterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  primaryLinks_every?: InputMaybe<PageWhereInput>;
  primaryLinks_none?: InputMaybe<PageWhereInput>;
  primaryLinks_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLinks_every?: InputMaybe<PageWhereInput>;
  secondaryLinks_none?: InputMaybe<PageWhereInput>;
  secondaryLinks_some?: InputMaybe<PageWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FooterWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FooterWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Grid = Node & {
  __typename?: 'Grid';
  columnComponent?: Maybe<Scalars['String']['output']>;
  columns: Array<GridColumns>;
  component?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Grid>;
  headline?: Maybe<Scalars['String']['output']>;
  /** List of Grid versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  layout: GridLayout;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Grid>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  theme: GridTheme;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Number of columns in a grid row. */
  width: Scalars['Int']['output'];
};


export type GridColumnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type GridCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type GridCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GridDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type GridHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type GridLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type GridPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type GridPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type GridPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GridScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GridUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type GridUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GridColumns = BlogPost | Faq | Feature | Person | PricingPlan | Stat;

export type GridColumnsConnectInput = {
  BlogPost?: InputMaybe<BlogPostConnectInput>;
  Faq?: InputMaybe<FaqConnectInput>;
  Feature?: InputMaybe<FeatureConnectInput>;
  Person?: InputMaybe<PersonConnectInput>;
  PricingPlan?: InputMaybe<PricingPlanConnectInput>;
  Stat?: InputMaybe<StatConnectInput>;
};

export type GridColumnsCreateInput = {
  BlogPost?: InputMaybe<BlogPostCreateInput>;
  Faq?: InputMaybe<FaqCreateInput>;
  Feature?: InputMaybe<FeatureCreateInput>;
  Person?: InputMaybe<PersonCreateInput>;
  PricingPlan?: InputMaybe<PricingPlanCreateInput>;
  Stat?: InputMaybe<StatCreateInput>;
};

export type GridColumnsCreateManyInlineInput = {
  /** Connect multiple existing GridColumns documents */
  connect?: InputMaybe<Array<GridColumnsWhereUniqueInput>>;
  /** Create and connect multiple existing GridColumns documents */
  create?: InputMaybe<Array<GridColumnsCreateInput>>;
};

export type GridColumnsCreateOneInlineInput = {
  /** Connect one existing GridColumns document */
  connect?: InputMaybe<GridColumnsWhereUniqueInput>;
  /** Create and connect one GridColumns document */
  create?: InputMaybe<GridColumnsCreateInput>;
};

export type GridColumnsUpdateInput = {
  BlogPost?: InputMaybe<BlogPostUpdateInput>;
  Faq?: InputMaybe<FaqUpdateInput>;
  Feature?: InputMaybe<FeatureUpdateInput>;
  Person?: InputMaybe<PersonUpdateInput>;
  PricingPlan?: InputMaybe<PricingPlanUpdateInput>;
  Stat?: InputMaybe<StatUpdateInput>;
};

export type GridColumnsUpdateManyInlineInput = {
  /** Connect multiple existing GridColumns documents */
  connect?: InputMaybe<Array<GridColumnsConnectInput>>;
  /** Create and connect multiple GridColumns documents */
  create?: InputMaybe<Array<GridColumnsCreateInput>>;
  /** Delete multiple GridColumns documents */
  delete?: InputMaybe<Array<GridColumnsWhereUniqueInput>>;
  /** Disconnect multiple GridColumns documents */
  disconnect?: InputMaybe<Array<GridColumnsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GridColumns documents */
  set?: InputMaybe<Array<GridColumnsWhereUniqueInput>>;
  /** Update multiple GridColumns documents */
  update?: InputMaybe<Array<GridColumnsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GridColumns documents */
  upsert?: InputMaybe<Array<GridColumnsUpsertWithNestedWhereUniqueInput>>;
};

export type GridColumnsUpdateManyWithNestedWhereInput = {
  BlogPost?: InputMaybe<BlogPostUpdateManyWithNestedWhereInput>;
  Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
  Feature?: InputMaybe<FeatureUpdateManyWithNestedWhereInput>;
  Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
  PricingPlan?: InputMaybe<PricingPlanUpdateManyWithNestedWhereInput>;
  Stat?: InputMaybe<StatUpdateManyWithNestedWhereInput>;
};

export type GridColumnsUpdateOneInlineInput = {
  /** Connect existing GridColumns document */
  connect?: InputMaybe<GridColumnsWhereUniqueInput>;
  /** Create and connect one GridColumns document */
  create?: InputMaybe<GridColumnsCreateInput>;
  /** Delete currently connected GridColumns document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected GridColumns document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GridColumns document */
  update?: InputMaybe<GridColumnsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GridColumns document */
  upsert?: InputMaybe<GridColumnsUpsertWithNestedWhereUniqueInput>;
};

export type GridColumnsUpdateWithNestedWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  Feature?: InputMaybe<FeatureUpdateWithNestedWhereUniqueInput>;
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
  PricingPlan?: InputMaybe<PricingPlanUpdateWithNestedWhereUniqueInput>;
  Stat?: InputMaybe<StatUpdateWithNestedWhereUniqueInput>;
};

export type GridColumnsUpsertWithNestedWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
  Feature?: InputMaybe<FeatureUpsertWithNestedWhereUniqueInput>;
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
  PricingPlan?: InputMaybe<PricingPlanUpsertWithNestedWhereUniqueInput>;
  Stat?: InputMaybe<StatUpsertWithNestedWhereUniqueInput>;
};

export type GridColumnsWhereInput = {
  BlogPost?: InputMaybe<BlogPostWhereInput>;
  Faq?: InputMaybe<FaqWhereInput>;
  Feature?: InputMaybe<FeatureWhereInput>;
  Person?: InputMaybe<PersonWhereInput>;
  PricingPlan?: InputMaybe<PricingPlanWhereInput>;
  Stat?: InputMaybe<StatWhereInput>;
};

export type GridColumnsWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostWhereUniqueInput>;
  Faq?: InputMaybe<FaqWhereUniqueInput>;
  Feature?: InputMaybe<FeatureWhereUniqueInput>;
  Person?: InputMaybe<PersonWhereUniqueInput>;
  PricingPlan?: InputMaybe<PricingPlanWhereUniqueInput>;
  Stat?: InputMaybe<StatWhereUniqueInput>;
};

export type GridConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GridWhereUniqueInput;
};

/** A connection to a list of items. */
export type GridConnection = {
  __typename?: 'GridConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GridEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GridCreateInput = {
  columnComponent?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<GridColumnsCreateManyInlineInput>;
  component?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  layout: GridLayout;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<GridCreateLocalizationsInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  theme: GridTheme;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width: Scalars['Int']['input'];
};

export type GridCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GridCreateLocalizationInput = {
  /** Localization input */
  data: GridCreateLocalizationDataInput;
  locale: Locale;
};

export type GridCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<GridCreateLocalizationInput>>;
};

export type GridCreateManyInlineInput = {
  /** Connect multiple existing Grid documents */
  connect?: InputMaybe<Array<GridWhereUniqueInput>>;
  /** Create and connect multiple existing Grid documents */
  create?: InputMaybe<Array<GridCreateInput>>;
};

export type GridCreateOneInlineInput = {
  /** Connect one existing Grid document */
  connect?: InputMaybe<GridWhereUniqueInput>;
  /** Create and connect one Grid document */
  create?: InputMaybe<GridCreateInput>;
};

/** An edge in a connection. */
export type GridEdge = {
  __typename?: 'GridEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Grid;
};

export enum GridLayout {
  Split = 'SPLIT',
  Stack = 'STACK'
}

/** Identifies documents */
export type GridManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GridWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GridWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GridWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  columnComponent?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  columnComponent_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  columnComponent_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  columnComponent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  columnComponent_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  columnComponent_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  columnComponent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  columnComponent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  columnComponent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  columnComponent_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  columns_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  columns_some?: InputMaybe<GridColumnsWhereInput>;
  component?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  component_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  component_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  component_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  component_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  component_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  component_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  component_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  component_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  component_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GridWhereStageInput>;
  documentInStages_none?: InputMaybe<GridWhereStageInput>;
  documentInStages_some?: InputMaybe<GridWhereStageInput>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<GridLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<GridLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<GridLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<GridLayout>>>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tag_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tag_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tag_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tag_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tag_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<GridTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<GridTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<GridTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<GridTheme>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum GridOrderByInput {
  ColumnComponentAsc = 'columnComponent_ASC',
  ColumnComponentDesc = 'columnComponent_DESC',
  ComponentAsc = 'component_ASC',
  ComponentDesc = 'component_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum GridTheme {
  Dark = 'DARK',
  Light = 'LIGHT',
  White = 'WHITE'
}

export type GridUpdateInput = {
  columnComponent?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<GridColumnsUpdateManyInlineInput>;
  component?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<GridLayout>;
  /** Manage document localizations */
  localizations?: InputMaybe<GridUpdateLocalizationsInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<GridTheme>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type GridUpdateLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GridUpdateLocalizationInput = {
  data: GridUpdateLocalizationDataInput;
  locale: Locale;
};

export type GridUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<GridCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<GridUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<GridUpsertLocalizationInput>>;
};

export type GridUpdateManyInlineInput = {
  /** Connect multiple existing Grid documents */
  connect?: InputMaybe<Array<GridConnectInput>>;
  /** Create and connect multiple Grid documents */
  create?: InputMaybe<Array<GridCreateInput>>;
  /** Delete multiple Grid documents */
  delete?: InputMaybe<Array<GridWhereUniqueInput>>;
  /** Disconnect multiple Grid documents */
  disconnect?: InputMaybe<Array<GridWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Grid documents */
  set?: InputMaybe<Array<GridWhereUniqueInput>>;
  /** Update multiple Grid documents */
  update?: InputMaybe<Array<GridUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Grid documents */
  upsert?: InputMaybe<Array<GridUpsertWithNestedWhereUniqueInput>>;
};

export type GridUpdateManyInput = {
  columnComponent?: InputMaybe<Scalars['String']['input']>;
  component?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<GridLayout>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<GridUpdateManyLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<GridTheme>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type GridUpdateManyLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GridUpdateManyLocalizationInput = {
  data: GridUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type GridUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<GridUpdateManyLocalizationInput>>;
};

export type GridUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GridUpdateManyInput;
  /** Document search */
  where: GridWhereInput;
};

export type GridUpdateOneInlineInput = {
  /** Connect existing Grid document */
  connect?: InputMaybe<GridWhereUniqueInput>;
  /** Create and connect one Grid document */
  create?: InputMaybe<GridCreateInput>;
  /** Delete currently connected Grid document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Grid document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Grid document */
  update?: InputMaybe<GridUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Grid document */
  upsert?: InputMaybe<GridUpsertWithNestedWhereUniqueInput>;
};

export type GridUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GridUpdateInput;
  /** Unique document search */
  where: GridWhereUniqueInput;
};

export type GridUpsertInput = {
  /** Create document if it didn't exist */
  create: GridCreateInput;
  /** Update document if it exists */
  update: GridUpdateInput;
};

export type GridUpsertLocalizationInput = {
  create: GridCreateLocalizationDataInput;
  locale: Locale;
  update: GridUpdateLocalizationDataInput;
};

export type GridUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GridUpsertInput;
  /** Unique document search */
  where: GridWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GridWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type GridWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GridWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GridWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GridWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  columnComponent?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  columnComponent_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  columnComponent_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  columnComponent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  columnComponent_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  columnComponent_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  columnComponent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  columnComponent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  columnComponent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  columnComponent_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  columns_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  columns_some?: InputMaybe<GridColumnsWhereInput>;
  component?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  component_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  component_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  component_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  component_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  component_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  component_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  component_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  component_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  component_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GridWhereStageInput>;
  documentInStages_none?: InputMaybe<GridWhereStageInput>;
  documentInStages_some?: InputMaybe<GridWhereStageInput>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<GridLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<GridLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<GridLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<GridLayout>>>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tag_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tag_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tag_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tag_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tag_starts_with?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<GridTheme>;
  /** All values that are contained in given list. */
  theme_in?: InputMaybe<Array<InputMaybe<GridTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  theme_not?: InputMaybe<GridTheme>;
  /** All values that are not contained in given list. */
  theme_not_in?: InputMaybe<Array<InputMaybe<GridTheme>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GridWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GridWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GridWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GridWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GridWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Grid record uniquely */
export type GridWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Hero = Node & {
  __typename?: 'Hero';
  buttons: Array<Button>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Hero>;
  /** List of Hero versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HeroButtonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonWhereInput>;
};


export type HeroCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type HeroHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type HeroPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HeroUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  buttons?: InputMaybe<ButtonCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeroCreateManyInlineInput = {
  /** Connect multiple existing Hero documents */
  connect?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Connect one existing Hero document */
  connect?: InputMaybe<HeroWhereUniqueInput>;
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttons_every?: InputMaybe<ButtonWhereInput>;
  buttons_none?: InputMaybe<ButtonWhereInput>;
  buttons_some?: InputMaybe<ButtonWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HeroWhereStageInput>;
  documentInStages_none?: InputMaybe<HeroWhereStageInput>;
  documentInStages_some?: InputMaybe<HeroWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HeroOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HeroUpdateInput = {
  buttons?: InputMaybe<ButtonUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Connect multiple existing Hero documents */
  connect?: InputMaybe<Array<HeroConnectInput>>;
  /** Create and connect multiple Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Disconnect multiple Hero documents */
  disconnect?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Hero documents */
  set?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero documents */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Hero documents */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueInput>>;
};

export type HeroUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Connect existing Hero document */
  connect?: InputMaybe<HeroWhereUniqueInput>;
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Hero document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type HeroWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttons_every?: InputMaybe<ButtonWhereInput>;
  buttons_none?: InputMaybe<ButtonWhereInput>;
  buttons_some?: InputMaybe<ButtonWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HeroWhereStageInput>;
  documentInStages_none?: InputMaybe<HeroWhereStageInput>;
  documentInStages_some?: InputMaybe<HeroWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HeroWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HeroWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  De = 'de',
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type LogoCloud = Node & {
  __typename?: 'LogoCloud';
  companies: Array<Company>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<LogoCloud>;
  /** List of LogoCloud versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type LogoCloudCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type LogoCloudCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LogoCloudDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LogoCloudHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type LogoCloudPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type LogoCloudPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LogoCloudScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LogoCloudUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LogoCloudConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LogoCloudWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogoCloudConnection = {
  __typename?: 'LogoCloudConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LogoCloudEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LogoCloudCreateInput = {
  companies?: InputMaybe<CompanyCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LogoCloudCreateManyInlineInput = {
  /** Connect multiple existing LogoCloud documents */
  connect?: InputMaybe<Array<LogoCloudWhereUniqueInput>>;
  /** Create and connect multiple existing LogoCloud documents */
  create?: InputMaybe<Array<LogoCloudCreateInput>>;
};

export type LogoCloudCreateOneInlineInput = {
  /** Connect one existing LogoCloud document */
  connect?: InputMaybe<LogoCloudWhereUniqueInput>;
  /** Create and connect one LogoCloud document */
  create?: InputMaybe<LogoCloudCreateInput>;
};

/** An edge in a connection. */
export type LogoCloudEdge = {
  __typename?: 'LogoCloudEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LogoCloud;
};

/** Identifies documents */
export type LogoCloudManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  companies_every?: InputMaybe<CompanyWhereInput>;
  companies_none?: InputMaybe<CompanyWhereInput>;
  companies_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LogoCloudWhereStageInput>;
  documentInStages_none?: InputMaybe<LogoCloudWhereStageInput>;
  documentInStages_some?: InputMaybe<LogoCloudWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LogoCloudOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LogoCloudUpdateInput = {
  companies?: InputMaybe<CompanyUpdateManyInlineInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LogoCloudUpdateManyInlineInput = {
  /** Connect multiple existing LogoCloud documents */
  connect?: InputMaybe<Array<LogoCloudConnectInput>>;
  /** Create and connect multiple LogoCloud documents */
  create?: InputMaybe<Array<LogoCloudCreateInput>>;
  /** Delete multiple LogoCloud documents */
  delete?: InputMaybe<Array<LogoCloudWhereUniqueInput>>;
  /** Disconnect multiple LogoCloud documents */
  disconnect?: InputMaybe<Array<LogoCloudWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LogoCloud documents */
  set?: InputMaybe<Array<LogoCloudWhereUniqueInput>>;
  /** Update multiple LogoCloud documents */
  update?: InputMaybe<Array<LogoCloudUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LogoCloud documents */
  upsert?: InputMaybe<Array<LogoCloudUpsertWithNestedWhereUniqueInput>>;
};

export type LogoCloudUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LogoCloudUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LogoCloudUpdateManyInput;
  /** Document search */
  where: LogoCloudWhereInput;
};

export type LogoCloudUpdateOneInlineInput = {
  /** Connect existing LogoCloud document */
  connect?: InputMaybe<LogoCloudWhereUniqueInput>;
  /** Create and connect one LogoCloud document */
  create?: InputMaybe<LogoCloudCreateInput>;
  /** Delete currently connected LogoCloud document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LogoCloud document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LogoCloud document */
  update?: InputMaybe<LogoCloudUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LogoCloud document */
  upsert?: InputMaybe<LogoCloudUpsertWithNestedWhereUniqueInput>;
};

export type LogoCloudUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LogoCloudUpdateInput;
  /** Unique document search */
  where: LogoCloudWhereUniqueInput;
};

export type LogoCloudUpsertInput = {
  /** Create document if it didn't exist */
  create: LogoCloudCreateInput;
  /** Update document if it exists */
  update: LogoCloudUpdateInput;
};

export type LogoCloudUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LogoCloudUpsertInput;
  /** Unique document search */
  where: LogoCloudWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LogoCloudWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LogoCloudWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoCloudWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  companies_every?: InputMaybe<CompanyWhereInput>;
  companies_none?: InputMaybe<CompanyWhereInput>;
  companies_some?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LogoCloudWhereStageInput>;
  documentInStages_none?: InputMaybe<LogoCloudWhereStageInput>;
  documentInStages_some?: InputMaybe<LogoCloudWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LogoCloudWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoCloudWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoCloudWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoCloudWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LogoCloudWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References LogoCloud record uniquely */
export type LogoCloudWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one banner */
  createBanner?: Maybe<Banner>;
  /** Create one blogPost */
  createBlogPost?: Maybe<BlogPost>;
  /** Create one breakpoint */
  createBreakpoint?: Maybe<Breakpoint>;
  /** Create one button */
  createButton?: Maybe<Button>;
  /** Create one company */
  createCompany?: Maybe<Company>;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Create one feature */
  createFeature?: Maybe<Feature>;
  /** Create one footer */
  createFooter?: Maybe<Footer>;
  /** Create one grid */
  createGrid?: Maybe<Grid>;
  /** Create one hero */
  createHero?: Maybe<Hero>;
  /** Create one logoCloud */
  createLogoCloud?: Maybe<LogoCloud>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one newsletter */
  createNewsletter?: Maybe<Newsletter>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one person */
  createPerson?: Maybe<Person>;
  /** Create one popUp */
  createPopUp?: Maybe<PopUp>;
  /** Create one pricingPlan */
  createPricingPlan?: Maybe<PricingPlan>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one seo */
  createSeo?: Maybe<Seo>;
  /** Create one stat */
  createStat?: Maybe<Stat>;
  /** Create one testimonial */
  createTestimonial?: Maybe<Testimonial>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one banner from _all_ existing stages. Returns deleted document. */
  deleteBanner?: Maybe<Banner>;
  /** Delete one blogPost from _all_ existing stages. Returns deleted document. */
  deleteBlogPost?: Maybe<BlogPost>;
  /** Delete one breakpoint from _all_ existing stages. Returns deleted document. */
  deleteBreakpoint?: Maybe<Breakpoint>;
  /** Delete one button from _all_ existing stages. Returns deleted document. */
  deleteButton?: Maybe<Button>;
  /** Delete one company from _all_ existing stages. Returns deleted document. */
  deleteCompany?: Maybe<Company>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Delete one feature from _all_ existing stages. Returns deleted document. */
  deleteFeature?: Maybe<Feature>;
  /** Delete one footer from _all_ existing stages. Returns deleted document. */
  deleteFooter?: Maybe<Footer>;
  /** Delete one grid from _all_ existing stages. Returns deleted document. */
  deleteGrid?: Maybe<Grid>;
  /** Delete one hero from _all_ existing stages. Returns deleted document. */
  deleteHero?: Maybe<Hero>;
  /** Delete one logoCloud from _all_ existing stages. Returns deleted document. */
  deleteLogoCloud?: Maybe<LogoCloud>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Banner documents
   * @deprecated Please use the new paginated many mutation (deleteManyBannersConnection)
   */
  deleteManyBanners: BatchPayload;
  /** Delete many Banner documents, return deleted documents */
  deleteManyBannersConnection: BannerConnection;
  /**
   * Delete many BlogPost documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogPostsConnection)
   */
  deleteManyBlogPosts: BatchPayload;
  /** Delete many BlogPost documents, return deleted documents */
  deleteManyBlogPostsConnection: BlogPostConnection;
  /**
   * Delete many Breakpoint documents
   * @deprecated Please use the new paginated many mutation (deleteManyBreakpointsConnection)
   */
  deleteManyBreakpoints: BatchPayload;
  /** Delete many Breakpoint documents, return deleted documents */
  deleteManyBreakpointsConnection: BreakpointConnection;
  /**
   * Delete many Button documents
   * @deprecated Please use the new paginated many mutation (deleteManyButtonsConnection)
   */
  deleteManyButtons: BatchPayload;
  /** Delete many Button documents, return deleted documents */
  deleteManyButtonsConnection: ButtonConnection;
  /**
   * Delete many Company documents
   * @deprecated Please use the new paginated many mutation (deleteManyCompaniesConnection)
   */
  deleteManyCompanies: BatchPayload;
  /** Delete many Company documents, return deleted documents */
  deleteManyCompaniesConnection: CompanyConnection;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /**
   * Delete many Feature documents
   * @deprecated Please use the new paginated many mutation (deleteManyFeaturesConnection)
   */
  deleteManyFeatures: BatchPayload;
  /** Delete many Feature documents, return deleted documents */
  deleteManyFeaturesConnection: FeatureConnection;
  /**
   * Delete many Footer documents
   * @deprecated Please use the new paginated many mutation (deleteManyFootersConnection)
   */
  deleteManyFooters: BatchPayload;
  /** Delete many Footer documents, return deleted documents */
  deleteManyFootersConnection: FooterConnection;
  /**
   * Delete many Grid documents
   * @deprecated Please use the new paginated many mutation (deleteManyGridsConnection)
   */
  deleteManyGrids: BatchPayload;
  /** Delete many Grid documents, return deleted documents */
  deleteManyGridsConnection: GridConnection;
  /**
   * Delete many Hero documents
   * @deprecated Please use the new paginated many mutation (deleteManyHeroesConnection)
   */
  deleteManyHeroes: BatchPayload;
  /** Delete many Hero documents, return deleted documents */
  deleteManyHeroesConnection: HeroConnection;
  /**
   * Delete many LogoCloud documents
   * @deprecated Please use the new paginated many mutation (deleteManyLogoCloudsConnection)
   */
  deleteManyLogoClouds: BatchPayload;
  /** Delete many LogoCloud documents, return deleted documents */
  deleteManyLogoCloudsConnection: LogoCloudConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Newsletter documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewslettersConnection)
   */
  deleteManyNewsletters: BatchPayload;
  /** Delete many Newsletter documents, return deleted documents */
  deleteManyNewslettersConnection: NewsletterConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Person documents
   * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
   */
  deleteManyPeople: BatchPayload;
  /** Delete many Person documents, return deleted documents */
  deleteManyPeopleConnection: PersonConnection;
  /**
   * Delete many PopUp documents
   * @deprecated Please use the new paginated many mutation (deleteManyPopUpsConnection)
   */
  deleteManyPopUps: BatchPayload;
  /** Delete many PopUp documents, return deleted documents */
  deleteManyPopUpsConnection: PopUpConnection;
  /**
   * Delete many PricingPlan documents
   * @deprecated Please use the new paginated many mutation (deleteManyPricingPlansConnection)
   */
  deleteManyPricingPlans: BatchPayload;
  /** Delete many PricingPlan documents, return deleted documents */
  deleteManyPricingPlansConnection: PricingPlanConnection;
  /**
   * Delete many Seo documents
   * @deprecated Please use the new paginated many mutation (deleteManySeosConnection)
   */
  deleteManySeos: BatchPayload;
  /** Delete many Seo documents, return deleted documents */
  deleteManySeosConnection: SeoConnection;
  /**
   * Delete many Stat documents
   * @deprecated Please use the new paginated many mutation (deleteManyStatsConnection)
   */
  deleteManyStats: BatchPayload;
  /** Delete many Stat documents, return deleted documents */
  deleteManyStatsConnection: StatConnection;
  /**
   * Delete many Testimonial documents
   * @deprecated Please use the new paginated many mutation (deleteManyTestimonialsConnection)
   */
  deleteManyTestimonials: BatchPayload;
  /** Delete many Testimonial documents, return deleted documents */
  deleteManyTestimonialsConnection: TestimonialConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one newsletter from _all_ existing stages. Returns deleted document. */
  deleteNewsletter?: Maybe<Newsletter>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one person from _all_ existing stages. Returns deleted document. */
  deletePerson?: Maybe<Person>;
  /** Delete one popUp from _all_ existing stages. Returns deleted document. */
  deletePopUp?: Maybe<PopUp>;
  /** Delete one pricingPlan from _all_ existing stages. Returns deleted document. */
  deletePricingPlan?: Maybe<PricingPlan>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one seo from _all_ existing stages. Returns deleted document. */
  deleteSeo?: Maybe<Seo>;
  /** Delete one stat from _all_ existing stages. Returns deleted document. */
  deleteStat?: Maybe<Stat>;
  /** Delete one testimonial from _all_ existing stages. Returns deleted document. */
  deleteTestimonial?: Maybe<Testimonial>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one banner */
  publishBanner?: Maybe<Banner>;
  /** Publish one blogPost */
  publishBlogPost?: Maybe<BlogPost>;
  /** Publish one breakpoint */
  publishBreakpoint?: Maybe<Breakpoint>;
  /** Publish one button */
  publishButton?: Maybe<Button>;
  /** Publish one company */
  publishCompany?: Maybe<Company>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Publish one feature */
  publishFeature?: Maybe<Feature>;
  /** Publish one footer */
  publishFooter?: Maybe<Footer>;
  /** Publish one grid */
  publishGrid?: Maybe<Grid>;
  /** Publish one hero */
  publishHero?: Maybe<Hero>;
  /** Publish one logoCloud */
  publishLogoCloud?: Maybe<LogoCloud>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Banner documents
   * @deprecated Please use the new paginated many mutation (publishManyBannersConnection)
   */
  publishManyBanners: BatchPayload;
  /** Publish many Banner documents */
  publishManyBannersConnection: BannerConnection;
  /**
   * Publish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogPostsConnection)
   */
  publishManyBlogPosts: BatchPayload;
  /** Publish many BlogPost documents */
  publishManyBlogPostsConnection: BlogPostConnection;
  /**
   * Publish many Breakpoint documents
   * @deprecated Please use the new paginated many mutation (publishManyBreakpointsConnection)
   */
  publishManyBreakpoints: BatchPayload;
  /** Publish many Breakpoint documents */
  publishManyBreakpointsConnection: BreakpointConnection;
  /**
   * Publish many Button documents
   * @deprecated Please use the new paginated many mutation (publishManyButtonsConnection)
   */
  publishManyButtons: BatchPayload;
  /** Publish many Button documents */
  publishManyButtonsConnection: ButtonConnection;
  /**
   * Publish many Company documents
   * @deprecated Please use the new paginated many mutation (publishManyCompaniesConnection)
   */
  publishManyCompanies: BatchPayload;
  /** Publish many Company documents */
  publishManyCompaniesConnection: CompanyConnection;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /**
   * Publish many Feature documents
   * @deprecated Please use the new paginated many mutation (publishManyFeaturesConnection)
   */
  publishManyFeatures: BatchPayload;
  /** Publish many Feature documents */
  publishManyFeaturesConnection: FeatureConnection;
  /**
   * Publish many Footer documents
   * @deprecated Please use the new paginated many mutation (publishManyFootersConnection)
   */
  publishManyFooters: BatchPayload;
  /** Publish many Footer documents */
  publishManyFootersConnection: FooterConnection;
  /**
   * Publish many Grid documents
   * @deprecated Please use the new paginated many mutation (publishManyGridsConnection)
   */
  publishManyGrids: BatchPayload;
  /** Publish many Grid documents */
  publishManyGridsConnection: GridConnection;
  /**
   * Publish many Hero documents
   * @deprecated Please use the new paginated many mutation (publishManyHeroesConnection)
   */
  publishManyHeroes: BatchPayload;
  /** Publish many Hero documents */
  publishManyHeroesConnection: HeroConnection;
  /**
   * Publish many LogoCloud documents
   * @deprecated Please use the new paginated many mutation (publishManyLogoCloudsConnection)
   */
  publishManyLogoClouds: BatchPayload;
  /** Publish many LogoCloud documents */
  publishManyLogoCloudsConnection: LogoCloudConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Newsletter documents
   * @deprecated Please use the new paginated many mutation (publishManyNewslettersConnection)
   */
  publishManyNewsletters: BatchPayload;
  /** Publish many Newsletter documents */
  publishManyNewslettersConnection: NewsletterConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Person documents
   * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
   */
  publishManyPeople: BatchPayload;
  /** Publish many Person documents */
  publishManyPeopleConnection: PersonConnection;
  /**
   * Publish many PopUp documents
   * @deprecated Please use the new paginated many mutation (publishManyPopUpsConnection)
   */
  publishManyPopUps: BatchPayload;
  /** Publish many PopUp documents */
  publishManyPopUpsConnection: PopUpConnection;
  /**
   * Publish many PricingPlan documents
   * @deprecated Please use the new paginated many mutation (publishManyPricingPlansConnection)
   */
  publishManyPricingPlans: BatchPayload;
  /** Publish many PricingPlan documents */
  publishManyPricingPlansConnection: PricingPlanConnection;
  /**
   * Publish many Seo documents
   * @deprecated Please use the new paginated many mutation (publishManySeosConnection)
   */
  publishManySeos: BatchPayload;
  /** Publish many Seo documents */
  publishManySeosConnection: SeoConnection;
  /**
   * Publish many Stat documents
   * @deprecated Please use the new paginated many mutation (publishManyStatsConnection)
   */
  publishManyStats: BatchPayload;
  /** Publish many Stat documents */
  publishManyStatsConnection: StatConnection;
  /**
   * Publish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (publishManyTestimonialsConnection)
   */
  publishManyTestimonials: BatchPayload;
  /** Publish many Testimonial documents */
  publishManyTestimonialsConnection: TestimonialConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one newsletter */
  publishNewsletter?: Maybe<Newsletter>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one person */
  publishPerson?: Maybe<Person>;
  /** Publish one popUp */
  publishPopUp?: Maybe<PopUp>;
  /** Publish one pricingPlan */
  publishPricingPlan?: Maybe<PricingPlan>;
  /** Publish one seo */
  publishSeo?: Maybe<Seo>;
  /** Publish one stat */
  publishStat?: Maybe<Stat>;
  /** Publish one testimonial */
  publishTestimonial?: Maybe<Testimonial>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one banner */
  schedulePublishBanner?: Maybe<Banner>;
  /** Schedule to publish one blogPost */
  schedulePublishBlogPost?: Maybe<BlogPost>;
  /** Schedule to publish one breakpoint */
  schedulePublishBreakpoint?: Maybe<Breakpoint>;
  /** Schedule to publish one button */
  schedulePublishButton?: Maybe<Button>;
  /** Schedule to publish one company */
  schedulePublishCompany?: Maybe<Company>;
  /** Schedule to publish one faq */
  schedulePublishFaq?: Maybe<Faq>;
  /** Schedule to publish one feature */
  schedulePublishFeature?: Maybe<Feature>;
  /** Schedule to publish one footer */
  schedulePublishFooter?: Maybe<Footer>;
  /** Schedule to publish one grid */
  schedulePublishGrid?: Maybe<Grid>;
  /** Schedule to publish one hero */
  schedulePublishHero?: Maybe<Hero>;
  /** Schedule to publish one logoCloud */
  schedulePublishLogoCloud?: Maybe<LogoCloud>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one newsletter */
  schedulePublishNewsletter?: Maybe<Newsletter>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one person */
  schedulePublishPerson?: Maybe<Person>;
  /** Schedule to publish one popUp */
  schedulePublishPopUp?: Maybe<PopUp>;
  /** Schedule to publish one pricingPlan */
  schedulePublishPricingPlan?: Maybe<PricingPlan>;
  /** Schedule to publish one seo */
  schedulePublishSeo?: Maybe<Seo>;
  /** Schedule to publish one stat */
  schedulePublishStat?: Maybe<Stat>;
  /** Schedule to publish one testimonial */
  schedulePublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one banner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBanner?: Maybe<Banner>;
  /** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlogPost?: Maybe<BlogPost>;
  /** Unpublish one breakpoint from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBreakpoint?: Maybe<Breakpoint>;
  /** Unpublish one button from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishButton?: Maybe<Button>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCompany?: Maybe<Company>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFaq?: Maybe<Faq>;
  /** Unpublish one feature from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFeature?: Maybe<Feature>;
  /** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFooter?: Maybe<Footer>;
  /** Unpublish one grid from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGrid?: Maybe<Grid>;
  /** Unpublish one hero from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHero?: Maybe<Hero>;
  /** Unpublish one logoCloud from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLogoCloud?: Maybe<LogoCloud>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one newsletter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewsletter?: Maybe<Newsletter>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPerson?: Maybe<Person>;
  /** Unpublish one popUp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPopUp?: Maybe<PopUp>;
  /** Unpublish one pricingPlan from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPricingPlan?: Maybe<PricingPlan>;
  /** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSeo?: Maybe<Seo>;
  /** Unpublish one stat from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStat?: Maybe<Stat>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one banner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBanner?: Maybe<Banner>;
  /** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlogPost?: Maybe<BlogPost>;
  /** Unpublish one breakpoint from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBreakpoint?: Maybe<Breakpoint>;
  /** Unpublish one button from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishButton?: Maybe<Button>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCompany?: Maybe<Company>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Unpublish one feature from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFeature?: Maybe<Feature>;
  /** Unpublish one footer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFooter?: Maybe<Footer>;
  /** Unpublish one grid from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGrid?: Maybe<Grid>;
  /** Unpublish one hero from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHero?: Maybe<Hero>;
  /** Unpublish one logoCloud from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLogoCloud?: Maybe<LogoCloud>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Banner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBannersConnection)
   */
  unpublishManyBanners: BatchPayload;
  /** Find many Banner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBannersConnection: BannerConnection;
  /**
   * Unpublish many BlogPost documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogPostsConnection)
   */
  unpublishManyBlogPosts: BatchPayload;
  /** Find many BlogPost documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogPostsConnection: BlogPostConnection;
  /**
   * Unpublish many Breakpoint documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBreakpointsConnection)
   */
  unpublishManyBreakpoints: BatchPayload;
  /** Find many Breakpoint documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBreakpointsConnection: BreakpointConnection;
  /**
   * Unpublish many Button documents
   * @deprecated Please use the new paginated many mutation (unpublishManyButtonsConnection)
   */
  unpublishManyButtons: BatchPayload;
  /** Find many Button documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyButtonsConnection: ButtonConnection;
  /**
   * Unpublish many Company documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCompaniesConnection)
   */
  unpublishManyCompanies: BatchPayload;
  /** Find many Company documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCompaniesConnection: CompanyConnection;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Unpublish many Feature documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFeaturesConnection)
   */
  unpublishManyFeatures: BatchPayload;
  /** Find many Feature documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFeaturesConnection: FeatureConnection;
  /**
   * Unpublish many Footer documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFootersConnection)
   */
  unpublishManyFooters: BatchPayload;
  /** Find many Footer documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFootersConnection: FooterConnection;
  /**
   * Unpublish many Grid documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGridsConnection)
   */
  unpublishManyGrids: BatchPayload;
  /** Find many Grid documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGridsConnection: GridConnection;
  /**
   * Unpublish many Hero documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHeroesConnection)
   */
  unpublishManyHeroes: BatchPayload;
  /** Find many Hero documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHeroesConnection: HeroConnection;
  /**
   * Unpublish many LogoCloud documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLogoCloudsConnection)
   */
  unpublishManyLogoClouds: BatchPayload;
  /** Find many LogoCloud documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLogoCloudsConnection: LogoCloudConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Newsletter documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewslettersConnection)
   */
  unpublishManyNewsletters: BatchPayload;
  /** Find many Newsletter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewslettersConnection: NewsletterConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Person documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
   */
  unpublishManyPeople: BatchPayload;
  /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPeopleConnection: PersonConnection;
  /**
   * Unpublish many PopUp documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPopUpsConnection)
   */
  unpublishManyPopUps: BatchPayload;
  /** Find many PopUp documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPopUpsConnection: PopUpConnection;
  /**
   * Unpublish many PricingPlan documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPricingPlansConnection)
   */
  unpublishManyPricingPlans: BatchPayload;
  /** Find many PricingPlan documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPricingPlansConnection: PricingPlanConnection;
  /**
   * Unpublish many Seo documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeosConnection)
   */
  unpublishManySeos: BatchPayload;
  /** Find many Seo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeosConnection: SeoConnection;
  /**
   * Unpublish many Stat documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStatsConnection)
   */
  unpublishManyStats: BatchPayload;
  /** Find many Stat documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStatsConnection: StatConnection;
  /**
   * Unpublish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTestimonialsConnection)
   */
  unpublishManyTestimonials: BatchPayload;
  /** Find many Testimonial documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTestimonialsConnection: TestimonialConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one newsletter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewsletter?: Maybe<Newsletter>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPerson?: Maybe<Person>;
  /** Unpublish one popUp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPopUp?: Maybe<PopUp>;
  /** Unpublish one pricingPlan from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPricingPlan?: Maybe<PricingPlan>;
  /** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeo?: Maybe<Seo>;
  /** Unpublish one stat from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStat?: Maybe<Stat>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTestimonial?: Maybe<Testimonial>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one banner */
  updateBanner?: Maybe<Banner>;
  /** Update one blogPost */
  updateBlogPost?: Maybe<BlogPost>;
  /** Update one breakpoint */
  updateBreakpoint?: Maybe<Breakpoint>;
  /** Update one button */
  updateButton?: Maybe<Button>;
  /** Update one company */
  updateCompany?: Maybe<Company>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Update one feature */
  updateFeature?: Maybe<Feature>;
  /** Update one footer */
  updateFooter?: Maybe<Footer>;
  /** Update one grid */
  updateGrid?: Maybe<Grid>;
  /** Update one hero */
  updateHero?: Maybe<Hero>;
  /** Update one logoCloud */
  updateLogoCloud?: Maybe<LogoCloud>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many banners
   * @deprecated Please use the new paginated many mutation (updateManyBannersConnection)
   */
  updateManyBanners: BatchPayload;
  /** Update many Banner documents */
  updateManyBannersConnection: BannerConnection;
  /**
   * Update many blogPosts
   * @deprecated Please use the new paginated many mutation (updateManyBlogPostsConnection)
   */
  updateManyBlogPosts: BatchPayload;
  /** Update many BlogPost documents */
  updateManyBlogPostsConnection: BlogPostConnection;
  /**
   * Update many breakpoints
   * @deprecated Please use the new paginated many mutation (updateManyBreakpointsConnection)
   */
  updateManyBreakpoints: BatchPayload;
  /** Update many Breakpoint documents */
  updateManyBreakpointsConnection: BreakpointConnection;
  /**
   * Update many buttons
   * @deprecated Please use the new paginated many mutation (updateManyButtonsConnection)
   */
  updateManyButtons: BatchPayload;
  /** Update many Button documents */
  updateManyButtonsConnection: ButtonConnection;
  /**
   * Update many companies
   * @deprecated Please use the new paginated many mutation (updateManyCompaniesConnection)
   */
  updateManyCompanies: BatchPayload;
  /** Update many Company documents */
  updateManyCompaniesConnection: CompanyConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /**
   * Update many features
   * @deprecated Please use the new paginated many mutation (updateManyFeaturesConnection)
   */
  updateManyFeatures: BatchPayload;
  /** Update many Feature documents */
  updateManyFeaturesConnection: FeatureConnection;
  /**
   * Update many footers
   * @deprecated Please use the new paginated many mutation (updateManyFootersConnection)
   */
  updateManyFooters: BatchPayload;
  /** Update many Footer documents */
  updateManyFootersConnection: FooterConnection;
  /**
   * Update many grids
   * @deprecated Please use the new paginated many mutation (updateManyGridsConnection)
   */
  updateManyGrids: BatchPayload;
  /** Update many Grid documents */
  updateManyGridsConnection: GridConnection;
  /**
   * Update many heroes
   * @deprecated Please use the new paginated many mutation (updateManyHeroesConnection)
   */
  updateManyHeroes: BatchPayload;
  /** Update many Hero documents */
  updateManyHeroesConnection: HeroConnection;
  /**
   * Update many logoClouds
   * @deprecated Please use the new paginated many mutation (updateManyLogoCloudsConnection)
   */
  updateManyLogoClouds: BatchPayload;
  /** Update many LogoCloud documents */
  updateManyLogoCloudsConnection: LogoCloudConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many newsletters
   * @deprecated Please use the new paginated many mutation (updateManyNewslettersConnection)
   */
  updateManyNewsletters: BatchPayload;
  /** Update many Newsletter documents */
  updateManyNewslettersConnection: NewsletterConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many people
   * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
   */
  updateManyPeople: BatchPayload;
  /** Update many Person documents */
  updateManyPeopleConnection: PersonConnection;
  /**
   * Update many popUps
   * @deprecated Please use the new paginated many mutation (updateManyPopUpsConnection)
   */
  updateManyPopUps: BatchPayload;
  /** Update many PopUp documents */
  updateManyPopUpsConnection: PopUpConnection;
  /**
   * Update many pricingPlans
   * @deprecated Please use the new paginated many mutation (updateManyPricingPlansConnection)
   */
  updateManyPricingPlans: BatchPayload;
  /** Update many PricingPlan documents */
  updateManyPricingPlansConnection: PricingPlanConnection;
  /**
   * Update many seos
   * @deprecated Please use the new paginated many mutation (updateManySeosConnection)
   */
  updateManySeos: BatchPayload;
  /** Update many Seo documents */
  updateManySeosConnection: SeoConnection;
  /**
   * Update many stats
   * @deprecated Please use the new paginated many mutation (updateManyStatsConnection)
   */
  updateManyStats: BatchPayload;
  /** Update many Stat documents */
  updateManyStatsConnection: StatConnection;
  /**
   * Update many testimonials
   * @deprecated Please use the new paginated many mutation (updateManyTestimonialsConnection)
   */
  updateManyTestimonials: BatchPayload;
  /** Update many Testimonial documents */
  updateManyTestimonialsConnection: TestimonialConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one newsletter */
  updateNewsletter?: Maybe<Newsletter>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one person */
  updatePerson?: Maybe<Person>;
  /** Update one popUp */
  updatePopUp?: Maybe<PopUp>;
  /** Update one pricingPlan */
  updatePricingPlan?: Maybe<PricingPlan>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one seo */
  updateSeo?: Maybe<Seo>;
  /** Update one stat */
  updateStat?: Maybe<Stat>;
  /** Update one testimonial */
  updateTestimonial?: Maybe<Testimonial>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one banner */
  upsertBanner?: Maybe<Banner>;
  /** Upsert one blogPost */
  upsertBlogPost?: Maybe<BlogPost>;
  /** Upsert one breakpoint */
  upsertBreakpoint?: Maybe<Breakpoint>;
  /** Upsert one button */
  upsertButton?: Maybe<Button>;
  /** Upsert one company */
  upsertCompany?: Maybe<Company>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Upsert one feature */
  upsertFeature?: Maybe<Feature>;
  /** Upsert one footer */
  upsertFooter?: Maybe<Footer>;
  /** Upsert one grid */
  upsertGrid?: Maybe<Grid>;
  /** Upsert one hero */
  upsertHero?: Maybe<Hero>;
  /** Upsert one logoCloud */
  upsertLogoCloud?: Maybe<LogoCloud>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one newsletter */
  upsertNewsletter?: Maybe<Newsletter>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one person */
  upsertPerson?: Maybe<Person>;
  /** Upsert one popUp */
  upsertPopUp?: Maybe<PopUp>;
  /** Upsert one pricingPlan */
  upsertPricingPlan?: Maybe<PricingPlan>;
  /** Upsert one seo */
  upsertSeo?: Maybe<Seo>;
  /** Upsert one stat */
  upsertStat?: Maybe<Stat>;
  /** Upsert one testimonial */
  upsertTestimonial?: Maybe<Testimonial>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBannerArgs = {
  data: BannerCreateInput;
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostCreateInput;
};


export type MutationCreateBreakpointArgs = {
  data: BreakpointCreateInput;
};


export type MutationCreateButtonArgs = {
  data: ButtonCreateInput;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateFeatureArgs = {
  data: FeatureCreateInput;
};


export type MutationCreateFooterArgs = {
  data: FooterCreateInput;
};


export type MutationCreateGridArgs = {
  data: GridCreateInput;
};


export type MutationCreateHeroArgs = {
  data: HeroCreateInput;
};


export type MutationCreateLogoCloudArgs = {
  data: LogoCloudCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreateNewsletterArgs = {
  data: NewsletterCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreatePopUpArgs = {
  data: PopUpCreateInput;
};


export type MutationCreatePricingPlanArgs = {
  data: PricingPlanCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSeoArgs = {
  data: SeoCreateInput;
};


export type MutationCreateStatArgs = {
  data: StatCreateInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBannerArgs = {
  where: BannerWhereUniqueInput;
};


export type MutationDeleteBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
};


export type MutationDeleteBreakpointArgs = {
  where: BreakpointWhereUniqueInput;
};


export type MutationDeleteButtonArgs = {
  where: ButtonWhereUniqueInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type MutationDeleteFooterArgs = {
  where: FooterWhereUniqueInput;
};


export type MutationDeleteGridArgs = {
  where: GridWhereUniqueInput;
};


export type MutationDeleteHeroArgs = {
  where: HeroWhereUniqueInput;
};


export type MutationDeleteLogoCloudArgs = {
  where: LogoCloudWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBannersArgs = {
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationDeleteManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationDeleteManyBlogPostsArgs = {
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationDeleteManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationDeleteManyBreakpointsArgs = {
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationDeleteManyBreakpointsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationDeleteManyButtonsArgs = {
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationDeleteManyButtonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationDeleteManyCompaniesArgs = {
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationDeleteManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationDeleteManyFaqsArgs = {
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyFeaturesArgs = {
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationDeleteManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationDeleteManyFootersArgs = {
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationDeleteManyFootersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationDeleteManyGridsArgs = {
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationDeleteManyGridsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationDeleteManyHeroesArgs = {
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationDeleteManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationDeleteManyLogoCloudsArgs = {
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationDeleteManyLogoCloudsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNewslettersArgs = {
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationDeleteManyNewslettersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPeopleArgs = {
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationDeleteManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationDeleteManyPopUpsArgs = {
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationDeleteManyPopUpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationDeleteManyPricingPlansArgs = {
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationDeleteManyPricingPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationDeleteManySeosArgs = {
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationDeleteManySeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationDeleteManyStatsArgs = {
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationDeleteManyStatsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationDeleteManyTestimonialsArgs = {
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeleteNewsletterArgs = {
  where: NewsletterWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};


export type MutationDeletePopUpArgs = {
  where: PopUpWhereUniqueInput;
};


export type MutationDeletePricingPlanArgs = {
  where: PricingPlanWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSeoArgs = {
  where: SeoWhereUniqueInput;
};


export type MutationDeleteStatArgs = {
  where: StatWhereUniqueInput;
};


export type MutationDeleteTestimonialArgs = {
  where: TestimonialWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBannerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: BannerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBlogPostArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: BlogPostWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBreakpointArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: BreakpointWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishButtonArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: ButtonWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCompanyArgs = {
  to?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationPublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishFeatureArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: FeatureWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishFooterArgs = {
  to?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationPublishGridArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: GridWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishHeroArgs = {
  to?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationPublishLogoCloudArgs = {
  to?: Array<Stage>;
  where: LogoCloudWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBannersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BannerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BannerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBlogPostsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogPostManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBreakpointsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BreakpointManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBreakpointsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BreakpointManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyButtonsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ButtonManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyButtonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ButtonManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCompaniesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationPublishManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationPublishManyFaqsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFeaturesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeatureManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeatureManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFootersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationPublishManyFootersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationPublishManyGridsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<GridManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyGridsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<GridManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyHeroesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationPublishManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationPublishManyLogoCloudsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationPublishManyLogoCloudsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNewslettersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyNewslettersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPeopleArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationPublishManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationPublishManyPopUpsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationPublishManyPopUpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationPublishManyPricingPlansArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPricingPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManySeosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationPublishManySeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationPublishManyStatsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<StatManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyStatsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<StatManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyTestimonialsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishNewsletterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: NewsletterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPersonArgs = {
  to?: Array<Stage>;
  where: PersonWhereUniqueInput;
};


export type MutationPublishPopUpArgs = {
  to?: Array<Stage>;
  where: PopUpWhereUniqueInput;
};


export type MutationPublishPricingPlanArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PricingPlanWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishSeoArgs = {
  to?: Array<Stage>;
  where: SeoWhereUniqueInput;
};


export type MutationPublishStatArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: StatWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishTestimonialArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBannerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BannerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBlogPostArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BlogPostWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBreakpointArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BreakpointWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishButtonArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ButtonWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCompanyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationSchedulePublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishFeatureArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FeatureWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishFooterArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationSchedulePublishGridArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: GridWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishHeroArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationSchedulePublishLogoCloudArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LogoCloudWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishNewsletterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NewsletterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPersonArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PersonWhereUniqueInput;
};


export type MutationSchedulePublishPopUpArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PopUpWhereUniqueInput;
};


export type MutationSchedulePublishPricingPlanArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PricingPlanWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishSeoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SeoWhereUniqueInput;
};


export type MutationSchedulePublishStatArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: StatWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishTestimonialArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBannerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BannerWhereUniqueInput;
};


export type MutationScheduleUnpublishBlogPostArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BlogPostWhereUniqueInput;
};


export type MutationScheduleUnpublishBreakpointArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BreakpointWhereUniqueInput;
};


export type MutationScheduleUnpublishButtonArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ButtonWhereUniqueInput;
};


export type MutationScheduleUnpublishCompanyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CompanyWhereUniqueInput;
};


export type MutationScheduleUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FaqWhereUniqueInput;
};


export type MutationScheduleUnpublishFeatureArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FeatureWhereUniqueInput;
};


export type MutationScheduleUnpublishFooterArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: FooterWhereUniqueInput;
};


export type MutationScheduleUnpublishGridArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: GridWhereUniqueInput;
};


export type MutationScheduleUnpublishHeroArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: HeroWhereUniqueInput;
};


export type MutationScheduleUnpublishLogoCloudArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: LogoCloudWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishNewsletterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NewsletterWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPersonArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PersonWhereUniqueInput;
};


export type MutationScheduleUnpublishPopUpArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PopUpWhereUniqueInput;
};


export type MutationScheduleUnpublishPricingPlanArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PricingPlanWhereUniqueInput;
};


export type MutationScheduleUnpublishSeoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SeoWhereUniqueInput;
};


export type MutationScheduleUnpublishStatArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: StatWhereUniqueInput;
};


export type MutationScheduleUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBannerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BannerWhereUniqueInput;
};


export type MutationUnpublishBlogPostArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BlogPostWhereUniqueInput;
};


export type MutationUnpublishBreakpointArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: BreakpointWhereUniqueInput;
};


export type MutationUnpublishButtonArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ButtonWhereUniqueInput;
};


export type MutationUnpublishCompanyArgs = {
  from?: Array<Stage>;
  where: CompanyWhereUniqueInput;
};


export type MutationUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FaqWhereUniqueInput;
};


export type MutationUnpublishFeatureArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FeatureWhereUniqueInput;
};


export type MutationUnpublishFooterArgs = {
  from?: Array<Stage>;
  where: FooterWhereUniqueInput;
};


export type MutationUnpublishGridArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: GridWhereUniqueInput;
};


export type MutationUnpublishHeroArgs = {
  from?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationUnpublishLogoCloudArgs = {
  from?: Array<Stage>;
  where: LogoCloudWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBannersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationUnpublishManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationUnpublishManyBlogPostsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUnpublishManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUnpublishManyBreakpointsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationUnpublishManyBreakpointsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationUnpublishManyButtonsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationUnpublishManyButtonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationUnpublishManyCompaniesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUnpublishManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUnpublishManyFaqsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyFeaturesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUnpublishManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUnpublishManyFootersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationUnpublishManyFootersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationUnpublishManyGridsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationUnpublishManyGridsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationUnpublishManyHeroesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUnpublishManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUnpublishManyLogoCloudsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationUnpublishManyLogoCloudsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNewslettersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationUnpublishManyNewslettersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPeopleArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationUnpublishManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationUnpublishManyPopUpsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationUnpublishManyPopUpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationUnpublishManyPricingPlansArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationUnpublishManyPricingPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationUnpublishManySeosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationUnpublishManySeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationUnpublishManyStatsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationUnpublishManyStatsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishNewsletterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NewsletterWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPersonArgs = {
  from?: Array<Stage>;
  where: PersonWhereUniqueInput;
};


export type MutationUnpublishPopUpArgs = {
  from?: Array<Stage>;
  where: PopUpWhereUniqueInput;
};


export type MutationUnpublishPricingPlanArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PricingPlanWhereUniqueInput;
};


export type MutationUnpublishSeoArgs = {
  from?: Array<Stage>;
  where: SeoWhereUniqueInput;
};


export type MutationUnpublishStatArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: StatWhereUniqueInput;
};


export type MutationUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBannerArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};


export type MutationUpdateBlogPostArgs = {
  data: BlogPostUpdateInput;
  where: BlogPostWhereUniqueInput;
};


export type MutationUpdateBreakpointArgs = {
  data: BreakpointUpdateInput;
  where: BreakpointWhereUniqueInput;
};


export type MutationUpdateButtonArgs = {
  data: ButtonUpdateInput;
  where: ButtonWhereUniqueInput;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateFeatureArgs = {
  data: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpdateFooterArgs = {
  data: FooterUpdateInput;
  where: FooterWhereUniqueInput;
};


export type MutationUpdateGridArgs = {
  data: GridUpdateInput;
  where: GridWhereUniqueInput;
};


export type MutationUpdateHeroArgs = {
  data: HeroUpdateInput;
  where: HeroWhereUniqueInput;
};


export type MutationUpdateLogoCloudArgs = {
  data: LogoCloudUpdateInput;
  where: LogoCloudWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBannersArgs = {
  data: BannerUpdateManyInput;
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationUpdateManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BannerUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannerManyWhereInput>;
};


export type MutationUpdateManyBlogPostsArgs = {
  data: BlogPostUpdateManyInput;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUpdateManyBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BlogPostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostManyWhereInput>;
};


export type MutationUpdateManyBreakpointsArgs = {
  data: BreakpointUpdateManyInput;
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationUpdateManyBreakpointsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BreakpointUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BreakpointManyWhereInput>;
};


export type MutationUpdateManyButtonsArgs = {
  data: ButtonUpdateManyInput;
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationUpdateManyButtonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ButtonUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonManyWhereInput>;
};


export type MutationUpdateManyCompaniesArgs = {
  data: CompanyUpdateManyInput;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUpdateManyCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CompanyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyManyWhereInput>;
};


export type MutationUpdateManyFaqsArgs = {
  data: FaqUpdateManyInput;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FaqUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyFeaturesArgs = {
  data: FeatureUpdateManyInput;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUpdateManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FeatureUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUpdateManyFootersArgs = {
  data: FooterUpdateManyInput;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationUpdateManyFootersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FooterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterManyWhereInput>;
};


export type MutationUpdateManyGridsArgs = {
  data: GridUpdateManyInput;
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationUpdateManyGridsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: GridUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridManyWhereInput>;
};


export type MutationUpdateManyHeroesArgs = {
  data: HeroUpdateManyInput;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUpdateManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: HeroUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUpdateManyLogoCloudsArgs = {
  data: LogoCloudUpdateManyInput;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationUpdateManyLogoCloudsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: LogoCloudUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogoCloudManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNewslettersArgs = {
  data: NewsletterUpdateManyInput;
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationUpdateManyNewslettersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NewsletterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsletterManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPeopleArgs = {
  data: PersonUpdateManyInput;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationUpdateManyPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PersonUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonManyWhereInput>;
};


export type MutationUpdateManyPopUpsArgs = {
  data: PopUpUpdateManyInput;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationUpdateManyPopUpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PopUpUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PopUpManyWhereInput>;
};


export type MutationUpdateManyPricingPlansArgs = {
  data: PricingPlanUpdateManyInput;
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationUpdateManyPricingPlansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PricingPlanUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PricingPlanManyWhereInput>;
};


export type MutationUpdateManySeosArgs = {
  data: SeoUpdateManyInput;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationUpdateManySeosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SeoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoManyWhereInput>;
};


export type MutationUpdateManyStatsArgs = {
  data: StatUpdateManyInput;
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationUpdateManyStatsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: StatUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatManyWhereInput>;
};


export type MutationUpdateManyTestimonialsArgs = {
  data: TestimonialUpdateManyInput;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TestimonialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdateNewsletterArgs = {
  data: NewsletterUpdateInput;
  where: NewsletterWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdatePopUpArgs = {
  data: PopUpUpdateInput;
  where: PopUpWhereUniqueInput;
};


export type MutationUpdatePricingPlanArgs = {
  data: PricingPlanUpdateInput;
  where: PricingPlanWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSeoArgs = {
  data: SeoUpdateInput;
  where: SeoWhereUniqueInput;
};


export type MutationUpdateStatArgs = {
  data: StatUpdateInput;
  where: StatWhereUniqueInput;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialUpdateInput;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBannerArgs = {
  upsert: BannerUpsertInput;
  where: BannerWhereUniqueInput;
};


export type MutationUpsertBlogPostArgs = {
  upsert: BlogPostUpsertInput;
  where: BlogPostWhereUniqueInput;
};


export type MutationUpsertBreakpointArgs = {
  upsert: BreakpointUpsertInput;
  where: BreakpointWhereUniqueInput;
};


export type MutationUpsertButtonArgs = {
  upsert: ButtonUpsertInput;
  where: ButtonWhereUniqueInput;
};


export type MutationUpsertCompanyArgs = {
  upsert: CompanyUpsertInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  upsert: FaqUpsertInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpsertFeatureArgs = {
  upsert: FeatureUpsertInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpsertFooterArgs = {
  upsert: FooterUpsertInput;
  where: FooterWhereUniqueInput;
};


export type MutationUpsertGridArgs = {
  upsert: GridUpsertInput;
  where: GridWhereUniqueInput;
};


export type MutationUpsertHeroArgs = {
  upsert: HeroUpsertInput;
  where: HeroWhereUniqueInput;
};


export type MutationUpsertLogoCloudArgs = {
  upsert: LogoCloudUpsertInput;
  where: LogoCloudWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertNewsletterArgs = {
  upsert: NewsletterUpsertInput;
  where: NewsletterWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPersonArgs = {
  upsert: PersonUpsertInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpsertPopUpArgs = {
  upsert: PopUpUpsertInput;
  where: PopUpWhereUniqueInput;
};


export type MutationUpsertPricingPlanArgs = {
  upsert: PricingPlanUpsertInput;
  where: PricingPlanWhereUniqueInput;
};


export type MutationUpsertSeoArgs = {
  upsert: SeoUpsertInput;
  where: SeoWhereUniqueInput;
};


export type MutationUpsertStatArgs = {
  upsert: StatUpsertInput;
  where: StatWhereUniqueInput;
};


export type MutationUpsertTestimonialArgs = {
  upsert: TestimonialUpsertInput;
  where: TestimonialWhereUniqueInput;
};

export type Navigation = Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NavigationPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Newsletter = Node & {
  __typename?: 'Newsletter';
  blogPosts: Array<BlogPost>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  ctaLabel?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Newsletter>;
  /** List of Newsletter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Newsletter>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NewsletterBlogPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type NewsletterCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NewsletterCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NewsletterHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NewsletterLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type NewsletterPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type NewsletterPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NewsletterPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NewsletterUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NewsletterUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewsletterWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewsletterConnection = {
  __typename?: 'NewsletterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewsletterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewsletterCreateInput = {
  blogPosts?: InputMaybe<BlogPostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NewsletterCreateLocalizationsInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  /** subtitle input for default locale (en) */
  subtitle: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewsletterCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  subtitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewsletterCreateLocalizationInput = {
  /** Localization input */
  data: NewsletterCreateLocalizationDataInput;
  locale: Locale;
};

export type NewsletterCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NewsletterCreateLocalizationInput>>;
};

export type NewsletterCreateManyInlineInput = {
  /** Connect multiple existing Newsletter documents */
  connect?: InputMaybe<Array<NewsletterWhereUniqueInput>>;
  /** Create and connect multiple existing Newsletter documents */
  create?: InputMaybe<Array<NewsletterCreateInput>>;
};

export type NewsletterCreateOneInlineInput = {
  /** Connect one existing Newsletter document */
  connect?: InputMaybe<NewsletterWhereUniqueInput>;
  /** Create and connect one Newsletter document */
  create?: InputMaybe<NewsletterCreateInput>;
};

/** An edge in a connection. */
export type NewsletterEdge = {
  __typename?: 'NewsletterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Newsletter;
};

/** Identifies documents */
export type NewsletterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<NewsletterWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewsletterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CtaLabelAsc = 'ctaLabel_ASC',
  CtaLabelDesc = 'ctaLabel_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewsletterUpdateInput = {
  blogPosts?: InputMaybe<BlogPostUpdateManyInlineInput>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NewsletterUpdateLocalizationsInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterUpdateLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterUpdateLocalizationInput = {
  data: NewsletterUpdateLocalizationDataInput;
  locale: Locale;
};

export type NewsletterUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NewsletterCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NewsletterUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NewsletterUpsertLocalizationInput>>;
};

export type NewsletterUpdateManyInlineInput = {
  /** Connect multiple existing Newsletter documents */
  connect?: InputMaybe<Array<NewsletterConnectInput>>;
  /** Create and connect multiple Newsletter documents */
  create?: InputMaybe<Array<NewsletterCreateInput>>;
  /** Delete multiple Newsletter documents */
  delete?: InputMaybe<Array<NewsletterWhereUniqueInput>>;
  /** Disconnect multiple Newsletter documents */
  disconnect?: InputMaybe<Array<NewsletterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Newsletter documents */
  set?: InputMaybe<Array<NewsletterWhereUniqueInput>>;
  /** Update multiple Newsletter documents */
  update?: InputMaybe<Array<NewsletterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Newsletter documents */
  upsert?: InputMaybe<Array<NewsletterUpsertWithNestedWhereUniqueInput>>;
};

export type NewsletterUpdateManyInput = {
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NewsletterUpdateManyLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterUpdateManyLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterUpdateManyLocalizationInput = {
  data: NewsletterUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NewsletterUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NewsletterUpdateManyLocalizationInput>>;
};

export type NewsletterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewsletterUpdateManyInput;
  /** Document search */
  where: NewsletterWhereInput;
};

export type NewsletterUpdateOneInlineInput = {
  /** Connect existing Newsletter document */
  connect?: InputMaybe<NewsletterWhereUniqueInput>;
  /** Create and connect one Newsletter document */
  create?: InputMaybe<NewsletterCreateInput>;
  /** Delete currently connected Newsletter document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Newsletter document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Newsletter document */
  update?: InputMaybe<NewsletterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Newsletter document */
  upsert?: InputMaybe<NewsletterUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewsletterUpdateInput;
  /** Unique document search */
  where: NewsletterWhereUniqueInput;
};

export type NewsletterUpsertInput = {
  /** Create document if it didn't exist */
  create: NewsletterCreateInput;
  /** Update document if it exists */
  update: NewsletterUpdateInput;
};

export type NewsletterUpsertLocalizationInput = {
  create: NewsletterCreateLocalizationDataInput;
  locale: Locale;
  update: NewsletterUpdateLocalizationDataInput;
};

export type NewsletterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewsletterUpsertInput;
  /** Unique document search */
  where: NewsletterWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewsletterWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NewsletterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<NewsletterWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewsletterWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewsletterWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Newsletter record uniquely */
export type NewsletterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  blocks: Array<PageBlocks>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  footer?: Maybe<Footer>;
  footerPrimary?: Maybe<Footer>;
  footerSecondary?: Maybe<Footer>;
  hero?: Maybe<Hero>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  marketing: Array<PageMarketingMaterial>;
  navigation?: Maybe<Navigation>;
  navigationLabel?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageFooterArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageFooterPrimaryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageFooterSecondaryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PageMarketingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageBlocks = Breakpoint | Grid | LogoCloud | Testimonial;

export type PageBlocksConnectInput = {
  Breakpoint?: InputMaybe<BreakpointConnectInput>;
  Grid?: InputMaybe<GridConnectInput>;
  LogoCloud?: InputMaybe<LogoCloudConnectInput>;
  Testimonial?: InputMaybe<TestimonialConnectInput>;
};

export type PageBlocksCreateInput = {
  Breakpoint?: InputMaybe<BreakpointCreateInput>;
  Grid?: InputMaybe<GridCreateInput>;
  LogoCloud?: InputMaybe<LogoCloudCreateInput>;
  Testimonial?: InputMaybe<TestimonialCreateInput>;
};

export type PageBlocksCreateManyInlineInput = {
  /** Connect multiple existing PageBlocks documents */
  connect?: InputMaybe<Array<PageBlocksWhereUniqueInput>>;
  /** Create and connect multiple existing PageBlocks documents */
  create?: InputMaybe<Array<PageBlocksCreateInput>>;
};

export type PageBlocksCreateOneInlineInput = {
  /** Connect one existing PageBlocks document */
  connect?: InputMaybe<PageBlocksWhereUniqueInput>;
  /** Create and connect one PageBlocks document */
  create?: InputMaybe<PageBlocksCreateInput>;
};

export type PageBlocksUpdateInput = {
  Breakpoint?: InputMaybe<BreakpointUpdateInput>;
  Grid?: InputMaybe<GridUpdateInput>;
  LogoCloud?: InputMaybe<LogoCloudUpdateInput>;
  Testimonial?: InputMaybe<TestimonialUpdateInput>;
};

export type PageBlocksUpdateManyInlineInput = {
  /** Connect multiple existing PageBlocks documents */
  connect?: InputMaybe<Array<PageBlocksConnectInput>>;
  /** Create and connect multiple PageBlocks documents */
  create?: InputMaybe<Array<PageBlocksCreateInput>>;
  /** Delete multiple PageBlocks documents */
  delete?: InputMaybe<Array<PageBlocksWhereUniqueInput>>;
  /** Disconnect multiple PageBlocks documents */
  disconnect?: InputMaybe<Array<PageBlocksWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageBlocks documents */
  set?: InputMaybe<Array<PageBlocksWhereUniqueInput>>;
  /** Update multiple PageBlocks documents */
  update?: InputMaybe<Array<PageBlocksUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageBlocks documents */
  upsert?: InputMaybe<Array<PageBlocksUpsertWithNestedWhereUniqueInput>>;
};

export type PageBlocksUpdateManyWithNestedWhereInput = {
  Breakpoint?: InputMaybe<BreakpointUpdateManyWithNestedWhereInput>;
  Grid?: InputMaybe<GridUpdateManyWithNestedWhereInput>;
  LogoCloud?: InputMaybe<LogoCloudUpdateManyWithNestedWhereInput>;
  Testimonial?: InputMaybe<TestimonialUpdateManyWithNestedWhereInput>;
};

export type PageBlocksUpdateOneInlineInput = {
  /** Connect existing PageBlocks document */
  connect?: InputMaybe<PageBlocksWhereUniqueInput>;
  /** Create and connect one PageBlocks document */
  create?: InputMaybe<PageBlocksCreateInput>;
  /** Delete currently connected PageBlocks document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageBlocks document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageBlocks document */
  update?: InputMaybe<PageBlocksUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageBlocks document */
  upsert?: InputMaybe<PageBlocksUpsertWithNestedWhereUniqueInput>;
};

export type PageBlocksUpdateWithNestedWhereUniqueInput = {
  Breakpoint?: InputMaybe<BreakpointUpdateWithNestedWhereUniqueInput>;
  Grid?: InputMaybe<GridUpdateWithNestedWhereUniqueInput>;
  LogoCloud?: InputMaybe<LogoCloudUpdateWithNestedWhereUniqueInput>;
  Testimonial?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
};

export type PageBlocksUpsertWithNestedWhereUniqueInput = {
  Breakpoint?: InputMaybe<BreakpointUpsertWithNestedWhereUniqueInput>;
  Grid?: InputMaybe<GridUpsertWithNestedWhereUniqueInput>;
  LogoCloud?: InputMaybe<LogoCloudUpsertWithNestedWhereUniqueInput>;
  Testimonial?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type PageBlocksWhereInput = {
  Breakpoint?: InputMaybe<BreakpointWhereInput>;
  Grid?: InputMaybe<GridWhereInput>;
  LogoCloud?: InputMaybe<LogoCloudWhereInput>;
  Testimonial?: InputMaybe<TestimonialWhereInput>;
};

export type PageBlocksWhereUniqueInput = {
  Breakpoint?: InputMaybe<BreakpointWhereUniqueInput>;
  Grid?: InputMaybe<GridWhereUniqueInput>;
  LogoCloud?: InputMaybe<LogoCloudWhereUniqueInput>;
  Testimonial?: InputMaybe<TestimonialWhereUniqueInput>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  blocks?: InputMaybe<PageBlocksCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  footer?: InputMaybe<FooterCreateOneInlineInput>;
  footerPrimary?: InputMaybe<FooterCreateOneInlineInput>;
  footerSecondary?: InputMaybe<FooterCreateOneInlineInput>;
  hero?: InputMaybe<HeroCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  marketing?: InputMaybe<PageMarketingMaterialCreateManyInlineInput>;
  navigation?: InputMaybe<NavigationCreateOneInlineInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoCreateOneInlineInput>;
  slug: Scalars['String']['input'];
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  blocks_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  blocks_some?: InputMaybe<PageBlocksWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  footer?: InputMaybe<FooterWhereInput>;
  footerPrimary?: InputMaybe<FooterWhereInput>;
  footerSecondary?: InputMaybe<FooterWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  marketing_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  marketing_some?: InputMaybe<PageMarketingMaterialWhereInput>;
  navigation?: InputMaybe<NavigationWhereInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type PageMarketingMaterial = Banner | Newsletter | PopUp;

export type PageMarketingMaterialConnectInput = {
  Banner?: InputMaybe<BannerConnectInput>;
  Newsletter?: InputMaybe<NewsletterConnectInput>;
  PopUp?: InputMaybe<PopUpConnectInput>;
};

export type PageMarketingMaterialCreateInput = {
  Banner?: InputMaybe<BannerCreateInput>;
  Newsletter?: InputMaybe<NewsletterCreateInput>;
  PopUp?: InputMaybe<PopUpCreateInput>;
};

export type PageMarketingMaterialCreateManyInlineInput = {
  /** Connect multiple existing PageMarketingMaterial documents */
  connect?: InputMaybe<Array<PageMarketingMaterialWhereUniqueInput>>;
  /** Create and connect multiple existing PageMarketingMaterial documents */
  create?: InputMaybe<Array<PageMarketingMaterialCreateInput>>;
};

export type PageMarketingMaterialCreateOneInlineInput = {
  /** Connect one existing PageMarketingMaterial document */
  connect?: InputMaybe<PageMarketingMaterialWhereUniqueInput>;
  /** Create and connect one PageMarketingMaterial document */
  create?: InputMaybe<PageMarketingMaterialCreateInput>;
};

export type PageMarketingMaterialUpdateInput = {
  Banner?: InputMaybe<BannerUpdateInput>;
  Newsletter?: InputMaybe<NewsletterUpdateInput>;
  PopUp?: InputMaybe<PopUpUpdateInput>;
};

export type PageMarketingMaterialUpdateManyInlineInput = {
  /** Connect multiple existing PageMarketingMaterial documents */
  connect?: InputMaybe<Array<PageMarketingMaterialConnectInput>>;
  /** Create and connect multiple PageMarketingMaterial documents */
  create?: InputMaybe<Array<PageMarketingMaterialCreateInput>>;
  /** Delete multiple PageMarketingMaterial documents */
  delete?: InputMaybe<Array<PageMarketingMaterialWhereUniqueInput>>;
  /** Disconnect multiple PageMarketingMaterial documents */
  disconnect?: InputMaybe<Array<PageMarketingMaterialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageMarketingMaterial documents */
  set?: InputMaybe<Array<PageMarketingMaterialWhereUniqueInput>>;
  /** Update multiple PageMarketingMaterial documents */
  update?: InputMaybe<Array<PageMarketingMaterialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageMarketingMaterial documents */
  upsert?: InputMaybe<Array<PageMarketingMaterialUpsertWithNestedWhereUniqueInput>>;
};

export type PageMarketingMaterialUpdateManyWithNestedWhereInput = {
  Banner?: InputMaybe<BannerUpdateManyWithNestedWhereInput>;
  Newsletter?: InputMaybe<NewsletterUpdateManyWithNestedWhereInput>;
  PopUp?: InputMaybe<PopUpUpdateManyWithNestedWhereInput>;
};

export type PageMarketingMaterialUpdateOneInlineInput = {
  /** Connect existing PageMarketingMaterial document */
  connect?: InputMaybe<PageMarketingMaterialWhereUniqueInput>;
  /** Create and connect one PageMarketingMaterial document */
  create?: InputMaybe<PageMarketingMaterialCreateInput>;
  /** Delete currently connected PageMarketingMaterial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageMarketingMaterial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageMarketingMaterial document */
  update?: InputMaybe<PageMarketingMaterialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageMarketingMaterial document */
  upsert?: InputMaybe<PageMarketingMaterialUpsertWithNestedWhereUniqueInput>;
};

export type PageMarketingMaterialUpdateWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterUpdateWithNestedWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpUpdateWithNestedWhereUniqueInput>;
};

export type PageMarketingMaterialUpsertWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterUpsertWithNestedWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpUpsertWithNestedWhereUniqueInput>;
};

export type PageMarketingMaterialWhereInput = {
  Banner?: InputMaybe<BannerWhereInput>;
  Newsletter?: InputMaybe<NewsletterWhereInput>;
  PopUp?: InputMaybe<PopUpWhereInput>;
};

export type PageMarketingMaterialWhereUniqueInput = {
  Banner?: InputMaybe<BannerWhereUniqueInput>;
  Newsletter?: InputMaybe<NewsletterWhereUniqueInput>;
  PopUp?: InputMaybe<PopUpWhereUniqueInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationLabelAsc = 'navigationLabel_ASC',
  NavigationLabelDesc = 'navigationLabel_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  blocks?: InputMaybe<PageBlocksUpdateManyInlineInput>;
  footer?: InputMaybe<FooterUpdateOneInlineInput>;
  footerPrimary?: InputMaybe<FooterUpdateOneInlineInput>;
  footerSecondary?: InputMaybe<FooterUpdateOneInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  marketing?: InputMaybe<PageMarketingMaterialUpdateManyInlineInput>;
  navigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationDataInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty */
  blocks_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  blocks_some?: InputMaybe<PageBlocksWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  footer?: InputMaybe<FooterWhereInput>;
  footerPrimary?: InputMaybe<FooterWhereInput>;
  footerSecondary?: InputMaybe<FooterWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  marketing_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  marketing_some?: InputMaybe<PageMarketingMaterialWhereInput>;
  navigation?: InputMaybe<NavigationWhereInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Person = Node & {
  __typename?: 'Person';
  company?: Maybe<Company>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Person>;
  grids: Array<Grid>;
  /** List of Person versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Asset>;
  posts: Array<BlogPost>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  role?: Maybe<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  testimonials: Array<Testimonial>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PersonCompanyArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PersonGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type PersonHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PersonPhotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type PersonPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PersonTestimonialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type PersonUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonCreateInput = {
  company?: InputMaybe<CompanyCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  grids?: InputMaybe<GridCreateManyInlineInput>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<AssetCreateOneInlineInput>;
  posts?: InputMaybe<BlogPostCreateManyInlineInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  testimonials?: InputMaybe<TestimonialCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonCreateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Create and connect multiple existing Person documents */
  create?: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Connect one existing Person document */
  connect?: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Person;
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PersonWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<BlogPostWhereInput>;
  posts_none?: InputMaybe<BlogPostWhereInput>;
  posts_some?: InputMaybe<BlogPostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  testimonials_every?: InputMaybe<TestimonialWhereInput>;
  testimonials_none?: InputMaybe<TestimonialWhereInput>;
  testimonials_some?: InputMaybe<TestimonialWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneInlineInput>;
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetUpdateOneInlineInput>;
  posts?: InputMaybe<BlogPostUpdateManyInlineInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  testimonials?: InputMaybe<TestimonialUpdateManyInlineInput>;
};

export type PersonUpdateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Create and connect multiple Person documents */
  create?: InputMaybe<Array<PersonCreateInput>>;
  /** Delete multiple Person documents */
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Disconnect multiple Person documents */
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Person documents */
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person documents */
  update?: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Person documents */
  upsert?: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonUpdateManyInput;
  /** Document search */
  where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
  /** Connect existing Person document */
  connect?: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
  /** Delete currently connected Person document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Person document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Person document */
  update?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonUpdateInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonUpsertInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PersonWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<CompanyWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PersonWhereStageInput>;
  documentInStages_none?: InputMaybe<PersonWhereStageInput>;
  documentInStages_some?: InputMaybe<PersonWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<BlogPostWhereInput>;
  posts_none?: InputMaybe<BlogPostWhereInput>;
  posts_some?: InputMaybe<BlogPostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  testimonials_every?: InputMaybe<TestimonialWhereInput>;
  testimonials_none?: InputMaybe<TestimonialWhereInput>;
  testimonials_some?: InputMaybe<TestimonialWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PersonWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PopUp = Node & {
  __typename?: 'PopUp';
  blogPosts: Array<BlogPost>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<PopUp>;
  /** List of PopUp versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};


export type PopUpBlogPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type PopUpCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PopUpDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PopUpHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PopUpImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PopUpPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type PopUpPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PopUpScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PopUpUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PopUpConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PopUpWhereUniqueInput;
};

/** A connection to a list of items. */
export type PopUpConnection = {
  __typename?: 'PopUpConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PopUpEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PopUpCreateInput = {
  blogPosts?: InputMaybe<BlogPostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PopUpCreateManyInlineInput = {
  /** Connect multiple existing PopUp documents */
  connect?: InputMaybe<Array<PopUpWhereUniqueInput>>;
  /** Create and connect multiple existing PopUp documents */
  create?: InputMaybe<Array<PopUpCreateInput>>;
};

export type PopUpCreateOneInlineInput = {
  /** Connect one existing PopUp document */
  connect?: InputMaybe<PopUpWhereUniqueInput>;
  /** Create and connect one PopUp document */
  create?: InputMaybe<PopUpCreateInput>;
};

/** An edge in a connection. */
export type PopUpEdge = {
  __typename?: 'PopUpEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PopUp;
};

/** Identifies documents */
export type PopUpManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PopUpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PopUpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PopUpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PopUpWhereStageInput>;
  documentInStages_none?: InputMaybe<PopUpWhereStageInput>;
  documentInStages_some?: InputMaybe<PopUpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PopUpOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum PopUpTheme {
  Dark = 'DARK',
  Light = 'LIGHT',
  White = 'WHITE'
}

export type PopUpUpdateInput = {
  blogPosts?: InputMaybe<BlogPostUpdateManyInlineInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PopUpUpdateManyInlineInput = {
  /** Connect multiple existing PopUp documents */
  connect?: InputMaybe<Array<PopUpConnectInput>>;
  /** Create and connect multiple PopUp documents */
  create?: InputMaybe<Array<PopUpCreateInput>>;
  /** Delete multiple PopUp documents */
  delete?: InputMaybe<Array<PopUpWhereUniqueInput>>;
  /** Disconnect multiple PopUp documents */
  disconnect?: InputMaybe<Array<PopUpWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PopUp documents */
  set?: InputMaybe<Array<PopUpWhereUniqueInput>>;
  /** Update multiple PopUp documents */
  update?: InputMaybe<Array<PopUpUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PopUp documents */
  upsert?: InputMaybe<Array<PopUpUpsertWithNestedWhereUniqueInput>>;
};

export type PopUpUpdateManyInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PopUpUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PopUpUpdateManyInput;
  /** Document search */
  where: PopUpWhereInput;
};

export type PopUpUpdateOneInlineInput = {
  /** Connect existing PopUp document */
  connect?: InputMaybe<PopUpWhereUniqueInput>;
  /** Create and connect one PopUp document */
  create?: InputMaybe<PopUpCreateInput>;
  /** Delete currently connected PopUp document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PopUp document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PopUp document */
  update?: InputMaybe<PopUpUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PopUp document */
  upsert?: InputMaybe<PopUpUpsertWithNestedWhereUniqueInput>;
};

export type PopUpUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PopUpUpdateInput;
  /** Unique document search */
  where: PopUpWhereUniqueInput;
};

export type PopUpUpsertInput = {
  /** Create document if it didn't exist */
  create: PopUpCreateInput;
  /** Update document if it exists */
  update: PopUpUpdateInput;
};

export type PopUpUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PopUpUpsertInput;
  /** Unique document search */
  where: PopUpWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PopUpWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PopUpWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PopUpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PopUpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PopUpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPosts_every?: InputMaybe<BlogPostWhereInput>;
  blogPosts_none?: InputMaybe<BlogPostWhereInput>;
  blogPosts_some?: InputMaybe<BlogPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PopUpWhereStageInput>;
  documentInStages_none?: InputMaybe<PopUpWhereStageInput>;
  documentInStages_some?: InputMaybe<PopUpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PopUpWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PopUpWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PopUpWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PopUpWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PopUpWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PopUp record uniquely */
export type PopUpWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PricingPlan = Node & {
  __typename?: 'PricingPlan';
  annualPrice: Scalars['Int']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<PricingPlan>;
  grids: Array<Grid>;
  /** List of PricingPlan versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  included: Array<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PricingPlan>;
  monthlyPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PricingPlanCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PricingPlanCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PricingPlanDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PricingPlanGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type PricingPlanHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PricingPlanLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PricingPlanPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PricingPlanPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PricingPlanScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PricingPlanUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PricingPlanUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PricingPlanConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PricingPlanWhereUniqueInput;
};

/** A connection to a list of items. */
export type PricingPlanConnection = {
  __typename?: 'PricingPlanConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PricingPlanEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PricingPlanCreateInput = {
  annualPrice: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  grids?: InputMaybe<GridCreateManyInlineInput>;
  /** included input for default locale (en) */
  included: Array<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PricingPlanCreateLocalizationsInput>;
  monthlyPrice: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingPlanCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  included: Array<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingPlanCreateLocalizationInput = {
  /** Localization input */
  data: PricingPlanCreateLocalizationDataInput;
  locale: Locale;
};

export type PricingPlanCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PricingPlanCreateLocalizationInput>>;
};

export type PricingPlanCreateManyInlineInput = {
  /** Connect multiple existing PricingPlan documents */
  connect?: InputMaybe<Array<PricingPlanWhereUniqueInput>>;
  /** Create and connect multiple existing PricingPlan documents */
  create?: InputMaybe<Array<PricingPlanCreateInput>>;
};

export type PricingPlanCreateOneInlineInput = {
  /** Connect one existing PricingPlan document */
  connect?: InputMaybe<PricingPlanWhereUniqueInput>;
  /** Create and connect one PricingPlan document */
  create?: InputMaybe<PricingPlanCreateInput>;
};

/** An edge in a connection. */
export type PricingPlanEdge = {
  __typename?: 'PricingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PricingPlan;
};

/** Identifies documents */
export type PricingPlanManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  annualPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  annualPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  annualPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  annualPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  annualPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  annualPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  annualPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  annualPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PricingPlanWhereStageInput>;
  documentInStages_none?: InputMaybe<PricingPlanWhereStageInput>;
  documentInStages_some?: InputMaybe<PricingPlanWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  monthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  monthlyPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  monthlyPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  monthlyPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  monthlyPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  monthlyPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  monthlyPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  monthlyPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PricingPlanOrderByInput {
  AnnualPriceAsc = 'annualPrice_ASC',
  AnnualPriceDesc = 'annualPrice_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IncludedAsc = 'included_ASC',
  IncludedDesc = 'included_DESC',
  MonthlyPriceAsc = 'monthlyPrice_ASC',
  MonthlyPriceDesc = 'monthlyPrice_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PricingPlanUpdateInput = {
  annualPrice?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  /** included input for default locale (en) */
  included?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Manage document localizations */
  localizations?: InputMaybe<PricingPlanUpdateLocalizationsInput>;
  monthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlanUpdateLocalizationDataInput = {
  included?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PricingPlanUpdateLocalizationInput = {
  data: PricingPlanUpdateLocalizationDataInput;
  locale: Locale;
};

export type PricingPlanUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PricingPlanCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PricingPlanUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PricingPlanUpsertLocalizationInput>>;
};

export type PricingPlanUpdateManyInlineInput = {
  /** Connect multiple existing PricingPlan documents */
  connect?: InputMaybe<Array<PricingPlanConnectInput>>;
  /** Create and connect multiple PricingPlan documents */
  create?: InputMaybe<Array<PricingPlanCreateInput>>;
  /** Delete multiple PricingPlan documents */
  delete?: InputMaybe<Array<PricingPlanWhereUniqueInput>>;
  /** Disconnect multiple PricingPlan documents */
  disconnect?: InputMaybe<Array<PricingPlanWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PricingPlan documents */
  set?: InputMaybe<Array<PricingPlanWhereUniqueInput>>;
  /** Update multiple PricingPlan documents */
  update?: InputMaybe<Array<PricingPlanUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PricingPlan documents */
  upsert?: InputMaybe<Array<PricingPlanUpsertWithNestedWhereUniqueInput>>;
};

export type PricingPlanUpdateManyInput = {
  annualPrice?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** included input for default locale (en) */
  included?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PricingPlanUpdateManyLocalizationsInput>;
  monthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PricingPlanUpdateManyLocalizationDataInput = {
  included?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PricingPlanUpdateManyLocalizationInput = {
  data: PricingPlanUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PricingPlanUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PricingPlanUpdateManyLocalizationInput>>;
};

export type PricingPlanUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PricingPlanUpdateManyInput;
  /** Document search */
  where: PricingPlanWhereInput;
};

export type PricingPlanUpdateOneInlineInput = {
  /** Connect existing PricingPlan document */
  connect?: InputMaybe<PricingPlanWhereUniqueInput>;
  /** Create and connect one PricingPlan document */
  create?: InputMaybe<PricingPlanCreateInput>;
  /** Delete currently connected PricingPlan document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PricingPlan document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PricingPlan document */
  update?: InputMaybe<PricingPlanUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PricingPlan document */
  upsert?: InputMaybe<PricingPlanUpsertWithNestedWhereUniqueInput>;
};

export type PricingPlanUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PricingPlanUpdateInput;
  /** Unique document search */
  where: PricingPlanWhereUniqueInput;
};

export type PricingPlanUpsertInput = {
  /** Create document if it didn't exist */
  create: PricingPlanCreateInput;
  /** Update document if it exists */
  update: PricingPlanUpdateInput;
};

export type PricingPlanUpsertLocalizationInput = {
  create: PricingPlanCreateLocalizationDataInput;
  locale: Locale;
  update: PricingPlanUpdateLocalizationDataInput;
};

export type PricingPlanUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PricingPlanUpsertInput;
  /** Unique document search */
  where: PricingPlanWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PricingPlanWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PricingPlanWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingPlanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  annualPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  annualPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  annualPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  annualPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  annualPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  annualPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  annualPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  annualPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PricingPlanWhereStageInput>;
  documentInStages_none?: InputMaybe<PricingPlanWhereStageInput>;
  documentInStages_some?: InputMaybe<PricingPlanWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  included?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  included_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  included_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  included_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  included_not?: InputMaybe<Array<Scalars['String']['input']>>;
  monthlyPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  monthlyPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  monthlyPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  monthlyPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  monthlyPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  monthlyPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  monthlyPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  monthlyPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PricingPlanWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingPlanWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingPlanWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingPlanWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PricingPlanWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PricingPlan record uniquely */
export type PricingPlanWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single banner */
  banner?: Maybe<Banner>;
  /** Retrieve document version */
  bannerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple banners */
  banners: Array<Banner>;
  /** Retrieve multiple banners using the Relay connection interface */
  bannersConnection: BannerConnection;
  /** Retrieve a single blogPost */
  blogPost?: Maybe<BlogPost>;
  /** Retrieve document version */
  blogPostVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogPosts */
  blogPosts: Array<BlogPost>;
  /** Retrieve multiple blogPosts using the Relay connection interface */
  blogPostsConnection: BlogPostConnection;
  /** Retrieve a single breakpoint */
  breakpoint?: Maybe<Breakpoint>;
  /** Retrieve document version */
  breakpointVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple breakpoints */
  breakpoints: Array<Breakpoint>;
  /** Retrieve multiple breakpoints using the Relay connection interface */
  breakpointsConnection: BreakpointConnection;
  /** Retrieve a single button */
  button?: Maybe<Button>;
  /** Retrieve document version */
  buttonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple buttons */
  buttons: Array<Button>;
  /** Retrieve multiple buttons using the Relay connection interface */
  buttonsConnection: ButtonConnection;
  /** Retrieve multiple companies */
  companies: Array<Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: CompanyConnection;
  /** Retrieve a single company */
  company?: Maybe<Company>;
  /** Retrieve document version */
  companyVersion?: Maybe<DocumentVersion>;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve a single feature */
  feature?: Maybe<Feature>;
  /** Retrieve document version */
  featureVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple features */
  features: Array<Feature>;
  /** Retrieve multiple features using the Relay connection interface */
  featuresConnection: FeatureConnection;
  /** Retrieve a single footer */
  footer?: Maybe<Footer>;
  /** Retrieve document version */
  footerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple footers */
  footers: Array<Footer>;
  /** Retrieve multiple footers using the Relay connection interface */
  footersConnection: FooterConnection;
  /** Retrieve a single grid */
  grid?: Maybe<Grid>;
  /** Retrieve document version */
  gridVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple grids */
  grids: Array<Grid>;
  /** Retrieve multiple grids using the Relay connection interface */
  gridsConnection: GridConnection;
  /** Retrieve a single hero */
  hero?: Maybe<Hero>;
  /** Retrieve document version */
  heroVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple heroes */
  heroes: Array<Hero>;
  /** Retrieve multiple heroes using the Relay connection interface */
  heroesConnection: HeroConnection;
  /** Retrieve a single logoCloud */
  logoCloud?: Maybe<LogoCloud>;
  /** Retrieve document version */
  logoCloudVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple logoClouds */
  logoClouds: Array<LogoCloud>;
  /** Retrieve multiple logoClouds using the Relay connection interface */
  logoCloudsConnection: LogoCloudConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Retrieve a single newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Retrieve document version */
  newsletterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newsletters */
  newsletters: Array<Newsletter>;
  /** Retrieve multiple newsletters using the Relay connection interface */
  newslettersConnection: NewsletterConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve multiple people */
  people: Array<Person>;
  /** Retrieve multiple people using the Relay connection interface */
  peopleConnection: PersonConnection;
  /** Retrieve a single person */
  person?: Maybe<Person>;
  /** Retrieve document version */
  personVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single popUp */
  popUp?: Maybe<PopUp>;
  /** Retrieve document version */
  popUpVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple popUps */
  popUps: Array<PopUp>;
  /** Retrieve multiple popUps using the Relay connection interface */
  popUpsConnection: PopUpConnection;
  /** Retrieve a single pricingPlan */
  pricingPlan?: Maybe<PricingPlan>;
  /** Retrieve document version */
  pricingPlanVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pricingPlans */
  pricingPlans: Array<PricingPlan>;
  /** Retrieve multiple pricingPlans using the Relay connection interface */
  pricingPlansConnection: PricingPlanConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single seo */
  seo?: Maybe<Seo>;
  /** Retrieve document version */
  seoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple seos */
  seos: Array<Seo>;
  /** Retrieve multiple seos using the Relay connection interface */
  seosConnection: SeoConnection;
  /** Retrieve a single stat */
  stat?: Maybe<Stat>;
  /** Retrieve document version */
  statVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple stats */
  stats: Array<Stat>;
  /** Retrieve multiple stats using the Relay connection interface */
  statsConnection: StatConnection;
  /** Retrieve a single testimonial */
  testimonial?: Maybe<Testimonial>;
  /** Retrieve document version */
  testimonialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple testimonials */
  testimonials: Array<Testimonial>;
  /** Retrieve multiple testimonials using the Relay connection interface */
  testimonialsConnection: TestimonialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBannerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BannerWhereUniqueInput;
};


export type QueryBannerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBannersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BannerWhereInput>;
};


export type QueryBannersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BannerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BannerWhereInput>;
};


export type QueryBlogPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogPostWhereUniqueInput;
};


export type QueryBlogPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type QueryBlogPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BlogPostWhereInput>;
};


export type QueryBreakpointArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BreakpointWhereUniqueInput;
};


export type QueryBreakpointVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBreakpointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BreakpointOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BreakpointWhereInput>;
};


export type QueryBreakpointsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BreakpointOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BreakpointWhereInput>;
};


export type QueryButtonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ButtonWhereUniqueInput;
};


export type QueryButtonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryButtonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ButtonWhereInput>;
};


export type QueryButtonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ButtonWhereInput>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CompanyWhereUniqueInput;
};


export type QueryCompanyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEntitiesArgs = {
  where: Array<EntityWhereInput>;
};


export type QueryFaqArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FaqWhereUniqueInput;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryFeatureArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FeatureWhereUniqueInput;
};


export type QueryFeatureVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeatureWhereInput>;
};


export type QueryFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeatureWhereInput>;
};


export type QueryFooterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FooterWhereUniqueInput;
};


export type QueryFooterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFootersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FooterWhereInput>;
};


export type QueryFootersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FooterWhereInput>;
};


export type QueryGridArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GridWhereUniqueInput;
};


export type QueryGridVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GridOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GridWhereInput>;
};


export type QueryGridsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GridOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GridWhereInput>;
};


export type QueryHeroArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HeroWhereUniqueInput;
};


export type QueryHeroVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHeroesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryLogoCloudArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LogoCloudWhereUniqueInput;
};


export type QueryLogoCloudVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLogoCloudsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogoCloudOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LogoCloudWhereInput>;
};


export type QueryLogoCloudsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogoCloudOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LogoCloudWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNewsletterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewsletterWhereUniqueInput;
};


export type QueryNewsletterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewslettersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterWhereInput>;
};


export type QueryNewslettersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPeopleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPersonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PersonWhereUniqueInput;
};


export type QueryPersonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPopUpArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PopUpWhereUniqueInput;
};


export type QueryPopUpVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPopUpsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PopUpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PopUpWhereInput>;
};


export type QueryPopUpsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PopUpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PopUpWhereInput>;
};


export type QueryPricingPlanArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PricingPlanWhereUniqueInput;
};


export type QueryPricingPlanVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPricingPlansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PricingPlanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PricingPlanWhereInput>;
};


export type QueryPricingPlansConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PricingPlanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PricingPlanWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySeoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SeoWhereUniqueInput;
};


export type QuerySeoVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySeosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SeoWhereInput>;
};


export type QuerySeosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SeoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SeoWhereInput>;
};


export type QueryStatArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StatWhereUniqueInput;
};


export type QueryStatVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StatWhereInput>;
};


export type QueryStatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StatWhereInput>;
};


export type QueryTestimonialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TestimonialWhereUniqueInput;
};


export type QueryTestimonialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTestimonialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Banner | BlogPost | Breakpoint | Button | Company | Faq | Feature | Footer | Grid | Hero | LogoCloud | Navigation | Newsletter | Page | Person | PopUp | PricingPlan | Seo | Stat | Testimonial;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Seo = Node & {
  __typename?: 'Seo';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Seo>;
  /** List of Seo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  keywords: Array<Scalars['String']['output']>;
  noIndex: Scalars['Boolean']['output'];
  parent?: Maybe<SeoSeo>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SeoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SeoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SeoHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SeoImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SeoParentArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SeoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SeoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SeoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SeoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  noIndex: Scalars['Boolean']['input'];
  parent?: InputMaybe<SeoSeoCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeoCreateManyInlineInput = {
  /** Connect multiple existing Seo documents */
  connect?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Create and connect multiple existing Seo documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Connect one existing Seo document */
  connect?: InputMaybe<SeoWhereUniqueInput>;
  /** Create and connect one Seo document */
  create?: InputMaybe<SeoCreateInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SeoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Seo;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SeoWhereStageInput>;
  documentInStages_none?: InputMaybe<SeoWhereStageInput>;
  documentInStages_some?: InputMaybe<SeoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the union is connected to the given models */
  parent?: InputMaybe<SeoSeoWhereInput>;
  /** All values in which the union is empty */
  parent_empty?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SeoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SeoSeo = BlogPost | Page;

export type SeoSeoConnectInput = {
  BlogPost?: InputMaybe<BlogPostConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type SeoSeoCreateInput = {
  BlogPost?: InputMaybe<BlogPostCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type SeoSeoCreateManyInlineInput = {
  /** Connect multiple existing SeoSeo documents */
  connect?: InputMaybe<Array<SeoSeoWhereUniqueInput>>;
  /** Create and connect multiple existing SeoSeo documents */
  create?: InputMaybe<Array<SeoSeoCreateInput>>;
};

export type SeoSeoCreateOneInlineInput = {
  /** Connect one existing SeoSeo document */
  connect?: InputMaybe<SeoSeoWhereUniqueInput>;
  /** Create and connect one SeoSeo document */
  create?: InputMaybe<SeoSeoCreateInput>;
};

export type SeoSeoUpdateInput = {
  BlogPost?: InputMaybe<BlogPostUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type SeoSeoUpdateManyInlineInput = {
  /** Connect multiple existing SeoSeo documents */
  connect?: InputMaybe<Array<SeoSeoConnectInput>>;
  /** Create and connect multiple SeoSeo documents */
  create?: InputMaybe<Array<SeoSeoCreateInput>>;
  /** Delete multiple SeoSeo documents */
  delete?: InputMaybe<Array<SeoSeoWhereUniqueInput>>;
  /** Disconnect multiple SeoSeo documents */
  disconnect?: InputMaybe<Array<SeoSeoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoSeo documents */
  set?: InputMaybe<Array<SeoSeoWhereUniqueInput>>;
  /** Update multiple SeoSeo documents */
  update?: InputMaybe<Array<SeoSeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoSeo documents */
  upsert?: InputMaybe<Array<SeoSeoUpsertWithNestedWhereUniqueInput>>;
};

export type SeoSeoUpdateManyWithNestedWhereInput = {
  BlogPost?: InputMaybe<BlogPostUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type SeoSeoUpdateOneInlineInput = {
  /** Connect existing SeoSeo document */
  connect?: InputMaybe<SeoSeoWhereUniqueInput>;
  /** Create and connect one SeoSeo document */
  create?: InputMaybe<SeoSeoCreateInput>;
  /** Delete currently connected SeoSeo document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SeoSeo document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SeoSeo document */
  update?: InputMaybe<SeoSeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoSeo document */
  upsert?: InputMaybe<SeoSeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoSeoUpdateWithNestedWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type SeoSeoUpsertWithNestedWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type SeoSeoWhereInput = {
  BlogPost?: InputMaybe<BlogPostWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type SeoSeoWhereUniqueInput = {
  BlogPost?: InputMaybe<BlogPostWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type SeoUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<SeoSeoUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyInlineInput = {
  /** Connect multiple existing Seo documents */
  connect?: InputMaybe<Array<SeoConnectInput>>;
  /** Create and connect multiple Seo documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
  /** Delete multiple Seo documents */
  delete?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Disconnect multiple Seo documents */
  disconnect?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Seo documents */
  set?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple Seo documents */
  update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Seo documents */
  upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueInput>>;
};

export type SeoUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoUpdateManyInput;
  /** Document search */
  where: SeoWhereInput;
};

export type SeoUpdateOneInlineInput = {
  /** Connect existing Seo document */
  connect?: InputMaybe<SeoWhereUniqueInput>;
  /** Create and connect one Seo document */
  create?: InputMaybe<SeoCreateInput>;
  /** Delete currently connected Seo document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Seo document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Seo document */
  update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoUpdateInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoUpsertInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SeoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SeoWhereStageInput>;
  documentInStages_none?: InputMaybe<SeoWhereStageInput>;
  documentInStages_some?: InputMaybe<SeoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the union is connected to the given models */
  parent?: InputMaybe<SeoSeoWhereInput>;
  /** All values in which the union is empty */
  parent_empty?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SeoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SeoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Stat = Node & {
  __typename?: 'Stat';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Stat>;
  grids: Array<Grid>;
  /** List of Stat versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Stat>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value: Scalars['String']['output'];
};


export type StatCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StatCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StatDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type StatGridsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridWhereInput>;
};


export type StatHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type StatLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type StatPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StatPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StatScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StatUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type StatUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StatConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StatWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatConnection = {
  __typename?: 'StatConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StatEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StatCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  grids?: InputMaybe<GridCreateManyInlineInput>;
  /** label input for default locale (en) */
  label: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StatCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** value input for default locale (en) */
  value: Scalars['String']['input'];
};

export type StatCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value: Scalars['String']['input'];
};

export type StatCreateLocalizationInput = {
  /** Localization input */
  data: StatCreateLocalizationDataInput;
  locale: Locale;
};

export type StatCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StatCreateLocalizationInput>>;
};

export type StatCreateManyInlineInput = {
  /** Connect multiple existing Stat documents */
  connect?: InputMaybe<Array<StatWhereUniqueInput>>;
  /** Create and connect multiple existing Stat documents */
  create?: InputMaybe<Array<StatCreateInput>>;
};

export type StatCreateOneInlineInput = {
  /** Connect one existing Stat document */
  connect?: InputMaybe<StatWhereUniqueInput>;
  /** Create and connect one Stat document */
  create?: InputMaybe<StatCreateInput>;
};

/** An edge in a connection. */
export type StatEdge = {
  __typename?: 'StatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Stat;
};

/** Identifies documents */
export type StatManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StatWhereStageInput>;
  documentInStages_none?: InputMaybe<StatWhereStageInput>;
  documentInStages_some?: InputMaybe<StatWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StatOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type StatUpdateInput = {
  grids?: InputMaybe<GridUpdateManyInlineInput>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<StatUpdateLocalizationsInput>;
  /** value input for default locale (en) */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateLocalizationInput = {
  data: StatUpdateLocalizationDataInput;
  locale: Locale;
};

export type StatUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StatCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StatUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StatUpsertLocalizationInput>>;
};

export type StatUpdateManyInlineInput = {
  /** Connect multiple existing Stat documents */
  connect?: InputMaybe<Array<StatConnectInput>>;
  /** Create and connect multiple Stat documents */
  create?: InputMaybe<Array<StatCreateInput>>;
  /** Delete multiple Stat documents */
  delete?: InputMaybe<Array<StatWhereUniqueInput>>;
  /** Disconnect multiple Stat documents */
  disconnect?: InputMaybe<Array<StatWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Stat documents */
  set?: InputMaybe<Array<StatWhereUniqueInput>>;
  /** Update multiple Stat documents */
  update?: InputMaybe<Array<StatUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Stat documents */
  upsert?: InputMaybe<Array<StatUpsertWithNestedWhereUniqueInput>>;
};

export type StatUpdateManyInput = {
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<StatUpdateManyLocalizationsInput>;
  /** value input for default locale (en) */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyLocalizationInput = {
  data: StatUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StatUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StatUpdateManyLocalizationInput>>;
};

export type StatUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StatUpdateManyInput;
  /** Document search */
  where: StatWhereInput;
};

export type StatUpdateOneInlineInput = {
  /** Connect existing Stat document */
  connect?: InputMaybe<StatWhereUniqueInput>;
  /** Create and connect one Stat document */
  create?: InputMaybe<StatCreateInput>;
  /** Delete currently connected Stat document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Stat document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Stat document */
  update?: InputMaybe<StatUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Stat document */
  upsert?: InputMaybe<StatUpsertWithNestedWhereUniqueInput>;
};

export type StatUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StatUpdateInput;
  /** Unique document search */
  where: StatWhereUniqueInput;
};

export type StatUpsertInput = {
  /** Create document if it didn't exist */
  create: StatCreateInput;
  /** Update document if it exists */
  update: StatUpdateInput;
};

export type StatUpsertLocalizationInput = {
  create: StatCreateLocalizationDataInput;
  locale: Locale;
  update: StatUpdateLocalizationDataInput;
};

export type StatUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StatUpsertInput;
  /** Unique document search */
  where: StatWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StatWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type StatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StatWhereStageInput>;
  documentInStages_none?: InputMaybe<StatWhereStageInput>;
  documentInStages_some?: InputMaybe<StatWhereStageInput>;
  grids_every?: InputMaybe<GridWhereInput>;
  grids_none?: InputMaybe<GridWhereInput>;
  grids_some?: InputMaybe<GridWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StatWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StatWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Stat record uniquely */
export type StatWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Testimonial = Node & {
  __typename?: 'Testimonial';
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Testimonial>;
  /** List of Testimonial versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Testimonial>;
  pages: Array<Page>;
  person?: Maybe<Person>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TestimonialCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TestimonialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TestimonialHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TestimonialLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type TestimonialPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type TestimonialPersonArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TestimonialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TestimonialUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TestimonialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TestimonialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TestimonialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TestimonialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TestimonialCreateInput = {
  /** content input for default locale (en) */
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TestimonialCreateLocalizationsInput>;
  pages?: InputMaybe<PageCreateManyInlineInput>;
  person?: InputMaybe<PersonCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestimonialCreateLocalizationDataInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestimonialCreateLocalizationInput = {
  /** Localization input */
  data: TestimonialCreateLocalizationDataInput;
  locale: Locale;
};

export type TestimonialCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TestimonialCreateLocalizationInput>>;
};

export type TestimonialCreateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Create and connect multiple existing Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
};

export type TestimonialCreateOneInlineInput = {
  /** Connect one existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
};

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: 'TestimonialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Testimonial;
};

/** Identifies documents */
export type TestimonialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  person?: InputMaybe<PersonWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TestimonialOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TestimonialUpdateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TestimonialUpdateLocalizationsInput>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
  person?: InputMaybe<PersonUpdateOneInlineInput>;
};

export type TestimonialUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateLocalizationInput = {
  data: TestimonialUpdateLocalizationDataInput;
  locale: Locale;
};

export type TestimonialUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TestimonialCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TestimonialUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TestimonialUpsertLocalizationInput>>;
};

export type TestimonialUpdateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialConnectInput>>;
  /** Create and connect multiple Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
  /** Delete multiple Testimonial documents */
  delete?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Disconnect multiple Testimonial documents */
  disconnect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Testimonial documents */
  set?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Update multiple Testimonial documents */
  update?: InputMaybe<Array<TestimonialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Testimonial documents */
  upsert?: InputMaybe<Array<TestimonialUpsertWithNestedWhereUniqueInput>>;
};

export type TestimonialUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TestimonialUpdateManyLocalizationsInput>;
};

export type TestimonialUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateManyLocalizationInput = {
  data: TestimonialUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TestimonialUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TestimonialUpdateManyLocalizationInput>>;
};

export type TestimonialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialUpdateManyInput;
  /** Document search */
  where: TestimonialWhereInput;
};

export type TestimonialUpdateOneInlineInput = {
  /** Connect existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
  /** Delete currently connected Testimonial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Testimonial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Testimonial document */
  update?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Testimonial document */
  upsert?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialUpdateInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialCreateInput;
  /** Update document if it exists */
  update: TestimonialUpdateInput;
};

export type TestimonialUpsertLocalizationInput = {
  create: TestimonialCreateLocalizationDataInput;
  locale: Locale;
  update: TestimonialUpdateLocalizationDataInput;
};

export type TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialUpsertInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TestimonialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TestimonialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
  person?: InputMaybe<PersonWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TestimonialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TestimonialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Testimonial record uniquely */
export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}
