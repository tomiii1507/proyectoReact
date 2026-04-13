// Imagenes
import auris from '../assets/products/auriculares.png'
import buzo from '../assets/products/buzo.jpg'
import lampara from '../assets/products/lampara.jpg'
import camisa from '../assets/products/camisa.jpg'
import reloj from '../assets/products/reloj.jpg'
import taza from '../assets/products/taza.jpg'




export const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos",
    price: 10000,
    category: "electronica",
    image: auris,
    description: "Auriculares con cancelación de ruido y sonido envolvente"
  },
  {
    id: 2,
    name: "Hoodie Moderna",
    price: 15000,
    category: "ropa",
    image: buzo,
    description: "Hoodie de algodón con diseño minimalista"
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 20000,
    category: "electronica",
    image: reloj,
    description: "Smartwatch con monitor de actividad física"
  },
  {
    id: 4,
    name: "Camisa Casual",
    price: 12000,
    category: "ropa",
    image: camisa,
    description: "Camisa de algodón para uso diario"
  },
  {
    id: 5,
    name: "Lámpara LED",
    price: 18000,
    category: "hogar",
    image: lampara,
    description: "Lámpara decorativa con control remoto"
  },
  {
    id: 6,
    name: "Set de Tazas",
    price: 8000,
    category: "hogar",
    image: taza,
    description: "Set de 2 tazas de cerámica artesanal"
  }
]