import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = 'https://kdeapvqvjzzagnvixsnb.supabase.co'
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZWFwdnF2anp6YWdudml4c25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNjgwNDUsImV4cCI6MjAyNjg0NDA0NX0.9Q732mxMHCKlp_wISfHtWlFiQ7tytgg04San-5joMbs"
export const supabase = createClient(supabaseUrl, supabaseKey)
