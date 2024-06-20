import PromoCodeList from '@/Components/Promocode/PromocodeList';
import React from 'react';


const PromoCodePage = () => {
  return (
    <div>
      <h1 className="text-3xl flex flex-col justify-between items-center m-10">Promotion en cours</h1>
      
      <PromoCodeList />
    </div>
  );
};

export default PromoCodePage;

