import Navbars from '../../components/Nanbar/Navbars'
import { useState } from 'react';
import Footer from '../../components/Footer/Footer'

export default function Cardshop() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
    <Navbars/>
    <div>
      <h2>سبد خرید</h2>
      {cartItems.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
    <Footer/>
    </>
  )

}
