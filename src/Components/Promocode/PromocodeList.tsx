'use client'

import React, { useEffect, useState } from 'react';
import { getAllPromoCodes } from '../../Service/promoCode';
import { PromoCode } from '../../Utils/types';
import { PromoCard } from './PromoCard';

const PromoCodeList = () => {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const fetchPromoCodes = async () => {
    setIsLoading(true);
    try {
      const data = await getAllPromoCodes();
      setPromoCodes(data);
    } catch (error) {
      console.error('Error fetching promo codes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {promoCodes.map((promoCode) => (
          <PromoCard key={promoCode.id} promoCode={promoCode} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {isLoading && 'Loading data...'}
      </div>
    </div>
  );
};

export default PromoCodeList;


