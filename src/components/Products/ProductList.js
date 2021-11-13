import React, {useEffect, useContext} from 'react';
import ProductCard from './ProductCard';
import { productsContext } from '../../Contexts/ProductsContext'



const ProductList = () => {
    const { getProducts, shoes } = useContext(productsContext)

    useEffect(() => {
        getProducts()
      }, [])

    return (
        <div>
            {shoes.map((item) => 
                <ProductCard 
                    key={item.id} 
                    item={item}/>
                )
            }
        </div>
    );
};

export default ProductList;