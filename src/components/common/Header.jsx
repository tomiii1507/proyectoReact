import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Header.css'

const Header = () => {
  const { getTotalItems } = useContext(CartContext)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><h1>Mi Tienda</h1></Link>
      </div>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="cart-widget">
        <Link to="/carrito">🛒 <span className="cart-counter">{getTotalItems()}</span></Link>
      </div>
    </header>
  )
}

export default Header