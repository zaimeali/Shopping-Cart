import React from 'react'

const Mobile = ( props ) => {

    const addToCart = () => {
        console.log("Clicked");
    }

    return (
        <div>
        <h2>{ props.name }, { props.price }</h2>
        <button onClick={ addToCart }>Add to Cart</button>
        </div>
    ) 
}

export default Mobile
