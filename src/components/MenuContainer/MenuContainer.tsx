import React from 'react';
import FoodItem from '../FoodItem/FoodItem';

interface FoodItem {
  name: string;
  price: number;
}

interface MenuContainerProps {
  items: FoodItem[];
  onAddOrder: (item: FoodItem) => void;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ items, onAddOrder }) => (
  <div className="menu-container row">
    <h2>Menu</h2>
    {items.map(item => (
      <div className="col-md-3" key={item.name}>
        <FoodItem item={item} onAdd={() => onAddOrder(item)}/>
      </div>
    ))}
  </div>
);

export default MenuContainer;
