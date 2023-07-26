import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';


const CartWidget = () => {
  return (
    <Button>
      <RiShoppingCartLine fontSize="1.5rem" /> <Badge bg="secondary">5</Badge>
    </Button>
  );
};

export default CartWidget;