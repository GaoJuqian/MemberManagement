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

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `member` collection */
  deleteFrommemberCollection: MemberDeleteResponse;
  /** Deletes zero or more records from the `member_shop_goods_usage` collection */
  deleteFrommember_shop_goods_usageCollection: Member_Shop_Goods_UsageDeleteResponse;
  /** Deletes zero or more records from the `shop` collection */
  deleteFromshopCollection: ShopDeleteResponse;
  /** Deletes zero or more records from the `shop_goods` collection */
  deleteFromshop_goodsCollection: Shop_GoodsDeleteResponse;
  /** Adds one or more `member` records to the collection */
  insertIntomemberCollection?: Maybe<MemberInsertResponse>;
  /** Adds one or more `member_shop_goods_usage` records to the collection */
  insertIntomember_shop_goods_usageCollection?: Maybe<Member_Shop_Goods_UsageInsertResponse>;
  /** Adds one or more `shop` records to the collection */
  insertIntoshopCollection?: Maybe<ShopInsertResponse>;
  /** Adds one or more `shop_goods` records to the collection */
  insertIntoshop_goodsCollection?: Maybe<Shop_GoodsInsertResponse>;
  /** Updates zero or more records in the `member` collection */
  updatememberCollection: MemberUpdateResponse;
  /** Updates zero or more records in the `member_shop_goods_usage` collection */
  updatemember_shop_goods_usageCollection: Member_Shop_Goods_UsageUpdateResponse;
  /** Updates zero or more records in the `shop` collection */
  updateshopCollection: ShopUpdateResponse;
  /** Updates zero or more records in the `shop_goods` collection */
  updateshop_goodsCollection: Shop_GoodsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommemberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommember_Shop_Goods_UsageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Member_Shop_Goods_UsageFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromshopCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromshop_GoodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Shop_GoodsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomemberCollectionArgs = {
  objects: Array<MemberInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomember_Shop_Goods_UsageCollectionArgs = {
  objects: Array<Member_Shop_Goods_UsageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoshopCollectionArgs = {
  objects: Array<ShopInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoshop_GoodsCollectionArgs = {
  objects: Array<Shop_GoodsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatememberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MemberFilter>;
  set: MemberUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemember_Shop_Goods_UsageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Member_Shop_Goods_UsageFilter>;
  set: Member_Shop_Goods_UsageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateshopCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ShopFilter>;
  set: ShopUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateshop_GoodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Shop_GoodsFilter>;
  set: Shop_GoodsUpdateInput;
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
  /** A pagable collection of type `member` */
  memberCollection?: Maybe<MemberConnection>;
  /** A pagable collection of type `member_shop_goods_usage` */
  member_shop_goods_usageCollection?: Maybe<Member_Shop_Goods_UsageConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `shop` */
  shopCollection?: Maybe<ShopConnection>;
  /** A pagable collection of type `shop_goods` */
  shop_goodsCollection?: Maybe<Shop_GoodsConnection>;
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
export type QueryMember_Shop_Goods_UsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Member_Shop_Goods_UsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Member_Shop_Goods_UsageOrderBy>>;
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
export type QueryShop_GoodsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Shop_GoodsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Shop_GoodsOrderBy>>;
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

export type Member = Node & {
  __typename?: 'member';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  member_shop_goods_usageCollection?: Maybe<Member_Shop_Goods_UsageConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['BigInt']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  shop_id?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  update_at?: Maybe<Scalars['Datetime']['output']>;
  use_count?: Maybe<Scalars['BigInt']['output']>;
};


export type MemberMember_Shop_Goods_UsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Member_Shop_Goods_UsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Member_Shop_Goods_UsageOrderBy>>;
};

export type MemberConnection = {
  __typename?: 'memberConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type MemberDeleteResponse = {
  __typename?: 'memberDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberEdge = {
  __typename?: 'memberEdge';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type MemberFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MemberFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MemberFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MemberFilter>>;
  phone?: InputMaybe<BigIntFilter>;
  remark?: InputMaybe<StringFilter>;
  shop_id?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<IntFilter>;
  update_at?: InputMaybe<DatetimeFilter>;
  use_count?: InputMaybe<BigIntFilter>;
};

export type MemberInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['BigInt']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  shop_id?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  update_at?: InputMaybe<Scalars['Datetime']['input']>;
  use_count?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MemberInsertResponse = {
  __typename?: 'memberInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type MemberOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
  shop_id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  update_at?: InputMaybe<OrderByDirection>;
  use_count?: InputMaybe<OrderByDirection>;
};

export type MemberUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['BigInt']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  shop_id?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  update_at?: InputMaybe<Scalars['Datetime']['input']>;
  use_count?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MemberUpdateResponse = {
  __typename?: 'memberUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member>;
};

export type Member_Shop_Goods_Usage = Node & {
  __typename?: 'member_shop_goods_usage';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  member?: Maybe<Member>;
  member_id?: Maybe<Scalars['BigInt']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  shop_goods?: Maybe<Shop_Goods>;
  shop_goods_id?: Maybe<Scalars['BigInt']['output']>;
  usage_count?: Maybe<Scalars['BigInt']['output']>;
};

export type Member_Shop_Goods_UsageConnection = {
  __typename?: 'member_shop_goods_usageConnection';
  edges: Array<Member_Shop_Goods_UsageEdge>;
  pageInfo: PageInfo;
};

export type Member_Shop_Goods_UsageDeleteResponse = {
  __typename?: 'member_shop_goods_usageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member_Shop_Goods_Usage>;
};

export type Member_Shop_Goods_UsageEdge = {
  __typename?: 'member_shop_goods_usageEdge';
  cursor: Scalars['String']['output'];
  node: Member_Shop_Goods_Usage;
};

export type Member_Shop_Goods_UsageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Member_Shop_Goods_UsageFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  member_id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Member_Shop_Goods_UsageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Member_Shop_Goods_UsageFilter>>;
  shop_goods_id?: InputMaybe<BigIntFilter>;
  usage_count?: InputMaybe<BigIntFilter>;
};

export type Member_Shop_Goods_UsageInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  member_id?: InputMaybe<Scalars['BigInt']['input']>;
  shop_goods_id?: InputMaybe<Scalars['BigInt']['input']>;
  usage_count?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Member_Shop_Goods_UsageInsertResponse = {
  __typename?: 'member_shop_goods_usageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member_Shop_Goods_Usage>;
};

export type Member_Shop_Goods_UsageOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  member_id?: InputMaybe<OrderByDirection>;
  shop_goods_id?: InputMaybe<OrderByDirection>;
  usage_count?: InputMaybe<OrderByDirection>;
};

export type Member_Shop_Goods_UsageUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  member_id?: InputMaybe<Scalars['BigInt']['input']>;
  shop_goods_id?: InputMaybe<Scalars['BigInt']['input']>;
  usage_count?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Member_Shop_Goods_UsageUpdateResponse = {
  __typename?: 'member_shop_goods_usageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Member_Shop_Goods_Usage>;
};

export type Shop = Node & {
  __typename?: 'shop';
  created_at: Scalars['Datetime']['output'];
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
  __typename?: 'shopConnection';
  edges: Array<ShopEdge>;
  pageInfo: PageInfo;
};

export type ShopDeleteResponse = {
  __typename?: 'shopDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

export type ShopEdge = {
  __typename?: 'shopEdge';
  cursor: Scalars['String']['output'];
  node: Shop;
};

export type ShopFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ShopFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ShopFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ShopFilter>>;
  remark?: InputMaybe<StringFilter>;
};

export type ShopInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopInsertResponse = {
  __typename?: 'shopInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

export type ShopOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
};

export type ShopUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type ShopUpdateResponse = {
  __typename?: 'shopUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop>;
};

export type Shop_Goods = Node & {
  __typename?: 'shop_goods';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  member_shop_goods_usageCollection?: Maybe<Member_Shop_Goods_UsageConnection>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
};


export type Shop_GoodsMember_Shop_Goods_UsageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Member_Shop_Goods_UsageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Member_Shop_Goods_UsageOrderBy>>;
};

export type Shop_GoodsConnection = {
  __typename?: 'shop_goodsConnection';
  edges: Array<Shop_GoodsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Shop_GoodsDeleteResponse = {
  __typename?: 'shop_goodsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop_Goods>;
};

export type Shop_GoodsEdge = {
  __typename?: 'shop_goodsEdge';
  cursor: Scalars['String']['output'];
  node: Shop_Goods;
};

export type Shop_GoodsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Shop_GoodsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Shop_GoodsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Shop_GoodsFilter>>;
  remark?: InputMaybe<StringFilter>;
};

export type Shop_GoodsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type Shop_GoodsInsertResponse = {
  __typename?: 'shop_goodsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop_Goods>;
};

export type Shop_GoodsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  remark?: InputMaybe<OrderByDirection>;
};

export type Shop_GoodsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type Shop_GoodsUpdateResponse = {
  __typename?: 'shop_goodsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Shop_Goods>;
};
