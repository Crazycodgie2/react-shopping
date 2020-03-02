import React, { useState } from "react"
import "../styles/App.css"
import { useProducts, useCart } from "../hooks"
import { FiShoppingCart } from "react-icons/fi"

export default props => {
  const { products, add } = useProducts()
  const [product, setProduct] = useState("")
  const { cart, toggle } = useCart()

  function handleClick(e) {
    e.preventDefault()
    add(product)
  }

  return (
    <div className="wrapper">
      <button className="cartbutton" onClick={toggle}>
        <FiShoppingCart />
      </button>
      <div className="product_list">
        {products.map(product => (
          <div
            key={"product" + product.id}
            className={product.status === "completed" ? "completed" : ""}
            onClick={e => handleClick(product.id)}
          >
            <p className={product.isFreeShipping ? "free" : "cost"}>
              Free Shipping
            </p>
            <img src={`/assets/${product.sku}_1.jpg`} /> <br />
            {product.title} <br />
            <p>${Number(product.price).toFixed(2)}</p>
            <br />
            <p className="installments">{product.installments}</p>
            {product.isFreeShipping}
            <button input="button" className="buybutton" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
