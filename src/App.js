import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import { UserAuthContextProvider } from './context/userAuthContext';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import Checkout from './components/Checkout';
function App() {
  const [cart, setCart] = useState([]);
  const [addData, setAddData] = useState([]);
  const handleDataSubmission = (cat, name, url, date, inventory, shortDesc, longDesc, perUnitPrice, flag) => {
    setAddData(...addData, {
      'category': { cat },
      'productName': { name },
      'imageUrl': { url },
      'date': { date },
      'inventory': { inventory },
      'short Desc': { shortDesc },
      'longDesc': { longDesc },
      'price': { perUnitPrice },
      'flag': { flag }
    });
  }
  console.log(addData);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    alert("Product has been added to your cart");
  };
  const handleChange = (d, l) => {
    if (l === 1) {
      return d + 1;
    }
    else {
      return d - 1;
    }
  };
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path='/home' element={<ProtectedRoute><Home size={cart.length} /></ProtectedRoute>} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<Product handleClick={handleClick} />} />
          <Route exact path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length} />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/addproduct' element={<AddProduct size={cart.length} addData={addData} setAddData={setAddData} handleDataSubmission={handleDataSubmission} />} />
          <Route exact path='/checkout' element={<Checkout cart={cart} />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
