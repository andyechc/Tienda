import { useId } from 'react'
import './Cart.css'


export function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <i className='fa-solid fa-shopping-cart'></i>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className='cart'>
                <h1>Cart</h1>
            </aside>
        </>
    )
}