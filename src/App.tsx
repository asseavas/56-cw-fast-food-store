import React, { useState } from 'react';
import OrdersContainer from './components/OrdersContainer/OrdersContainer';
import MenuContainer from './components/MenuContainer/MenuContainer';
import './App.css';

interface FoodItem {
  name: string;
  price: number;
}

interface OrderItem extends FoodItem {
  quantity: number;
}

const FOOD_ITEMS: FoodItem[] = [
  { name: 'Burger', price: 80 },
  { name: 'Burrito', price: 70 },
  { name: 'Fries', price: 45 },
  { name: 'Coffee', price: 60 },
  { name: 'Cola', price: 50 },
  { name: 'Milkshake', price: 45 },
];

const App: React.FC = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const addOrder = (foodItem: FoodItem) => {
    setOrders(prevOrders => {
      const existingOrder = prevOrders.find(order => order.name === foodItem.name);
      if (existingOrder) {
        return prevOrders.map(order =>
          order.name === foodItem.name ? {...order, quantity: order.quantity + 1} : order
        );
      }
      return [...prevOrders, {...foodItem, quantity: 1}];
    });
  };

  const removeOrder = (foodItem: FoodItem) => {
    setOrders(prevOrders => {
      const existingOrder = prevOrders.find(order => order.name === foodItem.name);
      if (existingOrder && existingOrder.quantity > 1) {
        return prevOrders.map(order =>
          order.name === foodItem.name ? {...order, quantity: order.quantity - 1} : order
        );
      }
      return prevOrders.filter(order => order.name !== foodItem.name);
    });
  };

  const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

  return (
    <div className="container">
      <div className="col-md-9">
        <MenuContainer items={FOOD_ITEMS} onAddOrder={addOrder}/>
      </div>
      <div className="col-md-3">
        <OrdersContainer orders={orders} totalPrice={totalPrice} onRemoveOrder={removeOrder}/>
      </div>
    </div>
  );
};

export default App;
