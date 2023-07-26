import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <h2>Excellent Cat Adult Smart</h2>

      <img src={'https://catycanar.vtexassets.com/arquivos/ids/169057-1200-auto?v=638240816880270000&width=1200&height=auto&aspect=true'} alt={'Alimento'} style={{ width: '25rem' }} />

      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;