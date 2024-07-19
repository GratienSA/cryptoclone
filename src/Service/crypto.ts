"use client"

import axios from 'axios';

export async function getAllCryptos() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      
      throw new Error(e);
    });
}



export async function searchCryptoByName(name: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la recherche de la cryptomonnaie :', error);
    return [];
  }
}



export async function buyCrypto(cryptoid:string, amount:number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  return axios
    .post(
      url,
      {
        id_crypto: cryptoid,
        amount: amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}



import{ AxiosRequestConfig } from 'axios';

export async function getCryptoHistoryById(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${id}`;

  const axiosConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    console.log('Fetching data from URL:', url);
    console.log('Using headers:', axiosConfig.headers);

    const response = await axios.get(url, axiosConfig);
    console.log('API response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching crypto history:', error);

    if (axios.isAxiosError(error)) {
      console.error('Axios error response:', error.response?.data);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
}



// Fonction pour créer une nouvelle cryptomonnaie
export async function createCrypto(crypto: Crypto) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  

  return axios
    .post(url, crypto, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}



// Fonction pour mettre à jour une cryptomonnaie
export async function updateCrypto(id: string, crypto: Partial<Crypto>) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/crypto/update/${id}`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  

  return axios
    .put(url, crypto, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour supprimer une cryptomonnaie
export async function deleteCrypto(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/crypto/delete/${id}`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  

  return axios
    .delete(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}
