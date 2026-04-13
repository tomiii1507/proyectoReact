import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mi Tienda</h3>
          <p>Tu mejor opción en compras online</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@mitienda.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Mi Tienda</p>
      </div>
    </footer>
  )
}

export default Footer