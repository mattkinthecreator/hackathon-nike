import React, { useContext, useEffect } from 'react';
import { authContext } from '../../Contexts/AuthContext';

const Favorites = () => {

    const { favorites, 
        getDataFavorites
    } = useContext(authContext)
    console.log(favorites)

    useEffect(() => {
        getDataFavorites()
    }, [])

    return (
        <>
        {favorites.map((item) => (
            <div>
                <img src={item.images[0].images} width="200px" height="200px"/>
                <h2>CATEGORY: {item.category}</h2>
                <h2>TITLE: {item.title}</h2>
                <p>SIZE: {item.size}</p>
                <p>COLOR: {item.images[0].color}</p>
                <p>PRICE: {item.price}$</p>
            </div>
        ))}
        </>
    );
}

export default Favorites;