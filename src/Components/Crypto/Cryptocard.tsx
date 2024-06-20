'use client'

import { CryptoProps } from '@/Utils/types'
import React from 'react'
import { BuyCryptoModal } from '../Modals/BuyCryptoModal'

interface CryptoComponentProps {
  crypto: CryptoProps;
}

export const Crypto = ({ crypto }: CryptoComponentProps) => {

  console.log('crypto:', crypto);

  
  if (!crypto.image) {
    return <div>Image not available</div>;
  }

  return (
    <div>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover"
      />
      <p>{crypto.name}</p>
      <p className="text-sm">Value: {crypto.value}</p>
      <p className="text-sm">Quantity: {crypto.quantity}</p>
      <BuyCryptoModal crypto={crypto} />
    </div>
  )
}
