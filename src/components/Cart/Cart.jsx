import { useId } from 'react'
import './Cart.css'
import { useCart } from '../../hooks/useCart'

export function CartItem({ src, price, detail, title, quantity, addCart }) {
  return (<li>
    <img
      src={src}
      alt={detail}
    />
    <div>
      <strong>{title} - {price}</strong>
    </div>
    <footer>
      <small>
        Cant: {quantity}
      </small>
      <button onClick={addCart}>+</button>
    </footer>
  </li>
  )
}

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
        <h1>Cart</h1>
        <ul>
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