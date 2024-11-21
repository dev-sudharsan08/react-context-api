import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products', { method: 'GET' })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resInJson) => {
        console.log(resInJson);
        if (resInJson.statusCode !== 404) {
          setProducts(resInJson);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <div className='row justify-content-center g-3 mt-2 mx-5'>
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
