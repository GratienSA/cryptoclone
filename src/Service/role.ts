import axios from 'axios';
import { Role } from '@/Utils/types';

// Configuration de base pour les requêtes axios
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// Fonction pour obtenir tous les rôles
export async function getAllRoles() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/role/all`;

  return axios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour créer un nouveau rôle
export async function createRole(role: { name: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/role/create`;

  return axios
    .post(url, role, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour mettre à jour un rôle
export async function updateRole(id: string, role: { name: string }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/role/update/${id}`;

  return axios
    .put(url, role, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}

// Fonction pour supprimer un rôle
export async function deleteRole(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/role/delete/${id}`;

  return axios
    .delete(url, axiosConfig)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e);
    });
}
