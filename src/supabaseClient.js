import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://afckxwkmamjycjalfobx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_DcvKnozMGdpQpI0ut-KbCg_fhdX29Af";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
