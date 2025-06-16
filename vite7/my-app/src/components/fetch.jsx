import React, { useEffect, useState } from 'react';

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <img src={product.image}/>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default FetchProducts;