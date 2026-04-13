import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/products/ProductCard'
import './ProductsPage.css'

const ProductsPage = () => { 
  
  const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

  const [filter, setFilter] = useState('all')
  
  const categories = ['all', ...new Set(products.map(p => p.category))]
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter)

  return (
    <div className="products-page">
      <h1>Productos</h1>
      <div className="filters">
        {categories.map(cat => (
          <button key={cat} className={filter === cat ? 'active' : ''} onClick={() => setFilter(cat)}>
            {cat === 'all' ? 'Todos' : capitalize(cat)}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />  
        ))}
      </div>
    </div>
  )
}

export default ProductsPage