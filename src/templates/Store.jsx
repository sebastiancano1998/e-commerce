import React from 'react'
import Navbar from '../containers/Navbar'
import ProductList from '../containers/ProductList'


const Store = () => {
  //const products = useGetAllProducts(API)[0]
  //const loading = useGetAllProducts(API)[1]
  return (
    <div>
        <Navbar></Navbar>
        <div className='pt-40'>
        <ProductList></ProductList>
        </div>
    </div>
  )
}

export default Store