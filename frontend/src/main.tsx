import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import apolloClient from "./api/http"
import {ApolloProvider} from "@apollo/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import defaultProps from "./comp/Layout/_defaultProps";

const container = document.getElementById('root')

const root = createRoot(container!)
const router = createBrowserRouter(defaultProps.routeDom, {
    basename: process.env.BUILDENV == 'vercel' ? '/MemberManagement' : ''
});


root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <RouterProvider router={router}/>
        </ApolloProvider>
    </React.StrictMode>
)
