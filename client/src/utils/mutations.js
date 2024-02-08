import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_ORDER = gql`
  mutation AddOrder($products: ProductInput) {
    addOrder(products: $products) {
      _id
      purchaseDate
      products {
        name
        description
        image
        quantity
        price
      }
    }
  }
`;


