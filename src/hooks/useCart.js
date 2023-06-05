import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const useCart = () => {
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    const checkIsMoreThanOne = product => {
        return product.quantity > 1 ? true : false
     } 

    const { cart, addCart, clearCart, removeCart, restCart } = useContext(CartContext)
    return { cart, addCart, clearCart, removeCart, restCart, checkProductInCart, checkIsMoreThanOne }
}