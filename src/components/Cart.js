import React from "react"
import { useCart } from "../hooks"

export default props => {
  const { cart, total, remove } = useCart()

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="list">
        {cart.map(product => (
          <div className="product">
            <img src={`/assets/${product.sku}_2.jpg`} />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={e => remove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}
