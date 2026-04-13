import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './CartPage.css'

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotal } = useContext(CartContext)
  
  const [showClearModal, setShowClearModal] = useState(false)
  const [showRemoveModal, setShowRemoveModal] = useState(null)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>¡Explorá nuestros productos y agregá algo increíble!</p>
        <a href="/productos" className="continue-shopping-btn">Ver productos</a>
      </div>
    )
  }

  const handleCheckout = () => {
    setShowCheckoutModal(true)
  }

  const confirmCheckout = () => {
    alert('🎉 ¡Gracias por tu compra! Tu pedido ha sido confirmado.')
    clearCart()
    setShowCheckoutModal(false)
  }

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toLocaleString()}</p>
              </div>
              
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              
              <div className="cart-item-subtotal">
                <p>Subtotal: ${(item.price * item.quantity).toLocaleString()}</p>
              </div>
              
              <button 
                className="remove-item"
                onClick={() => setShowRemoveModal(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Resumen de compra</h2>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getTotal().toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Envío:</span>
              <span>Gratis</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${getTotal().toLocaleString()}</span>
            </div>
          </div>
          
          <button className="checkout-btn" onClick={handleCheckout}>
            Finalizar compra
          </button>
          
          <button className="clear-cart-btn" onClick={() => setShowClearModal(true)}>
            Vaciar carrito
          </button>
        </div>
      </div>

      {/* Modal Vaciar Carrito */}
      {showClearModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Confirmar acción</h3>
            <p>¿Estás seguro de que querés vaciar todo el carrito?</p>
            <div className="modal-buttons">
              <button className="modal-btn cancel" onClick={() => setShowClearModal(false)}>Cancelar</button>
              <button className="modal-btn confirm" onClick={() => { clearCart(); setShowClearModal(false);}}>Vaciar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar Producto */}
      {showRemoveModal !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🗑️ Confirmar eliminación</h3>
            <p>¿Eliminar este producto del carrito?</p>
            <div className="modal-buttons">
              <button className="modal-btn cancel" onClick={() => setShowRemoveModal(null)}>Cancelar</button>
              <button className="modal-btn confirm" onClick={() => { removeFromCart(showRemoveModal); setShowRemoveModal(null);}}>Eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Finalizar Compra */}
      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🎉 Confirmar compra</h3>
            <p>Total a pagar: <strong>${getTotal().toLocaleString()}</strong></p>
            <p>¿Confirmar tu compra?</p>
            <div className="modal-buttons">
              <button className="modal-btn cancel" onClick={() => setShowCheckoutModal(false)}>Seguir comprando</button>
              <button className="modal-btn confirm" onClick={confirmCheckout}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage