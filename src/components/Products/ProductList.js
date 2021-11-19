import React, { useEffect, useContext, useState } from 'react'
import ProductCard from './ProductCard'
import { productsContext } from '../../Contexts/ProductsContext'
import './Product.css'
import Sidebar from '../Home/Sidebar'
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router'

const ProductList = () => {
  const { getProducts, shoes } = useContext(productsContext)
  const [page, setPage] = useState(0)

  const pageCount = Math.ceil(shoes.length / 6)

  useEffect(() => {
    getProducts()
  }, [])

  function changePage({ selected }) {
    setPage(selected)
  }

  const productrsPerPage = 6

  const pageVisited = page * productrsPerPage
  const displayProducts = shoes
    .slice(pageVisited, pageVisited + productrsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />)

  return (
    <>
      <div className="product-list">
        <div className="container-product">
          <div>
            <Sidebar />
          </div>
          <div className="cards">{displayProducts}</div>
        </div>
        <div className="paginate">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLabelClassName={'previousBttn'}
            nextLabelClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>
    </>
  )
}

export default ProductList
