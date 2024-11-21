import { useContext } from 'react';
import CartContext from '../CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  const { items } = useContext(CartContext);
  return (
    <nav className='d-flex justify-content-between py-2 border border-2 bg-dark'>
      <div className='ms-5'>
        <Link to='/' className='text-decoration-none text-white'>
          <div className='fs-4 fw-bold'>Wear</div>
        </Link>
      </div>
      <div className='text-white fs-4 fw-bold'>MyShop</div>
      <div className='me-5 mt-1 fs-5'>
        <Link to='/checkout' className='text-decoration-none text-white'>
          <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />
          <span className='ms-2'>{items.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
