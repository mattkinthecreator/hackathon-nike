import React, {useEffect, useContext} from 'react';
import ProductCard from './ProductCard';
import { productsContext } from '../../Contexts/ProductsContext'
import './Product.css'
import Sidebar from '../Home/Sidebar';


const ProductList = () => {
    const { getProducts, shoes } = useContext(productsContext)

    useEffect(() => {
        getProducts()
      }, [])

    return (
        <>
        <Sidebar />
        <div className='shoes'>
            <div className="container">
                <div className='cards-options'>
                        <div>
                            <h2>Мужская обувь</h2>
                        </div>
                        <div className='cards-options-set'>
                            <p>Показать фильтры</p>
                            <p>Сортировать по</p>
                        </div>
                </div>
            </div>
        </div>
        <div className="cards">
                {shoes.map((item) => 
                    <ProductCard 
                        key={item.id} 
                        item={item}/>
                    )
                }
            </div>
        </>
        
    );
};

export default ProductList;