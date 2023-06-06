import { Cart } from '../Cart/Cart'
import './Header.css'

export function Header() {
    return (
        <header className="header">
            <div className='header-logo-nav'>
                <h1>Tienda <i className='fa-solid fa-shop'></i></h1>
                <Cart />
            </div>
        </header>
    )
}
