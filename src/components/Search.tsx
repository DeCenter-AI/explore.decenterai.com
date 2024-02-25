"use client"
import React, { ChangeEventHandler, FormEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

type SearchOutline = {
  setSearchText: (value: string) => void; //  set the search text
}

const Search: React.FC<SearchOutline> = ({ setSearchText }) => {
  const [value, setValue] = useState<string>("")

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setSearchText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchText(value)
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center rounded-full bg-primary_10 py-2 px-4  w-max sm:pr-8  mx-auto">
      <IoSearchOutline className="mr-2 text-primary_7" size={30} />
      <input
        type="search"
        onChange={handleTextChange}
        className="w-full bg-transparent placeholder:text-primary_7 focus:outline-none focus:border-none"
        placeholder="Search"
      />
    </form>
  )
}

export default Search
