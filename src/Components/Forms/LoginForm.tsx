'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { login } from '@/Service/auth'
import React, { useState } from 'react'
import Link from "next/link";
import Navbar from '../Homepage/Navbar'

// Interface FormData

interface FormData {
  email: string
  password: string
}

// Composant LoginForm

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [error, setError] = useState('')
  const { push } = useRouter()


  // Fonction onSubmit

  const onSubmit = async (data: FormData) => {
    setError('')
    try {
      const res = await login(data)
      if (res.status === 200) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('token', res.data.access_token)
          push('/')
        }
      }
    } catch (e) {
      console.error('error', e)
      setError('Invalid credentials')
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register('email', { required: 'Email is required' })}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="hash" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="hash"
                {...register('password', { required: 'Password is required' })}
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
          </div>

          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </form>
        <Link href="/register">
          <button className="text-orange-500 hover:text-blue-600  py-2">
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}
