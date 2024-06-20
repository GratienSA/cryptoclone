'use client'

import { PromoCode } from '@/Utils/types';
import * as React from 'react';

interface PromoCardProps {
  promoCode: PromoCode;
}

export const PromoCard = ({ promoCode }: PromoCardProps) => {
  const { value, name } = promoCode;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6">
        <h1 className="mx-3 text-white font-semibold text-lg">Name: {name}</h1>
      </div>
      <div className="py-4 px-6">
        <p className="py-2 text-lg text-gray-700"> Promo: {value}</p>
      </div>
    </div>
  );
};
