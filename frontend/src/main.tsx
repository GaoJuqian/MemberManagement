import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import Layout from "./comp/Layout/Layout";
import apolloClient from "./api/http"
import {ApolloProvider} from "@apollo/client";

const container = document.getElementById('root')

const root = createRoot(container!)


root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <Layout/>
        </ApolloProvider>
    </React.StrictMode>
)
