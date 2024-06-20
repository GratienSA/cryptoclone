import axios from 'axios'

export async function getAllOffers() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}



export async function createOffer(id_crypto: string, amount: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`;

  const offerData = {
    id_crypto: id_crypto,
    amount: amount
  };

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  try {
    const response = await axios.post(url, offerData, axiosConfig);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}



// Fonction pour mettre à jour une offre
export async function updateOffer(id: string, offer: { id_crypto: string; amount: number }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/offer/update/${id}`;

  return axios
    .put(url, offer, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour supprimer une offre
export async function deleteOffer(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/offer/delete/${id}`;

  return axios
    .delete(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}