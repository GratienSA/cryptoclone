"use client";

import React from 'react';
import HistoryChart from '../../Components/Crypto/HistoryChart'; 



const CryptoHistoryPage = ({ cryptoId, cryptoName }) => {
  return (
    <div>
      <h1 className="text-3xl flex flex-col justify-between items-center m-10">
        Historique de {cryptoName}
      </h1>
      <HistoryChart cryptoId={cryptoId} Cryptoname={cryptoName} />
    </div>
  );
};

export default CryptoHistoryPage;

