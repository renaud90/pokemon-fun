import React from 'react'
import '../container/App.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="searchBoxWrapper">
            <input
                className="searchBox"
                type="search"
                placeholder='search pokemons'
                onChange={searchChange}>
            </input>
        </div>
    )
}

export default SearchBox