import { useState } from 'react'
import './App.css'
import { products as serviceProducts } from './mocks/products.json'
import { Products } from './components/Products/Products.jsx'
import { Header } from './components/Header/Header'
import { Filters } from './components/Filters/Filters'
import { Footer } from './components/Footer/Footer'

export default function App() {
  const [products] = useState(serviceProducts)
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'All' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <div className='App'>
      <Header />
      <Products products={filteredProducts}>
        <Filters changeFilters={setFilters}/>
      </Products>
      <Footer />
    </div>
  )
}


