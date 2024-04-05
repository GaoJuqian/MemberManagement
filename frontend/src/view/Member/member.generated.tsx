import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MemberItemFragment = { __typename?: 'Member', nodeId: string, id: string, name: string, phone?: string | null, status?: number | null, operator?: string | null, remark?: string | null, updateAt?: string | null, createdAt: string };

export type MemberItemShopGoodsUsageFragment = { __typename?: 'MemberShopGoodsUsage', id: string, memberId?: string | null, shopGoodsId?: string | null, usageCount?: string | null, shopGoods?: { __typename?: 'ShopGoods', name?: string | null } | null };

export type GetMemberListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetMemberListQuery = { __typename?: 'Query', memberCollection?: { __typename?: 'MemberConnection', totalCount: number, edges: Array<{ __typename?: 'MemberEdge', cursor: string, node: { __typename?: 'Member', nodeId: string, id: string, name: string, phone?: string | null, status?: number | null, operator?: string | null, remark?: string | null, updateAt?: string | null, createdAt: string, memberShopGoodsUsageCollection?: { __typename?: 'MemberShopGoodsUsageConnection', edges: Array<{ __typename?: 'MemberShopGoodsUsageEdge', node: { __typename?: 'MemberShopGoodsUsage', id: string, memberId?: string | null, shopGoodsId?: string | null, usageCount?: string | null, shopGoods?: { __typename?: 'ShopGoods', name?: string | null } | null } }> } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export type InsertIntoMemberMutationVariables = Types.Exact<{
  input: Types.MemberInsertInput;
}>;


export type InsertIntoMemberMutation = { __typename?: 'Mutation', insertIntoMemberCollection?: { __typename?: 'MemberInsertResponse', affectedCount: number, records: Array<{ __typename?: 'Member', id: string, name: string }> } | null };

export type UpdateMemberMutationVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MemberFilter>;
  input: Types.MemberUpdateInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMemberCollection: { __typename?: 'MemberUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'Member', id: string, name: string }> } };

export const MemberItemFragmentDoc = gql`
    fragment memberItem on Member {
  nodeId
  id
  name
  phone
  status
  operator
  remark
  updateAt
  createdAt
}
    `;
export const MemberItemShopGoodsUsageFragmentDoc = gql`
    fragment memberItemShopGoodsUsage on MemberShopGoodsUsage {
  id
  memberId
  shopGoodsId
  shopGoods {
    name
  }
  usageCount
}
    `;
export const GetMemberListDocument = gql`
    query getMemberList($first: Int, $offset: Int) {
  memberCollection(first: $first, offset: $offset) {
    edges {
      cursor
      node {
        ...memberItem
        memberShopGoodsUsageCollection {
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
    mutation insertIntoMember($input: MemberInsertInput!) {
  insertIntoMemberCollection(objects: [$input]) {
    affectedCount
    records {
      id
      name
    }
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
export const UpdateMemberDocument = gql`
    mutation updateMember($filter: MemberFilter, $input: MemberUpdateInput!) {
  updateMemberCollection(set: $input, filter: $filter, atMost: 1) {
    affectedCount
    records {
      id
      name
    }
  }
}
    `;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;