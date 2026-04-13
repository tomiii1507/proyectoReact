import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const [showMessage, setShowMessage] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toLocaleString()}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* CARTELITO - ESTILO DIRECTO EN EL COMPONENTE */}
      {showMessage && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          zIndex: 9999,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          fontFamily: 'Arial, sans-serif'
        }}>
          ✅ {product.name} agregado al carrito
        </div>
      )}
    </>
  )
}

export default ProductCard