// 1. imports
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_PRODUCTS = "products/GET_PRODUCTS"

// 3. initial state
const initialState = {
  products: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// 5. action creators
function getProducts() {
  return dispatch => {
    axios.get("/products").then(resp => {
      dispatch({
        type: GET_PRODUCTS,
        payload: resp.data
      })
    })
  }
}

export function addProducts(text) {
  return dispatch => {
    axios.post("/products", { text, status: "active" }).then(resp => {
      dispatch(getProducts())
    })
  }
}

// 6. custom hook
export function useProducts() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.productState.products)
  const add = text => dispatch(addProducts(text))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return { products, add }
}
