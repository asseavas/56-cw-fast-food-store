import React from 'react';
import OrderItem from '../OrderItem/OrderItem';

interface Order {
  name: string;
  price: number;
  quantity: number;
}

interface OrdersContainerProps {
  orders: Order[];
  totalPrice: number;
  onRemoveOrder: (order: Order) => void;
}

const OrdersContainer: React.FC<OrdersContainerProps> = ({ orders, totalPrice, onRemoveOrder }) => (
  <div className="orders-container ps-4">
    <h2 className="mb-3">Orders</h2>
    {orders.length === 0 ? (
      <div>You haven't ordered anything yet</div>
    ) : (
      <>
        {orders.map(order => (
          <OrderItem key={order.name} order={order} onRemove={() => onRemoveOrder(order)} />
        ))}
        <div>Total price: {totalPrice}</div>
      </>
    )}
  </div>
);

export default OrdersContainer;