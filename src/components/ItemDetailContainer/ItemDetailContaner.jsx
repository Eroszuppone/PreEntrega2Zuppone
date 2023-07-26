import React, { useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [producto] = useState({});
  console.log('el item es:', id);
  

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;