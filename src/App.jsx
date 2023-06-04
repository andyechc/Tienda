import './App.css'

import { products as serviceProducts } from './mocks/products.json'

import { Products } from './components/Products/Products.jsx'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer' 

import { useFilters } from './hooks/useFilters'


export default function App() {
  const { filterProducts } = useFilters ()
  const filteredProducts = filterProducts(serviceProducts)

  return (
    <div className='App'>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </div>
  )
}


