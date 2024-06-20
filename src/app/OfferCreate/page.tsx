'use client'
import { createOffer } from '@/Service/offer';
import React, { useState } from 'react';

const OfferCreatePage = () => {
  const [idCrypto, setIdCrypto] = useState('');
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createOffer(idCrypto, amount);
      setResponse(result);
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Create Offer</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Crypto ID:
            </label>
            <input 
              type="text" 
              value={idCrypto} 
              onChange={(e) => setIdCrypto(e.target.value)} 
              required 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amount:
            </label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
              required 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Offer
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default OfferCreatePage;
