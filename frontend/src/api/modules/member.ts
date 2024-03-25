import {gql} from '@apollo/client';

export const GET_MEMBER_LIST = gql`
query AllMembers($cursor: Cursor) {
  memberCollection(first: 10, after: $cursor) {
    edges {
      node {
        id
        name
        phone
        use_count
        remark
        update_at
        created_at
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
`;