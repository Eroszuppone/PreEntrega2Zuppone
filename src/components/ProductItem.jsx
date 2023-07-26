import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const handleBuyClick = () => {
    addToCart(product);
  };

  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={handleBuyClick}>Comprar</button>
    </li>
  );
};

export default ProductItem;
