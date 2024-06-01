import React from 'react';
import cross from '../../assets/delete.png';
import './OrderItem.css';

interface OrderItemProps {
  order: {
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onRemove }) => (
  <div className="order-item d-flex align-items-center rounded-3 bg-light m-3 ps-4 px-4 pt-3 pb-3 text-center">
    <div className="order-name">{order.name}</div>
    <div className="order-price ms-auto">{order.price}KGS</div>
    <div className="order-quantity ms-4">x{order.quantity}</div>
    <button className="cross-btn" onClick={onRemove}>
      <img className="cross-btn-img" src={cross} alt="Delete" />
    </button>
  </div>
);

export default OrderItem;
