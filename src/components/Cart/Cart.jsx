import { useId } from 'react'
import './Cart.css'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../CartItem/CartItem'

export function Cart() {
  const { cart, clearCart, addCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <i className='fa-solid fa-shopping-cart'></i>
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className='cart'>
        <h1>Cart </h1>
        <ul className='cart-list'>
          {cart.map(product => (
            <CartItem 
              src={product.src}
              key={product.id}
              detail={product.detail}
              title={product.name}
              price={product.price}
              quantity={product.quantity}
              addCart={() => addCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}><i className='fa-solid fa-brush'></i></button>
      </aside>
    </>
  )
}