import React from 'react'

const Input = ({content, ...rest}:any) => {
  return (
<div>
    <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
     {content}
    </label>
  </div>
  <div className="md:w-2/3">
    <input  {...rest}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
  </div>
  </div>

  )
}

export default Input