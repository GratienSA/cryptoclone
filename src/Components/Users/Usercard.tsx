'use client'

import { UserHasCrypto } from '@/Utils/types';
import * as React from 'react';

export interface CryptoType extends UserHasCrypto {}

export interface UserProps {
  firstName: string;
  lastName: string;
  dollarAvailables: number;
  pseudo: string;
  age: number;
  UserHasCrypto: CryptoType[];
}

export const User = ({user }: {user:UserProps}) => {

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6">
        <h1 className="mx-3 text-white font-semibold text-lg">{user.firstName} {user.lastName}</h1>
      </div>
      <div className="py-4 px-6">
        <p className="py-2 text-lg text-gray-700">Pseudo: {user.pseudo}</p>
        <p className="py-2 text-lg text-gray-700">Âge: {user.age}</p>
        <p className="py-2 text-lg text-gray-700">Dollars disponibles: {user.dollarAvailables}</p>
        <h2 className="py-2 text-lg text-gray-700 font-semibold">Crypto détenues :</h2>
        <ul>
          {user.UserHasCrypto.map((crypto) => (
            <li key={crypto.id} className="py-1 text-gray-700">
              <span className="font-semibold">{crypto.amount}</span> {crypto.Crypto.name} ({crypto.Crypto.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};