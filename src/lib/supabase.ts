import { createClient } from '@supabase/supabase-js'

let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseInstance) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables')
    }

    supabaseInstance = createClient(supabaseUrl, supabaseKey)
  }

  return supabaseInstance
}

// For backward compatibility - lazy initialization
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(target, prop: string | symbol) {
    const client = getSupabaseClient()
    return client[prop as keyof typeof client]
  }
})
