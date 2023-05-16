import React, { useEffect, useState } from 'react';
import './cart.scss';
import Cart from './Cart';

const Carts = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://dummyjson.com/products');
        const data = await result.json();
        setCart(data.products);
        // console.log(data);
      } catch (error) {
        console.error('Xetta bas verdi', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='carts'>
      <div id='carts_in'>
         {cart.map((product) => {
           return <Cart imgUrl={product.images[0]} name={product.title} price={product.price} />;
        })} 
      </div>
    </div>
  );
};

export default Carts;
