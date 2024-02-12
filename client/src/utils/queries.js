import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User {
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        image
        quantity
        price
      }
    }
  }
}
`;

export const GET_USER_PROFILE = gql`
query Query {
  user {
    email
    firstName
    lastName
    _id
    orders {
      products {
        category {
          name
        }
        description
        price
        quantity
        name
      }
      purchaseDate
    }
  }
}
`;
