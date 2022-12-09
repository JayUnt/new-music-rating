import { createClient } from "@supabase/supabase-js";

// TODO: move to env..
export default createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
)