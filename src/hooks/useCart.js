import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const useCart = () => {
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    const { cart, addCart, clearCart, removeCart } = useContext(CartContext)
    return { cart, addCart, clearCart, removeCart, checkProductInCart }
}