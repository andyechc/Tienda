import { Filters } from '../Filters/Filters'
import { GoUp } from '../GoUp/GoUp'
import { Item } from '../Item/Item'
import './Products.css'

export function Products({ products }) {
  return (
    <main className="products" id='products'>
      <div className='products-header'>
        <h2>Productos</h2>
        <Filters />
      </div>
      <ul className='products-list'>
        {
          products.map(product => (
            <Item product={product} key={product.id} />
          ))
        }
      </ul>
      {
        products &&
        <GoUp />
      }
    </main>
  )
}