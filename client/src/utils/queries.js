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
