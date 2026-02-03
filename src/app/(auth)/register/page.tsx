'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'
import { UserType } from '@prisma/client'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [userType, setUserType] = useState<UserType>('CLIENT')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // 1. Create auth user in Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (authError) throw authError

      if (authData.user) {
        // 2. Create user record in our database
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: authData.user.id,
            email,
            name,
            phone,
            type: userType,
          }),
        })

        if (!response.ok) {
          throw new Error('Erro ao criar perfil')
        }
      }

      setSuccess(true)
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar conta'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Conta Criada!
            </h2>
            <p className="mt-4 text-gray-600">
              Verifique seu email para confirmar o cadastro.
            </p>
            <Button
              className="mt-6 w-full"
              onClick={() => window.location.href = '/login'}
            >
              Ir para Login
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Criar Conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Cadastre-se no Portal Jurandir - Marido de Aluguel
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Conta
              </label>
              <div className="mt-2 flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="CLIENT"
                    checked={userType === 'CLIENT'}
                    onChange={(e) => setUserType(e.target.value as UserType)}
                    className="mr-2"
                  />
                  Cliente
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="PROFESSIONAL"
                    checked={userType === 'PROFESSIONAL'}
                    onChange={(e) => setUserType(e.target.value as UserType)}
                    className="mr-2"
                  />
                  Profissional
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <Input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Já tem conta?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
