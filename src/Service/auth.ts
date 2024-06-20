import axios from 'axios'
import { AuthProps, RegisterProps } from '@/Utils/types'

export async function registerToApi(registerProps: RegisterProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }

  return axios
    .post(url, {
      firstName: registerProps.firstName,
      lastName: registerProps.lastName,
      pseudo: registerProps.pseudo,
      age:registerProps.age,
      password: registerProps.password,
      email: registerProps.email,
      city: registerProps.city,
      promoCode:registerProps.promoCode,
    }, axiosConfig)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function login(authProps: AuthProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }

  return axios
    .post(url, {
      email: authProps.email,
      password: authProps.password,
    }, axiosConfig)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

