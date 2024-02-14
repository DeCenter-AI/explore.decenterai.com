import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
  return (
    <div className="flex items-center rounded-full bg-primary_10 py-2 px-4  w-max sm:pr-8  mx-auto">
      <IoSearchOutline className="mr-2 text-primary_7" size={30} />
      <input
        type="search"
        className="w-full bg-transparent placeholder:text-primary_7 focus:outline-none focus:border-none"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
