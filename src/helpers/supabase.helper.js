// Modules
import { createClient } from "@supabase/supabase-js";

// Instance
let _supabase;

// Initialise Supabase
export const initialiseSupabase = ({ supabaseUrl, supabaseKey }) => {
  _supabase = createClient(supabaseUrl, supabaseKey);
};

// Get Supabase
export const getSupabase = () => {
  return _supabase;
};
