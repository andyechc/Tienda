import { useState } from 'react'
import './Filters.css'

export function Filters({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState('All')

    const handlePriceChange = (e) => {
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div className='filters-price'>
                <label htmlFor="price">Precio Mínimo</label>
                <input
                    className='filters-price-range'
                    type="range"
                    value={minPrice}
                    min={0}
                    max={300}
                    id='price'
                    onChange={handlePriceChange}
                />
                <span>${minPrice}</span>
            </div>
            <div className='filters-category'>
                <label htmlFor="category">Categorias</label>
                <select 
                    className='filters-category-select' 
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="All">Todas</option>
                    <option value="Ropa">Ropas</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Perfumes">Perfumes</option>
                    <option value="Relojes">Relojes</option>
                    <option value="Calzado">Calzado</option>
                </select>
            </div>
        </section>
    )
}