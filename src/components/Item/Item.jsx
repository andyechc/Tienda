import { useCart } from '../../hooks/useCart'
import './Item.css'

export function Item({ product }) {
  const { cart, addCart, checkProductInCart, removeCart } = useCart()

  const isProductInCart = checkProductInCart(product)

  return (
    <li className='item'>
      <img className='item-img' src={product.src} alt={product.details} />
      <div className='item-details'>
        <h3>{product.name}</h3>
        <p>{product.details}</p>
      </div>
      <div className='item-buttons'>
        <strong>${product.price}</strong>
        <button onClick={() => {
          isProductInCart
            ? removeCart(product)
            : addCart(product)
          }}>
          <i className={
            isProductInCart
              ? 'fa-solid fa-x'
              : 'fa-solid fa-shopping-cart'}></i>
        </button>
      </div>
    </li>
  )
}