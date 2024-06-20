'use client'

import React, { useEffect, useState } from 'react';
import { getAllTrades } from '../../Service/trade';
import { TradesProps } from '../../Utils/types';
import { TradeCard } from './TradeCard';

const TradesList = () => {
  const [trades, setTrades] = useState<TradesProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTrades();
  }, []);

  const fetchTrades = async () => {
    setIsLoading(true);
    try {
      const data = await getAllTrades();
      setTrades(data);
    } catch (error) {
      console.error('Error fetching trades:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {trades.map((trade) => (
          <TradeCard key={trade.id} trade={trade} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {isLoading && 'Loading data...'}
      </div>
    </div>
  );
};

export default TradesList;
