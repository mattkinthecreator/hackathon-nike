import React from 'react';
import './Product.css'

const ProductCard = ( {item} ) => {
    return (
        <div class="card">
        <img src={item.images[0].images} width="400px" height="400px"/>
        <div class="container">
            <h2>{item.title}</h2>
            <p>Category: {item.category}</p>
            <p>color: {item.images.map(elem => elem.color)}</p>
            <p>size: {item.size.map(item => item + ' ')} </p>
            <p>Price: {item.price}$</p>
        </div>
    </div>
    )
};

export default ProductCard;