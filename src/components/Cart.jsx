import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Cart.css';
import Navbar from './Navbar';


export default function Cart({ cart, setCart, handleChange, size }) {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += amount * item.price));
    setPrice(ans);
  };


  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <Navbar size={size} />

      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => setAmount(handleChange(amount, 1))}>+</button>
              <button>{amount}</button>
              <button onClick={() => setAmount(handleChange(amount, -1))}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          {cart.length > 0 ? "" : <h2>Your Cart Is Empty.....</h2>}
          <span>Total Price of your Cart</span>
          <span>$ {price}</span>
        </div>
        {cart.length > 0 ?
          <div className="container d-flex justify-content-center py-5">
            <NavLink to="/checkout" className='btn btn-outline-dark text-center'>Place Order</NavLink>
          </div>
          : ""}
      </article>

    </>
  );
}
