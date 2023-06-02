import { lazy } from 'react'
import './Item.css'

export function Item({product, key}) {
    return (
        <li className='item' key={key}>
            <img className='item-img' src={product.src} onLoad={lazy} alt={product.details} />
            <div className='item-details'>
                <h3>{product.name}</h3>
                <p>{product.details}</p>
            </div>
            <div className='item-buttons'>
                <strong>${product.price}</strong>
                <button><i className='fa-solid fa-shopping-cart'></i></button>
            </div>
        </li>
    )
}