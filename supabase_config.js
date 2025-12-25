// Supabase Configuration
// Replace these placeholders with your actual project details from Supabase
// You can find these in your Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL = 'https://djcawwkqkrpkowivzvwv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qBbu_YmvFIBpA8jsekgAZw_0hPuDWEd';

// The client will be initialized here once we add the library
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);