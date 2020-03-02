import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_CART = "cart/GET_CART"
const ADD_PRODUCT = "cart/ADD_PRODUCT"

// 3. initial state
const initialState = {
  cart: [],
  open: false
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: action.payload }
    case GET_STATUS:
      return { ...state, open: !state.open }
    default:
      return state
  }
}

// 5. action creators
function toggleCart() {
  return {
    type: GET_STATUS
  }
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const status = useSelector(appState => appState.cartState.open)

  const toggle = () => dispatch(toggleCart())
  const add = product => dispatch(addProduct(product))

  useEffect(() => {}, [dispatch])

  return { cart, status, toggle, add }
}
