'use client'

import { TradesProps } from '@/Utils/types';
import * as React from 'react';

interface TradeCardProps {
  trade: TradesProps;
}

export const TradeCard = ({ trade }: TradeCardProps) => {
  const { Giver, Receiver, Crypto } = trade;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6">
        <h1 className="mx-3 text-white font-semibold text-lg">{Crypto.name}</h1>
      </div>
      <div className="py-4 px-6">
      <img
        src={Crypto.image}
        alt={Crypto.name}
        className="w-full h-48 object-cover"
      />
        <p className="py-2 text-lg text-gray-700">Giver: {Giver.pseudo}</p>
        <p className="py-2 text-lg text-gray-700">Receiver: {Receiver.pseudo}</p>
        <p className="py-2 text-lg text-gray-700">Quantity: {Crypto.quantity}</p>
      </div>
    </div>
  );
};