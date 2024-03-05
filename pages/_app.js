import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState((0))
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    // console.log("This is use effect")
    router.events.on('routeChangeStart', () => {
      setProgress(30)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {


      setCart(JSON.parse(localStorage.getItem('cart')))

      saveCart(JSON.parse(localStorage.getItem('cart')))

    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])


  const saveCart = (cart) => {
    // localStorage.setItem('cart', cart)
    localStorage.setItem('cart', JSON.stringify(cart))
    let subtotal = 0
    for (let itemcode in cart) {
      subtotal += cart[itemcode].qty * cart[itemcode].price
    }
    setSubTotal(subtotal)
  }
  const clearCart = () => {
    localStorage.removeItem('cart')
    setCart({})
    saveCart({})

  }
  const Buynow = (itemcode, qty, price, name, size, variant) => {
    // saveCart({});
    let newCart = { itemcode: { qty: 1, price, name, size, variant } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/Checkout')

  }
  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }

  const removeFromCart = (itemcode, qty, price, name, size, variant) => {

    let newCart = JSON.parse(JSON.stringify(cart))
    console.log(newCart)
    if (itemcode in newCart) {
      newCart[itemcode].qty -= qty
      if (newCart[itemcode].qty <= 0) {
        delete newCart[itemcode]
      }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const addtoCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = { ...cart }
    if (itemcode in newCart) {
      newCart[itemcode].qty += qty
    } else {
      newCart[itemcode] = { qty, price, name, size, variant }

    }
    setCart(newCart)
    saveCart(newCart)
  }


  return <>
    <LoadingBar color="#1CD207"
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)} />
    { <Navbar user={user} logout={logout} key={key} cart={cart} addtoCart={addtoCart} Buynow={Buynow} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
    <Component cart={cart} addtoCart={addtoCart} Buynow={Buynow} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
