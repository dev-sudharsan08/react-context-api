import React, { useContext } from 'react';
import CartContext from '../CartContext';

const Checkout = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <h2 className='fw-bold text-center mt-2'>Checkout</h2>
      <div className='mt-4 ms-4'>
        {items.map((item, index) => (
          <div className='d-flex' key={index}>
            <p className='fs-6 fw-medium'>{item.name} - </p>
            <p className='fs-6 text-warning fw-bold'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
