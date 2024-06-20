"use client"

import React from 'react';
import HistoryChart from '@/Components/Crypto/HistoryChart';

const CryptoPage = () => {
  const cryptoId = "91b6239c-b217-452b-9a50-0ab1869b98e7";
  const cryptoName = " MacCoin";

  return (
    <div>
      <h1 className="text-3xl flex flex-col justify-between items-center m-10">Historique de {cryptoName}</h1>
      
      <HistoryChart cryptoId={cryptoId} />
    </div>
  );
};

export default CryptoPage;
