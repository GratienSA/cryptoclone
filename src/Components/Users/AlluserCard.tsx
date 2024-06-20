"use client"

import React from 'react';
import { User } from '@/Utils/types';

export const AllUser: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6">
        <h1 className="mx-3 text-white font-semibold text-lg">{user.firstName} {user.lastName}</h1>
      </div>
      <div className="py-4 px-6">
        <p className="py-2 text-lg text-gray-700">Pseudo: {user.pseudo}</p>
        <p className="py-2 text-lg text-gray-700">Dollars disponibles: {user.dollarAvailables}</p>
        <h2 className="py-2 text-lg text-gray-700 font-semibold">Crypto détenues :</h2>
        <ul>
          {user.UserHasCrypto.map((userCrypto) => (
            <li key={userCrypto.Crypto.id} className="py-1 text-gray-700">
              <img src={userCrypto.Crypto.image} alt={userCrypto.Crypto.name} width={50} />
              <span className="font-semibold">{userCrypto.amount}</span> {userCrypto.Crypto.name} (Valeur: {userCrypto.Crypto.value})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUser;
