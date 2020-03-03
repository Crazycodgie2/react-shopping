import React, { useState } from "react"
import "../styles/App.css"
import { useProducts, useCart } from "../hooks"
import { FiShoppingCart } from "react-icons/fi"

export default props => {
  const { products } = useProducts()
  const { add } = useCart()

  return (
    <div className="wrapper">
      <button className="cartbutton">
        <FiShoppingCart />
      </button>
      <div className="products">
        {products.map(product => (
          <div className="product">
            <img src={`/assets/${product.sku}_1.jpg`} />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button className="buybutton" onClick={e => add(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
