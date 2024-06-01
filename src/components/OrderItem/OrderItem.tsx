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
  <div className="order-item">
    <div className="order-name">{order.name}</div>
    <div className="order-price">{order.price}KGS</div>
    <div className="order-quantity">x{order.quantity}</div>
    <button className="cross-btn" onClick={onRemove}>
      <img className="cross-btn-img" src={cross} alt="Delete" />
    </button>
  </div>
);

export default OrderItem;
