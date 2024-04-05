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
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Member = Node & {
  __typename?: 'Member';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  memberShopGoodsUsageCollection?: Maybe<MemberShopGoodsUsageConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  operator?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['BigInt']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  shopId?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Datetime']['output']>;
};


export type MemberMemberShopGoodsUsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberShopGoodsUsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberShopGoodsUsageOrderBy>>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type MemberDeleteResponse = {
  __typename?: 'MemberDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type MemberFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MemberFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MemberFilter>;
  operator?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MemberFilter>>;
  phone?: InputMaybe<BigIntFilter>;
  remark?: InputMaybe<StringFilter>;
  shopId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<IntFilter>;
  updateAt?: InputMaybe<DatetimeFilter>;
};

export type MemberInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['BigInt']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MemberInsertResponse = {
  __typename?: 'MemberInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  operator?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
  shopId?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updateAt?: InputMaybe<OrderByDirection>;
};

export type MemberShopGoodsUsage = Node & {
  __typename?: 'MemberShopGoodsUsage';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['BigInt']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  shopGoods?: Maybe<ShopGoods>;
  shopGoodsId?: Maybe<Scalars['BigInt']['output']>;
  usageCount?: Maybe<Scalars['BigInt']['output']>;
};

export type MemberShopGoodsUsageConnection = {
  __typename?: 'MemberShopGoodsUsageConnection';
  edges: Array<MemberShopGoodsUsageEdge>;
  pageInfo: PageInfo;
};

export type MemberShopGoodsUsageDeleteResponse = {
  __typename?: 'MemberShopGoodsUsageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MemberShopGoodsUsage>;
};

export type MemberShopGoodsUsageEdge = {
  __typename?: 'MemberShopGoodsUsageEdge';
  cursor: Scalars['String']['output'];
  node: MemberShopGoodsUsage;
};

export type MemberShopGoodsUsageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MemberShopGoodsUsageFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  memberId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MemberShopGoodsUsageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MemberShopGoodsUsageFilter>>;
  shopGoodsId?: InputMaybe<BigIntFilter>;
  usageCount?: InputMaybe<BigIntFilter>;
};

export type MemberShopGoodsUsageInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  memberId?: InputMaybe<Scalars['BigInt']['input']>;
  shopGoodsId?: InputMaybe<Scalars['BigInt']['input']>;
  usageCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MemberShopGoodsUsageInsertResponse = {
  __typename?: 'MemberShopGoodsUsageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MemberShopGoodsUsage>;
};

export type MemberShopGoodsUsageOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  memberId?: InputMaybe<OrderByDirection>;
  shopGoodsId?: InputMaybe<OrderByDirection>;
  usageCount?: InputMaybe<OrderByDirection>;
};

export type MemberShopGoodsUsageUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  memberId?: InputMaybe<Scalars['BigInt']['input']>;
  shopGoodsId?: InputMaybe<Scalars['BigInt']['input']>;
  usageCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MemberShopGoodsUsageUpdateResponse = {
  __typename?: 'MemberShopGoodsUsageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MemberShopGoodsUsage>;
};

export type MemberUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['BigInt']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MemberUpdateResponse = {
  __typename?: 'MemberUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Member` collection */
  deleteFromMemberCollection: MemberDeleteResponse;
  /** Deletes zero or more records from the `MemberShopGoodsUsage` collection */
  deleteFromMemberShopGoodsUsageCollection: MemberShopGoodsUsageDeleteResponse;
  /** Deletes zero or more records from the `Shop` collection */
  deleteFromShopCollection: ShopDeleteResponse;
  /** Deletes zero or more records from the `ShopGoods` collection */
  deleteFromShopGoodsCollection: ShopGoodsDeleteResponse;
  /** Adds one or more `Member` records to the collection */
  insertIntoMemberCollection?: Maybe<MemberInsertResponse>;
  /** Adds one or more `MemberShopGoodsUsage` records to the collection */
  insertIntoMemberShopGoodsUsageCollection?: Maybe<MemberShopGoodsUsageInsertResponse>;
  /** Adds one or more `Shop` records to the collection */
  insertIntoShopCollection?: Maybe<ShopInsertResponse>;
  /** Adds one or more `ShopGoods` records to the collection */
  insertIntoShopGoodsCollection?: Maybe<ShopGoodsInsertResponse>;
  /** Updates zero or more records in the `Member` collection */
  updateMemberCollection: MemberUpdateResponse;
  /** Updates zero or more records in the `MemberShopGoodsUsage` collection */
  updateMemberShopGoodsUsageCollection: MemberShopGoodsUsageUpdateResponse;
  /** Updates zero or more records in the `Shop` collection */
  updateShopCollection: ShopUpdateResponse;
  /** Updates zero or more records in the `ShopGoods` collection */
  updateShopGoodsCollection: ShopGoodsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromMemberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromMemberShopGoodsUsageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberShopGoodsUsageFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromShopCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromShopGoodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopGoodsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoMemberCollectionArgs = {
  objects: Array<MemberInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoMemberShopGoodsUsageCollectionArgs = {
  objects: Array<MemberShopGoodsUsageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoShopCollectionArgs = {
  objects: Array<ShopInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoShopGoodsCollectionArgs = {
  objects: Array<ShopGoodsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateMemberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberFilter>;
  set: MemberUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateMemberShopGoodsUsageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberShopGoodsUsageFilter>;
  set: MemberShopGoodsUsageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateShopCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopFilter>;
  set: ShopUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateShopGoodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopGoodsFilter>;
  set: ShopGoodsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Member` */
  memberCollection?: Maybe<MemberConnection>;
  /** A pagable collection of type `MemberShopGoodsUsage` */
  memberShopGoodsUsageCollection?: Maybe<MemberShopGoodsUsageConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Shop` */
  shopCollection?: Maybe<ShopConnection>;
  /** A pagable collection of type `ShopGoods` */
  shopGoodsCollection?: Maybe<ShopGoodsConnection>;
};


/** The root type for querying data */
export type QueryMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberOrderBy>>;
};


/** The root type for querying data */
export type QueryMemberShopGoodsUsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberShopGoodsUsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberShopGoodsUsageOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryShopCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ShopFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopOrderBy>>;
};


/** The root type for querying data */
export type QueryShopGoodsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ShopGoodsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopGoodsOrderBy>>;
};

export type Shop = Node & {
  __typename?: 'Shop';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  memberCollection?: Maybe<MemberConnection>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
};


export type ShopMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberOrderBy>>;
};

export type ShopConnection = {
  __typename?: 'ShopConnection';
  edges: Array<ShopEdge>;
  pageInfo: PageInfo;
};

export type ShopDeleteResponse = {
  __typename?: 'ShopDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

export type ShopEdge = {
  __typename?: 'ShopEdge';
  cursor: Scalars['String']['output'];
  node: Shop;
};

export type ShopFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ShopFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ShopFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ShopFilter>>;
  remark?: InputMaybe<StringFilter>;
};

export type ShopGoods = Node & {
  __typename?: 'ShopGoods';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  memberShopGoodsUsageCollection?: Maybe<MemberShopGoodsUsageConnection>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
};


export type ShopGoodsMemberShopGoodsUsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberShopGoodsUsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemberShopGoodsUsageOrderBy>>;
};

export type ShopGoodsConnection = {
  __typename?: 'ShopGoodsConnection';
  edges: Array<ShopGoodsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type ShopGoodsDeleteResponse = {
  __typename?: 'ShopGoodsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ShopGoods>;
};

export type ShopGoodsEdge = {
  __typename?: 'ShopGoodsEdge';
  cursor: Scalars['String']['output'];
  node: ShopGoods;
};

export type ShopGoodsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ShopGoodsFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ShopGoodsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ShopGoodsFilter>>;
  remark?: InputMaybe<StringFilter>;
};

export type ShopGoodsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopGoodsInsertResponse = {
  __typename?: 'ShopGoodsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ShopGoods>;
};

export type ShopGoodsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
};

export type ShopGoodsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopGoodsUpdateResponse = {
  __typename?: 'ShopGoodsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ShopGoods>;
};

export type ShopInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopInsertResponse = {
  __typename?: 'ShopInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

export type ShopOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
};

export type ShopUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopUpdateResponse = {
  __typename?: 'ShopUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};
