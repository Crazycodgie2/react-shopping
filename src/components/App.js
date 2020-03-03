import React from "react"
import "../styles/App.css"
import App from "../redux/App"
import Main from "./Main"
import Cart from "./Cart"

export default props => {
  return (
    <App>
      <Main />
      <Cart />
    </App>
  )
}
