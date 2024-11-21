import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.object
};

export default CartContext;
