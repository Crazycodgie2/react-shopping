import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
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
    default:
      return state
  }
}

// 5. action creators
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

  const add = product => dispatch(addProduct(product))

  useEffect(() => {}, [dispatch])

  return { cart, status, add }
}
