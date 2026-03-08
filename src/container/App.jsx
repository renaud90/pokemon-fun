import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Scroll from '../components/Scroll.jsx'

const App = () => {
    const [pokemons, setPokemons] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1500")
            .then((res) => res.json())
            .then(pokemons => setPokemons(pokemons.results))
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
    const filteredPokemons = pokemons.filter(r => {
        if (searchField.length >= 3) {
            return r.name.toLowerCase().includes(searchField.toLowerCase());
        } else {
            return false
        }
    })
    if (!pokemons.length) {
        return (<h1>Loading...</h1>)
    } else {
        return (
            <div className="appWrapper">
                <h1>Search your pokemon</h1>
                <h4>Type at least 3 characters to see results</h4>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList pokemons={filteredPokemons} />
                </Scroll>
            </div>
        )
    }
}


export default App