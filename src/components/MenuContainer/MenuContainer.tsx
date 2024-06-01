import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './MenuContainer.css';

interface FoodItem {
  name: string;
  price: number;
}

interface MenuContainerProps {
  items: FoodItem[];
  onAddOrder: (item: FoodItem) => void;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ items, onAddOrder }) => (
  <div className="menu-container">
    {items.map(item => (
      <FoodItem key={item.name} item={item} onAdd={() => onAddOrder(item)} />
    ))}
  </div>
);

export default MenuContainer;
