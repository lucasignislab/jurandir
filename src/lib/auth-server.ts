import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { prisma } from './db'

export async function getSession() {
    const cookieStore = await cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
            },
        }
    )

    return supabase.auth.getUser()
}

export async function getCurrentUser() {
    const { data: { user } } = await getSession()

    if (!user) return null

    const dbUser = await prisma.public_users.findUnique({
        where: { id: user.id },
        include: {
            professionals: true,
            clients: true,
        }
    })

    return dbUser
}
