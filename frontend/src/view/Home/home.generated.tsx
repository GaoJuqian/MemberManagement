import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MemberItemFragment = { __typename?: 'member', id: string, name: string, phone?: string | null, use_count?: string | null, remark?: string | null, update_at?: string | null, created_at: string };

export type GetMemberListQueryVariables = Types.Exact<{
  cursor?: Types.InputMaybe<Types.Scalars['Cursor']['input']>;
}>;


export type GetMemberListQuery = { __typename?: 'Query', memberCollection?: { __typename?: 'memberConnection', edges: Array<{ __typename?: 'memberEdge', node: { __typename?: 'member', id: string, name: string, phone?: string | null, use_count?: string | null, remark?: string | null, update_at?: string | null, created_at: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } | null };

export const MemberItemFragmentDoc = gql`
    fragment memberItem on member {
  id
  name
  phone
  use_count
  remark
  update_at
  created_at
}
    `;
export const GetMemberListDocument = gql`
    query getMemberList($cursor: Cursor) {
  memberCollection(first: 10, after: $cursor) {
    edges {
      node {
        ...memberItem
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  }
}
    ${MemberItemFragmentDoc}`;

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
 *      cursor: // value for 'cursor'
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