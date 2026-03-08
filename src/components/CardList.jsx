import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({ pokemons }) => {
    const [cardComponent, setCardComponent] = useState([])

    useEffect(() => {
        const cards = Promise.all(pokemons.map(pokemon => fetch(pokemon.url)
            .then(res => res.json())
            .then(pokemon => {
                return <Card key={pokemon.i} id={pokemon.i} name={pokemon.name} types={pokemon.types} sprite={pokemon.sprites.front_default} />
            })))
        setCardComponent(cards)
    }, [pokemons])

    return (
        <div className="cardListWrapper">
            {cardComponent}
        </div>
    )
}

export default CardList