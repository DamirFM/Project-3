import { useState } from 'react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import About from "./Components/Pages/About/About"
import Home from "./Components/Pages/Home/Home"
import Checkout from "./Components/Pages/Checkout/Checkout"
import Landing from "./Components/Pages/Landing/Landing"
import Profile from "./Components/Pages/Profile/Profile"
import Store from "./Components/Pages/Store/Store"
import Header from "./Components/Header/Header"
import PaymentPage from './Components/Pages/Store/PaymentPage';




// Construct our main GraphQL API endpoint
// Calling the SandBox for CRUD operations
const httpLink = createHttpLink({
  uri: '/graphql',
});
// Validation of the token
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store" element={<Store />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* Redirect all other paths to Landing or a 404 Not Found component */}
      </Routes>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App
