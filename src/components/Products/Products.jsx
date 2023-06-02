import { Item } from '../Item/Item'
import './Products.css'

export function Products({ products }) {
  return (
    <main className="products">
      <h2 className='products-title'>Productos</h2>
      <ul className='products-list'>
        {
          products.slice(0, 10).map(product => (
            <Item product={product} key={product.id} />
          ))
        }
      </ul>
    </main>
  )
}