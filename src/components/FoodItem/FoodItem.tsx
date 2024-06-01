import React from 'react';
import burgerImg from '../../assets/food-images/burger.png';
import burritoImg from '../../assets/food-images/burrito.png';
import friesImg from '../../assets/food-images/fries.png';
import coffeeImg from '../../assets/food-images/coffee.png';
import colaImg from '../../assets/food-images/cola.png';
import milkshakeImg from '../../assets/food-images/milkshake.png';
import './FoodItem.css';

const IMAGES: { [key: string]: string } = {
  burger: burgerImg,
  burrito: burritoImg,
  fries: friesImg,
  coffee: coffeeImg,
  cola: colaImg,
  milkshake: milkshakeImg,
};

interface FoodItemProps {
  item: {
    name: string;
    price: number;
  };
  onAdd: () => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ item, onAdd }) => {
  const imageSrc = IMAGES[item.name.toLowerCase()];

  return (
    <div className="food-item" onClick={onAdd}>
      <div className="img-container">
        <img className="food-img" src={imageSrc} alt={item.name}/>
      </div>
      <div className="food-item-info">
        <div>{item.name}</div>
        <div>Price: {item.price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
