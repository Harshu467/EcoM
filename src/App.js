import './App.css';
import React,{useState} from 'react';
import Header from './Common/Header/Header'
import Pages from './Pages/Page'
import Data from "./Components/Data"
import Cart from "./Common/Cart/Cart"
import Footer from "./Common/Footer/Footer"
import Sdata from "./Components/Shops/SData"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const App = () => {
  const { productItems } = Data
  const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Header CartItem={CartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}/>
          <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
