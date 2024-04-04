import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ShopGoodsItemFragment = { __typename?: 'shop_goods', id: string, name?: string | null, remark?: string | null, created_at: string };

export type GetShopGoodsListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['Cursor']['input']>;
}>;


export type GetShopGoodsListQuery = { __typename?: 'Query', shop_goodsCollection?: { __typename?: 'shop_goodsConnection', totalCount: number, edges: Array<{ __typename?: 'shop_goodsEdge', cursor: string, node: { __typename?: 'shop_goods', id: string, name?: string | null, remark?: string | null, created_at: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export const ShopGoodsItemFragmentDoc = gql`
    fragment shopGoodsItem on shop_goods {
  id
  name
  remark
  created_at
}
    `;
export const GetShopGoodsListDocument = gql`
    query getShopGoodsList($first: Int, $cursor: Cursor) {
  shop_goodsCollection(first: $first, after: $cursor) {
    edges {
      cursor
      node {
        ...shopGoodsItem
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
  }
}
    ${ShopGoodsItemFragmentDoc}`;

/**
 * __useGetShopGoodsListQuery__
 *
 * To run a query within a React component, call `useGetShopGoodsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopGoodsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopGoodsListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetShopGoodsListQuery(baseOptions?: Apollo.QueryHookOptions<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>(GetShopGoodsListDocument, options);
      }
export function useGetShopGoodsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>(GetShopGoodsListDocument, options);
        }
export function useGetShopGoodsListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>(GetShopGoodsListDocument, options);
        }
export type GetShopGoodsListQueryHookResult = ReturnType<typeof useGetShopGoodsListQuery>;
export type GetShopGoodsListLazyQueryHookResult = ReturnType<typeof useGetShopGoodsListLazyQuery>;
export type GetShopGoodsListSuspenseQueryHookResult = ReturnType<typeof useGetShopGoodsListSuspenseQuery>;
export type GetShopGoodsListQueryResult = Apollo.QueryResult<GetShopGoodsListQuery, GetShopGoodsListQueryVariables>;