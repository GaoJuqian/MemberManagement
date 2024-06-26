import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import apolloClient from "./api/http"
import {ApolloProvider} from "@apollo/client";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import defaultProps from "./comp/Layout/_defaultProps";

const container = document.getElementById('root')

const root = createRoot(container!)
const router = createHashRouter(defaultProps.routeDom, {
    // basename: import.meta.env.VITE_BUILDENV == 'vercel' ? '' : '',
});


root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <RouterProvider router={router}/>
        </ApolloProvider>
    </React.StrictMode>
)
