import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};


export async function getAllTrades() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}trade/all`;

  return axios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour créer un nouvel échange
export async function createTrade(trade: { id_offer: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/trade/create`;

  return axios
    .post(url, trade, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}



// Fonction pour obtenir les actifs de l'utilisateur
export async function getUserAssets(): Promise<UserType[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`;
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}




import { User } from '@/Utils/types';

// Fonction pour obtenir les actifs de tous les utilisateurs
export async function getAllUsersAssets(): Promise<User[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`;

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}




// Fonction pour obtenir les échanges de l'utilisateur
export async function getUserTrades() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/user/my-trades`;

  return axios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}
