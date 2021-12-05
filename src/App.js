import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './client';
import SellerApplication from './components/SellerApplication/SellerApplication.js';

function App() {
    return (
        <ApolloProvider client={client}>
            <SellerApplication />
        </ApolloProvider>
    );
}

export default App;
