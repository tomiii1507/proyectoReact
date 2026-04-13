import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './HomePage.css'
import hero from '../assets/hero.png'

const HomePage = () => {
  const featured = products.slice(0, 3)

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-image">
          <img src={hero} alt="Hero" />
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="featured">
        <h2>Productos Destacados</h2>
        <div className="featured-grid">
          {featured.map(p => (
            <div key={p.id} className="featured-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price.toLocaleString()}</p>
              <Link to="/productos">Ver más</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage