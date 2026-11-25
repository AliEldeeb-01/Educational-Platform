import { supabase } from './src/clientSupabase.js'

const intervalMs = 8 * 60 * 60 * 1000

const sendRequests = async () => {
  for (let request = 1; request <= 3; request += 1) {
    const { error } = await supabase.from('Products').select('id').limit(1)

    if (error) {
      console.error(`Supabase request ${request} failed: ${error.message}`)
      return
    }

    console.log(`Supabase request ${request}/3 succeeded.`)
  }
}

await sendRequests()
setInterval(() => {
  void sendRequests()
}, intervalMs)
