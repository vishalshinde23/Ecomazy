import React from 'react'

function SearchBar({setSearchTerm}) {
  return (
    
       <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-lg"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    
    </div>
  )
}

export default SearchBar
