import React from 'react'
import '../container/App.css'

const Scroll = (props) => {
    return (
        <div className="scrollWrapper">
            {props.children}
        </div>
    )
}

export default Scroll