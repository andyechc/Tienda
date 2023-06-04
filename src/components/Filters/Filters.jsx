import './Filters.css'
import { useFilters } from '../../hooks/useFilters'
import { useId } from 'react'

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleCategoryChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div className='filters-price'>
                <label htmlFor={minPriceFilterId}>Precio Mínimo</label>
                <input
                    className='filters-price-range'
                    type="range"
                    value={filters.minPrice}
                    min={0}
                    max={300}
                    id={minPriceFilterId}
                    onChange={handlePriceChange}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div className='filters-category'>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select
                    className='filters-category-select'
                    id={categoryFilterId}
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