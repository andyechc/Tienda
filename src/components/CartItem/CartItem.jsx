import './CartItem.css'

export function CartItem({ src, price, detail, title, quantity, addCart }) {
  return (
    <li className="cart-item">
      <img
        src={src}
        alt={detail}
        className="cart-item-img"
      />
      <div className="cart-item-title">
        <strong>{title} </strong>
        <span>${price}</span>
      </div>
      <footer className="cart-item-footer">
        <span>
          Cant: {quantity}
        </span>
        <button onClick={addCart}><i className='fa-solid fa-plus'></i></button>
      </footer>
    </li>
  )
}