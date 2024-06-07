'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { register } from '@/Service/auth'
import React, { useState } from 'react'


// Interface de données du formulaire

// Cette interface définit la structure des données du formulaire, y compris les champs pour le prénom, 
// le nom, le pseudo, le mot de passe, l'email, l'ID de rôle, la ville, le statut actif, 
// le solde en dollars.

interface FormData {
  firstName: string
  lastName: string
  pseudo: string
  hash: string
  email: string
  roleId: string
  city: string
  isActive: boolean
  dollarAvailables: number
 
}

export const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
  const [error, setError] = useState('')
  const { push } = useRouter()
  const password = watch('hash')

// Le composant RegisterForm utilise le hook useForm de react-hook-form pour gérer le formulaire. 
// Il initialise également un état local error pour afficher les messages 
// d'erreur et utilise le hook useRouter de Next.js pour la navigation.


// Fonction de soumission du formulaire

  const onSubmit = async (data: FormData) => {
    setError('')
    if (data.hash !== data.confirmPassword) {
      setError("Password and its confirmation must be similar")
      return
    }

    try {
      const res = await register(data)
      if (res.status === 201) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('token', res.data.access_token)
          push('/')
        }
      }
    } catch (e) {
      console.error('error', e)
      setError('Credentials taken')
    }
  }

  // La fonction onSubmit est appelée lorsque le formulaire est soumis. 
  // Elle vérifie d'abord si le mot de passe et sa confirmation sont identiques. Si ce n'est pas le cas,
  // elle affiche un message d'erreur. Sinon, elle appelle la fonction register avec les données du formulaire. 
  // Si l'enregistrement réussit (code de statut 201), elle stocke le jeton d'accès dans le localStorage du navigateur 
  // et redirige l'utilisateur vers la page d'accueil. En cas d'erreur, elle affiche un message d'erreur générique.


  // Rendu du formulaire

  return (


    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Champs du formulaire */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                {...register('firstName', { required: 'First Name is required' })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                {...register('lastName', { required: 'Last Name is required' })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="pseudo" className="block text-sm font-medium leading-6 text-gray-900">
              Pseudo
            </label>
            <div className="mt-2">
              <input
                id="pseudo"
                {...register('pseudo', { required: 'Pseudo is required' })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.pseudo && <p className="text-red-600">{errors.pseudo.message}</p>}
            </div>
          </div>

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
                {...register('hash', { required: 'Password is required' })}
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.hash && <p className="text-red-600">{errors.hash.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="roleId" className="block text-sm font-medium leading-6 text-gray-900">
              Role ID
            </label>
            <div className="mt-2">
              <input
                id="roleId"
                {...register('roleId', { required: 'Role ID is required' })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
              {errors.roleId && <p className="text-red-600">{errors.roleId.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                {...register('city')}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dollarAvailables" className="block text-sm font-medium leading-6 text-gray-900">
              Dollar Availables
            </label>
            <div className="mt-2">
              <input
                id="dollarAvailables"
                {...register('dollarAvailables')}
                type="number"
                step="0.01"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
              />
            </div>
          </div>

          <div>
            <p className="text-red-600">{error}</p> {/* Affichage des erreurs */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button> {/* Bouton de soumission */}
          </div>
        </form>
      </div>
    </div>
    </>
  )
}


// Le composant RegisterForm rend un formulaire avec des champs pour saisir les informations de l'utilisateur. 
// Chaque champ est géré par la bibliothèque react-hook-form à l'aide du hook register. 
// Les erreurs de validation sont affichées en dessous de chaque champ concerné. 
// Le formulaire appelle la fonction onSubmit lors de la soumission, et les messages 
// d'erreur généraux sont affichés au-dessus du bouton de soumission.