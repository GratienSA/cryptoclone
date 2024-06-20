
import TradesList from '@/Components/Trades/Tradeslist';
import React from 'react';

const TradePage = () => {
  return (
    <div>
      <h1 className="text-3xl flex flex-col justify-between items-center m-10">Running Trades </h1>
      
      <TradesList />
    </div>
  );
};

export default TradePage;