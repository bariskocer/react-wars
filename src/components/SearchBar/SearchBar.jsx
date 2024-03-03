import React from 'react'

const SearchBar = ({searchTerm,onSearch}) => {
  return (
    <div>
      <input type="text"
      value={searchTerm}
      onChange={onSearch}
      placeholder='Search' />
    </div>
  )
}

export default SearchBar
