import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-section">
          <div className="about-image">
            <img src="https://placehold.co/500x400/764ba2/white?text=Nuestra+Empresa" alt="Nuestra empresa" />
          </div>
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <p>
              Nacimos en 2024 con una misión clara: revolucionar la forma en que las 
              personas compran online. Lo que comenzó como un pequeño emprendimiento, 
              hoy es una tienda digital que llega a miles de hogares.
            </p>
            <p>
              Creemos que comprar debería ser una experiencia simple, segura y placentera. 
              Por eso trabajamos todos los días para ofrecer los mejores productos, 
              con la mejor atención y los precios más competitivos.
            </p>
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-text">
            <h2>Misión & Visión</h2>
            <p>
              <strong>Misión:</strong> Brindar productos de calidad con la mejor experiencia de compra online.
            </p>
            <p>
              <strong>Visión:</strong> Ser la tienda online de referencia, reconocida por nuestra calidad, 
              variedad y compromiso con el cliente.
            </p>
          </div>
          <div className="about-image">
            <img src="https://placehold.co/500x400/667eea/white?text=Misión+y+Visión" alt="Misión y visión" />
          </div>
        </div>

        <div className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🌟 Calidad</h3>
              <p>Seleccionamos los mejores productos para vos</p>
            </div>
            <div className="value-card">
              <h3>🤝 Confianza</h3>
              <p>Compromiso y transparencia en cada compra</p>
            </div>
            <div className="value-card">
              <h3>💡 Innovación</h3>
              <p>Siempre a la vanguardia</p>
            </div>
            <div className="value-card">
              <h3>🌱 Sostenibilidad</h3>
              <p>Comprometidos con el planeta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage