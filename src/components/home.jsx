import React from 'react';
import ProductItem from './ProductItem';

const home = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Productos Disponibles</h1>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
