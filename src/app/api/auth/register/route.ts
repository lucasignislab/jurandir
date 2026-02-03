import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

const registerSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(2),
  phone: z.string().min(10),
  type: z.enum(['CLIENT', 'PROFESSIONAL', 'ADMIN']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = registerSchema.parse(body)

    // Create user
    const user = await prisma.user.create({
      data: {
        id: validatedData.id,
        email: validatedData.email,
        name: validatedData.name,
        phone: validatedData.phone,
        type: validatedData.type,
      },
    })

    // Create client or professional profile based on type
    if (validatedData.type === 'CLIENT') {
      await prisma.client.create({
        data: {
          userId: user.id,
        },
      })
    } else if (validatedData.type === 'PROFESSIONAL') {
      await prisma.professional.create({
        data: {
          userId: user.id,
          address: '',
          city: '',
          state: '',
          zipCode: '',
          latitude: 0,
          longitude: 0,
          document: '',
          experienceYears: 0,
          skills: [],
          portfolio: [],
        },
      })
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to create user profile' },
      { status: 500 }
    )
  }
}
