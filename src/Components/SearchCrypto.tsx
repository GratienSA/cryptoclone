'use client'
import React, { useEffect, useRef, useState } from 'react'
import { searchCryptoByName } from '../Service/crypto'
import { CryptoProps } from '@/Utils/types'

const SearchCryptos = ({ setCryptos ,name,setName}: { setCryptos: React.Dispatch<React.SetStateAction<CryptoProps[]>>,name:string,setName:any }) => {
  const refInput = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (name) {
        setIsLoading(true)
        setError(null)
        searchCryptoByName(name)
          .then((data) => {
            if (data.length === 0) {
              setError('Aucune cryptomonnaie trouvée.')
            }
            setCryptos(data)
          })
          .catch((_error) => {
            setError('Une erreur s\'est produite lors de la recherche de la cryptomonnaie.')
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }, 1000)

    return () => {
      clearTimeout(handler)
    }
  }, [name, setCryptos])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className="flex">
      <input
        type="search"
        className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
        placeholder="Search"
        aria-label="Search"
        ref={refInput}
        onChange={handleSearch}
      />
      <button
        className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
        type="button"
        onClick={async () => {
          const value = refInput.current?.value
          if (value) {
            setIsLoading(true)
            setError(null)
            try {
              const data = await searchCryptoByName(value)
              if (data.length === 0) {
                setError('Aucune cryptomonnaie trouvée.')
              } else {
                setCryptos(data)
              }
            } catch (error) {
              setError('Une erreur s\'est produite lors de la recherche de la cryptomonnaie.')
            } finally {
              setIsLoading(false)
            }
          }
        }}
      >
        {isLoading ? 'Chargement...' : 'Search'}
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default SearchCryptos
