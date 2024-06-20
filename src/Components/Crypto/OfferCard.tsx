'use client'

import React from 'react'
import { OffersProps } from '../../Utils/types'
import { Crypto } from './Cryptocard'

export const OfferCard = ({ offer }: { offer: OffersProps }) => {
  return (
    <div>
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6">
      <p>Number of tokens: {offer.amount}</p>
      <p>Seller: {offer.User.pseudo}</p>
      </div>
     
      <Crypto crypto={offer.Crypto} isBuyVisible={false} />
      <div className="w-full flex justify-end">
      </div>
      </div>
    </div>
  )
}

