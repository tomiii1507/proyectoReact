import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const getInitialCart = () => {
  const storedCart = localStorage.getItem('cart')
  return storedCart ? JSON.parse(storedCart) : []
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id)
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  }

  const clearCart = () => setCart([])

  const getTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotal, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}