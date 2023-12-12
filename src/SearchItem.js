import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <input

        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
        />
        <button>Search</button>
    </form>
  )
}

export default SearchItem