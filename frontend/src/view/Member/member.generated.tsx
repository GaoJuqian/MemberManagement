import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MemberItemFragment = { __typename?: 'member', nodeId: string, id: string, name: string, phone?: string | null, use_count?: string | null, remark?: string | null, update_at?: string | null, created_at: string };

export type MemberItemShopGoodsUsageFragment = { __typename?: 'member_shop_goods_usage', usage_count?: string | null, shop_goods?: { __typename?: 'shop_goods', name?: string | null } | null };

export type GetMemberListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetMemberListQuery = { __typename?: 'Query', memberCollection?: { __typename?: 'memberConnection', totalCount: number, edges: Array<{ __typename?: 'memberEdge', cursor: string, node: { __typename?: 'member', nodeId: string, id: string, name: string, phone?: string | null, use_count?: string | null, remark?: string | null, update_at?: string | null, created_at: string, member_shop_goods_usageCollection?: { __typename?: 'member_shop_goods_usageConnection', edges: Array<{ __typename?: 'member_shop_goods_usageEdge', node: { __typename?: 'member_shop_goods_usage', usage_count?: string | null, shop_goods?: { __typename?: 'shop_goods', name?: string | null } | null } }> } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export type InsertIntoMemberMutationVariables = Types.Exact<{
  input: Types.MemberInsertInput;
}>;


export type InsertIntoMemberMutation = { __typename?: 'Mutation', insertIntomemberCollection?: { __typename?: 'memberInsertResponse', affectedCount: number } | null };

export const MemberItemFragmentDoc = gql`
    fragment memberItem on member {
  nodeId
  id
  name
  phone
  use_count
  remark
  update_at
  created_at
}
    `;
export const MemberItemShopGoodsUsageFragmentDoc = gql`
    fragment memberItemShopGoodsUsage on member_shop_goods_usage {
  shop_goods {
    name
  }
  usage_count
}
    `;
export const GetMemberListDocument = gql`
    query getMemberList($first: Int, $offset: Int) {
  memberCollection(first: $first, offset: $offset) {
    edges {
      cursor
      node {
        ...memberItem
        member_shop_goods_usageCollection {
          edges {
            node {
              ...memberItemShopGoodsUsage
            }
          }
        }
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
    ${MemberItemFragmentDoc}
${MemberItemShopGoodsUsageFragmentDoc}`;

/**
 * __useGetMemberListQuery__
 *
 * To run a query within a React component, call `useGetMemberListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetMemberListQuery(baseOptions?: Apollo.QueryHookOptions<GetMemberListQuery, GetMemberListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberListQuery, GetMemberListQueryVariables>(GetMemberListDocument, options);
      }
export function useGetMemberListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberListQuery, GetMemberListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberListQuery, GetMemberListQueryVariables>(GetMemberListDocument, options);
        }
export function useGetMemberListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMemberListQuery, GetMemberListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMemberListQuery, GetMemberListQueryVariables>(GetMemberListDocument, options);
        }
export type GetMemberListQueryHookResult = ReturnType<typeof useGetMemberListQuery>;
export type GetMemberListLazyQueryHookResult = ReturnType<typeof useGetMemberListLazyQuery>;
export type GetMemberListSuspenseQueryHookResult = ReturnType<typeof useGetMemberListSuspenseQuery>;
export type GetMemberListQueryResult = Apollo.QueryResult<GetMemberListQuery, GetMemberListQueryVariables>;
export const InsertIntoMemberDocument = gql`
    mutation insertIntoMember($input: memberInsertInput!) {
  insertIntomemberCollection(objects: [$input]) {
    affectedCount
  }
}
    `;
export type InsertIntoMemberMutationFn = Apollo.MutationFunction<InsertIntoMemberMutation, InsertIntoMemberMutationVariables>;

/**
 * __useInsertIntoMemberMutation__
 *
 * To run a mutation, you first call `useInsertIntoMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIntoMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIntoMemberMutation, { data, loading, error }] = useInsertIntoMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertIntoMemberMutation(baseOptions?: Apollo.MutationHookOptions<InsertIntoMemberMutation, InsertIntoMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertIntoMemberMutation, InsertIntoMemberMutationVariables>(InsertIntoMemberDocument, options);
      }
export type InsertIntoMemberMutationHookResult = ReturnType<typeof useInsertIntoMemberMutation>;
export type InsertIntoMemberMutationResult = Apollo.MutationResult<InsertIntoMemberMutation>;
export type InsertIntoMemberMutationOptions = Apollo.BaseMutationOptions<InsertIntoMemberMutation, InsertIntoMemberMutationVariables>;