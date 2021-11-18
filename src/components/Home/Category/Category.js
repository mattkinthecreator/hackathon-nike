import React, { useContext, useState } from 'react';
import { productsContext } from '../../../Contexts/ProductsContext';
import history from "../../../helpers/history";

const Category = () => {
const categories =  ['Спортивный стиль', 'Jordan', 'Бег', 'Баскетбол', 'Футбол', 'Бейсбол']

const { getProducts } = useContext(productsContext)
    const [category, setCategory] = useState(getCatgeory())
  
    function getCatgeory() {
      let search = new URLSearchParams(history.location.search)
      return search.get('category')
    }
  
    console.log(category)
    function handleChangeCategory(value) {
        if(value === 'all') {
            history.push(`${history.location.pathname.replace('category')}`)
            getProducts()
            return
        }
      let search = new URLSearchParams(history.location.search)
      search.set('category', value)
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProducts(search.toString())
      setCategory(value)
    }
    return (
        <form>
            {categories.map(item => (
               <label>{item}<input name="category" type="radio" value={item} onClick={() => handleChangeCategory(item)}/></label> 
            ))
            }
            <label>All
                <input type="radio" name="category" value="all" onClick={(e) => handleChangeCategory(e.target.value)} />
            </label>
        </form>
    );
};

export default Category;