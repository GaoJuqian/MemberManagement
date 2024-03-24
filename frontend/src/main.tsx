import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Layout from "./comp/Layout/Layout";
import { createClient } from "@supabase/supabase-js";

const container = document.getElementById('root')

const root = createRoot(container!)

const url = 'https://kdeapvqvjzzagnvixsnb.supabase.co'
const supabase = createClient(url, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZWFwdnF2anp6YWdudml4c25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNjgwNDUsImV4cCI6MjAyNjg0NDA0NX0.9Q732mxMHCKlp_wISfHtWlFiQ7tytgg04San-5joMbs");


root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
)
