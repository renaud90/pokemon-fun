import React from 'react'
import './CardList.css'

const Card = ({ name, types, sprite }) => {
    return (
        <div className="cardWrapper">
            <img src={sprite} height="200px" width="200px" />
            <div>
                <h2>{name}</h2>
                <p>{types.map(type => type.type.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default Card