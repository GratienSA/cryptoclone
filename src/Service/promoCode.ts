import axios from 'axios';

export async function getAllPromoCodes() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`;

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  return axios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour créer un nouveau code promotionnel
export async function createPromoCode(promoCode: { name: string; value: number }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/promoCode/create`;

  return axios
    .post(url, promoCode, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour mettre à jour un code promotionnel
export async function updatePromoCode(id: string, promoCode: { name: string; value: number }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/promoCode/update/${id}`;

  return axios
    .put(url, promoCode, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour supprimer un code promotionnel
export async function deletePromoCode(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/promoCode/delete/${id}`;

  return axios
    .delete(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}
