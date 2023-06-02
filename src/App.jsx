import { useState } from 'react'

import './App.css'

import service from './mocks/service.json'

import { Products } from './components/Products/Products.jsx'
import { Header } from './components/Header/Header'

export default function App() {

  return (
    <div className='App'>
      <Header />
      <Products products={service.products} />
    </div>
  )
}


