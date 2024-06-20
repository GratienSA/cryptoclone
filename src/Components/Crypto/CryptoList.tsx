'use client'
import React, { useEffect, useState } from 'react'
import { getAllCryptos } from '../../Service/crypto'
import SearchCryptos from '../SearchCrypto'
import { Crypto } from './Cryptocard'

export interface CryptoType {
    id: string;
    image: string;
    name: string;
    quantity: number;
    value: number;
    created_at: string;
    updated_at: string;
  }

const CryptoList = () => {
  const [cryptos, setCryptos] = useState<CryptoType[]>([])
  const [skip, setSkip] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState<string>("")


  useEffect(() => {
    if(name.length === 0)
{
    fetchCryptos()}
  }, [skip,name])

  const fetchCryptos = async () => {
    setIsLoading(true)
    try {
      const data = await getAllCryptos()
      console.log(data);
      
      setCryptos(data)
    } catch (error) {
      console.error("Error fetching cryptos:", error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col justify-between items-center">
      <SearchCryptos setCryptos={setCryptos} name={name} setName={setName} />
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cryptos.map((crypto) => (
          <Crypto key={crypto.id} crypto={crypto} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {isLoading && "Loading data..."}
        <button
          className="bg-black text-white rounded-s py-4 px-8 mt-[50px]"
          onClick={() => setSkip((prev) => prev + 12)}
        >
          See more
        </button>
      </div>
    </div>
  )
}

export default CryptoList


