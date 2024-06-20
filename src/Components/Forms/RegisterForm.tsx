'use client'

import { useForm } from 'react-hook-form';
import React from 'react';
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from '../../validations/validateurForm';
import { registerToApi } from '@/Service/auth';
import { useRouter } from 'next/navigation';

type UserFormType = {
  firstName: string;
  lastName: string;
  pseudo: string;
  age: number;
  password: string;
  confirmPassword: string;
  email: string;
  city: string;
  promoCode?: string;
};

const Register = () => {
const {push} = useRouter()
  
  const { handleSubmit, register, formState: { errors } } = useForm<UserFormType>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "Gratien", 
      lastName:"aa",
      password:"AAaa11!!",
      confirmPassword:"AAaa11!!",
      city:"hemmp",
      age:28,
      email:"jrllo@feer.fdfs",
      pseudo:"hello"
      
    }
  });

  const onSubmit = (data: UserFormType) => {
  registerToApi(data).then((res)=> {localStorage.setItem("token", res.data.access_token)
push("/")

  }).catch((e)=>console.log(e))
  };

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
            {/* Champ First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  {...register('firstName', { required: 'First Name is required', minLength: { value: 5, message: "Minimum 5 characters" } })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
              </div>
            </div>

            {/* Champ Last Name */}
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

            {/* Champ Pseudo */}
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

            {/* ChampAge */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  {...register('age', { required: 'Age is required' })}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.age && <p className="text-red-600">{errors.age.message}</p>}
              </div>
            </div>

            {/* Champ Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Please enter a valid email" } })}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            {/* Champ Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            {/* Champ Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    required: 'Confirm password is required',
                  })}
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            {/* Champ City */}
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
                {errors.city && <p className="text-red-600">{errors.city.message}</p>}
              </div>
            </div>

            {/* Champ Promo Code */}
            <div>
              <label htmlFor="promoCode" className="block text-sm font-medium leading-6 text-gray-900">
                Promo Code
              </label>
              <div className="mt-2">
                <input
                  id="promoCode"
                  {...register('promoCode')}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                />
                {errors.promoCode && <p className="text-red-600">{errors.promoCode.message}</p>}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
          
          {/* Lien vers la page de connexion */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Already have an account?
            </span>{" "}
            <Link href="/login">
              <button className="text-orange-500 hover:text-blue-600 py-2"> Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;