import React, { useContext } from 'react';
import CartContext from '../CartContext';
import PropTypes from 'prop-types';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ name, price, imageUrl, description }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card p-3 shadow bg-body-white rounded mx-2'>
        <div className='px-5 pt-5 pb-2 card-bg'>
          <img src={imageUrl} className='col-md-11 ms-2' alt={name} height={170} />
        </div>
        <div className='card-body p-0 mt-4'>
          <h6 className='card-title fw-bold mb-0'>{name}</h6>
          <p className='card-text fw-bold text-muted mt-3'>{description}</p>
          <span className='card-text fs-4 fw-bold text-success mt-3'>{price}</span>
          <button
            onClick={() => addToCart(name, price)}
            className='float-end mt-1 fs-5 border-0 bg-white cursor'>
            <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  description: PropTypes.string
};

export default Card;
