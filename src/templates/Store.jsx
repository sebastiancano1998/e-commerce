import React from 'react'
import CartList from '../containers/CartList'
import Navbar from '../containers/Navbar'
import ProductList from '../containers/ProductList'
import useGetAllProducts from "../hooks/useGetAllProducts"


const API="https://api.escuelajs.co/api/v1/products"

const Store = () => {
  //const products = useGetAllProducts(API)[0]
  //const loading = useGetAllProducts(API)[1]
  return (
    <div>
        <Navbar></Navbar>
        <div className='pt-40'>
        <ProductList></ProductList>
        <CartList></CartList>
        </div>
    </div>
  )
}

export default Store