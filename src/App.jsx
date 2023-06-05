import { products as serviceProducts } from './mocks/products.json'

import { Products } from './components/Products/Products.jsx'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer' 

import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cartContext'


export default function App() {
  const { filterProducts } = useFilters ()
  const filteredProducts = filterProducts(serviceProducts)

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}


