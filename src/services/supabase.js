import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://owfmwjrwzbfhwsxqkpcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zm13anJ3emJmaHdzeHFrcGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MDk4NDEsImV4cCI6MjAwNDI4NTg0MX0.xz4lMaJPQKlIPUjY6Wwgvsv4erkg0OG4h8zrP2CUQCQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
