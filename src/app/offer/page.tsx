'use client'

import React, { useEffect, useState } from 'react'
import { getAllOffers } from '../../Service/offer'
import { OffersProps } from '../../Utils/types'
import { OfferCard } from '../../Components/Crypto/OfferCard'
import Navbar from '@/Components/Homepage/Navbar'


const page = () => {
  const [offersList, setOffersList] = useState<OffersProps[]>()

  useEffect(() => {
    getAllOffers()
      .then((res) => setOffersList(res.data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="flex flex-col justify-between items-center">
      <Navbar/>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
      {offersList &&
        offersList?.map((offer) => {
          return (
            <div
              key={offer.id}
              className="border-2 border-solid w-full rounded-md mt-1 p-2 "
            >
              <OfferCard offer={offer} />
            </div>
          )
        })}
   </div>
   </div>
  )
}

export default page