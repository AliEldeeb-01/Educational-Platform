
import { createClient } from '@supabase/supabase-js'


const url = 'https://wgwecnkkfoybgwtddlac.supabase.co'
const ApiKey = 'sb_publishable_xyyxD4fwbB10mAR95DsK1Q_RaafmHnD'

export const supabase = createClient(url, ApiKey)


