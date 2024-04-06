import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ShopGoodsItemFragment = { __typename?: 'ShopGoods', id: string, name?: string | null, remark?: string | null, createdAt: string };

export type GetShopGoodsListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['Cursor']['input']>;
}>;


export type GetShopGoodsListQuery = { __typename?: 'Query', shopGoodsCollection?: { __typename?: 'ShopGoodsConnection', totalCount: number, edges: Array<{ __typename?: 'ShopGoodsEdge', cursor: string, node: { __typename?: 'ShopGoods', id: string, name?: string | null, remark?: string | null, createdAt: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export type GetShopGoodsListAllQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['Cursor']['input']>;
}>;


export type GetShopGoodsListAllQuery = { __typename?: 'Query', shopGoodsCollection?: { __typename?: 'ShopGoodsConnection', totalCount: number, edges: Array<{ __typename?: 'ShopGoodsEdge', cursor: string, node: { __typename?: 'ShopGoods', id: string, name?: string | null, remark?: string | null, createdAt: string } }> } | null };

export type InsertIntoShopGoodsMutationVariables = Types.Exact<{
  input: Types.ShopGoodsInsertInput;
}>;


export type InsertIntoShopGoodsMutation = { __typename?: 'Mutation', insertIntoShopGoodsCollection?: { __typename?: 'ShopGoodsInsertResponse', affectedCount: number } | null };

export type UpdateShopGoodsMutationVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.ShopGoodsFilter>;
  input: Types.ShopGoodsUpdateInput;
}>;


export type UpdateShopGoodsMutation = { __typename?: 'Mutation', updateShopGoodsCollection: { __typename?: 'ShopGoodsUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'ShopGoods', id: string, name?: string | null, remark?: string | null }> } };

export type ShopGoodsUsageFragment = { __typename?: 'MemberShopGoodsUsage', memberId?: string | null, shopGoodsId?: string | null, usageCount?: string | null, createdAt: string };

export type InsertIntoMemberShopGoodsUsageMutationVariables = Types.Exact<{
  input: Types.MemberShopGoodsUsageInsertInput;
}>;


export type InsertIntoMemberShopGoodsUsageMutation = { __typename?: 'Mutation', insertIntoMemberShopGoodsUsageCollection?: { __typename?: 'MemberShopGoodsUsageInsertResponse', affectedCount: number } | null };

export type UpdateMemberShopGoodsUsageMutationVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MemberShopGoodsUsageFilter>;
  input: Types.MemberShopGoodsUsageUpdateInput;
}>;


export type UpdateMemberShopGoodsUsageMutation = { __typename?: 'Mutation', updateMemberShopGoodsUsageCollection: { __typename?: 'MemberShopGoodsUsageUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'MemberShopGoodsUsage', id: string, memberId?: string | null, shopGoodsId?: string | null, usageCount?: string | null }> } };

export const ShopGoodsItemFragmentDoc = gql`
    fragment shopGoodsItem on ShopGoods {
  id
  name
  remark
  createdAt
}
    `;
export const ShopGoodsUsageFragmentDoc = gql`
    fragment shopGoodsUsage on MemberShopGoodsUsage {
  memberId
  shopGoodsId
  usageCount
  createdAt
}
    `;
export const GetShopGoodsListDocument = gql`
    query getShopGoodsList($first: Int, $cursor: Cursor) {
  shopGoodsCollection(first: $first, after: $cursor) {
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
export const GetShopGoodsListAllDocument = gql`
    query getShopGoodsListAll($first: Int, $cursor: Cursor) {
  shopGoodsCollection(first: $first, after: $cursor) {
    edges {
      cursor
      node {
        ...shopGoodsItem
      }
    }
    totalCount
  }
}
    ${ShopGoodsItemFragmentDoc}`;

/**
 * __useGetShopGoodsListAllQuery__
 *
 * To run a query within a React component, call `useGetShopGoodsListAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopGoodsListAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopGoodsListAllQuery({
 *   variables: {
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetShopGoodsListAllQuery(baseOptions?: Apollo.QueryHookOptions<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>(GetShopGoodsListAllDocument, options);
      }
export function useGetShopGoodsListAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>(GetShopGoodsListAllDocument, options);
        }
export function useGetShopGoodsListAllSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>(GetShopGoodsListAllDocument, options);
        }
export type GetShopGoodsListAllQueryHookResult = ReturnType<typeof useGetShopGoodsListAllQuery>;
export type GetShopGoodsListAllLazyQueryHookResult = ReturnType<typeof useGetShopGoodsListAllLazyQuery>;
export type GetShopGoodsListAllSuspenseQueryHookResult = ReturnType<typeof useGetShopGoodsListAllSuspenseQuery>;
export type GetShopGoodsListAllQueryResult = Apollo.QueryResult<GetShopGoodsListAllQuery, GetShopGoodsListAllQueryVariables>;
export const InsertIntoShopGoodsDocument = gql`
    mutation insertIntoShopGoods($input: ShopGoodsInsertInput!) {
  insertIntoShopGoodsCollection(objects: [$input]) {
    affectedCount
  }
}
    `;
export type InsertIntoShopGoodsMutationFn = Apollo.MutationFunction<InsertIntoShopGoodsMutation, InsertIntoShopGoodsMutationVariables>;

/**
 * __useInsertIntoShopGoodsMutation__
 *
 * To run a mutation, you first call `useInsertIntoShopGoodsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIntoShopGoodsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIntoShopGoodsMutation, { data, loading, error }] = useInsertIntoShopGoodsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertIntoShopGoodsMutation(baseOptions?: Apollo.MutationHookOptions<InsertIntoShopGoodsMutation, InsertIntoShopGoodsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertIntoShopGoodsMutation, InsertIntoShopGoodsMutationVariables>(InsertIntoShopGoodsDocument, options);
      }
export type InsertIntoShopGoodsMutationHookResult = ReturnType<typeof useInsertIntoShopGoodsMutation>;
export type InsertIntoShopGoodsMutationResult = Apollo.MutationResult<InsertIntoShopGoodsMutation>;
export type InsertIntoShopGoodsMutationOptions = Apollo.BaseMutationOptions<InsertIntoShopGoodsMutation, InsertIntoShopGoodsMutationVariables>;
export const UpdateShopGoodsDocument = gql`
    mutation updateShopGoods($filter: ShopGoodsFilter, $input: ShopGoodsUpdateInput!) {
  updateShopGoodsCollection(set: $input, filter: $filter, atMost: 1) {
    affectedCount
    records {
      id
      name
      remark
    }
  }
}
    `;
export type UpdateShopGoodsMutationFn = Apollo.MutationFunction<UpdateShopGoodsMutation, UpdateShopGoodsMutationVariables>;

/**
 * __useUpdateShopGoodsMutation__
 *
 * To run a mutation, you first call `useUpdateShopGoodsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShopGoodsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShopGoodsMutation, { data, loading, error }] = useUpdateShopGoodsMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShopGoodsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShopGoodsMutation, UpdateShopGoodsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShopGoodsMutation, UpdateShopGoodsMutationVariables>(UpdateShopGoodsDocument, options);
      }
export type UpdateShopGoodsMutationHookResult = ReturnType<typeof useUpdateShopGoodsMutation>;
export type UpdateShopGoodsMutationResult = Apollo.MutationResult<UpdateShopGoodsMutation>;
export type UpdateShopGoodsMutationOptions = Apollo.BaseMutationOptions<UpdateShopGoodsMutation, UpdateShopGoodsMutationVariables>;
export const InsertIntoMemberShopGoodsUsageDocument = gql`
    mutation insertIntoMemberShopGoodsUsage($input: MemberShopGoodsUsageInsertInput!) {
  insertIntoMemberShopGoodsUsageCollection(objects: [$input]) {
    affectedCount
  }
}
    `;
export type InsertIntoMemberShopGoodsUsageMutationFn = Apollo.MutationFunction<InsertIntoMemberShopGoodsUsageMutation, InsertIntoMemberShopGoodsUsageMutationVariables>;

/**
 * __useInsertIntoMemberShopGoodsUsageMutation__
 *
 * To run a mutation, you first call `useInsertIntoMemberShopGoodsUsageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIntoMemberShopGoodsUsageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIntoMemberShopGoodsUsageMutation, { data, loading, error }] = useInsertIntoMemberShopGoodsUsageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertIntoMemberShopGoodsUsageMutation(baseOptions?: Apollo.MutationHookOptions<InsertIntoMemberShopGoodsUsageMutation, InsertIntoMemberShopGoodsUsageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertIntoMemberShopGoodsUsageMutation, InsertIntoMemberShopGoodsUsageMutationVariables>(InsertIntoMemberShopGoodsUsageDocument, options);
      }
export type InsertIntoMemberShopGoodsUsageMutationHookResult = ReturnType<typeof useInsertIntoMemberShopGoodsUsageMutation>;
export type InsertIntoMemberShopGoodsUsageMutationResult = Apollo.MutationResult<InsertIntoMemberShopGoodsUsageMutation>;
export type InsertIntoMemberShopGoodsUsageMutationOptions = Apollo.BaseMutationOptions<InsertIntoMemberShopGoodsUsageMutation, InsertIntoMemberShopGoodsUsageMutationVariables>;
export const UpdateMemberShopGoodsUsageDocument = gql`
    mutation updateMemberShopGoodsUsage($filter: MemberShopGoodsUsageFilter, $input: MemberShopGoodsUsageUpdateInput!) {
  updateMemberShopGoodsUsageCollection(set: $input, filter: $filter, atMost: 1) {
    affectedCount
    records {
      id
      memberId
      shopGoodsId
      usageCount
    }
  }
}
    `;
export type UpdateMemberShopGoodsUsageMutationFn = Apollo.MutationFunction<UpdateMemberShopGoodsUsageMutation, UpdateMemberShopGoodsUsageMutationVariables>;

/**
 * __useUpdateMemberShopGoodsUsageMutation__
 *
 * To run a mutation, you first call `useUpdateMemberShopGoodsUsageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberShopGoodsUsageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberShopGoodsUsageMutation, { data, loading, error }] = useUpdateMemberShopGoodsUsageMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberShopGoodsUsageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberShopGoodsUsageMutation, UpdateMemberShopGoodsUsageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberShopGoodsUsageMutation, UpdateMemberShopGoodsUsageMutationVariables>(UpdateMemberShopGoodsUsageDocument, options);
      }
export type UpdateMemberShopGoodsUsageMutationHookResult = ReturnType<typeof useUpdateMemberShopGoodsUsageMutation>;
export type UpdateMemberShopGoodsUsageMutationResult = Apollo.MutationResult<UpdateMemberShopGoodsUsageMutation>;
export type UpdateMemberShopGoodsUsageMutationOptions = Apollo.BaseMutationOptions<UpdateMemberShopGoodsUsageMutation, UpdateMemberShopGoodsUsageMutationVariables>;