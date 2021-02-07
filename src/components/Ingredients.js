import React from 'react';
import './Ingredients.css';
import { v4 as uuidv4 } from 'uuid';

const Ingredients = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <div className='ingredients-div' key={uuidv4()}>
        <ul className='ingredient-list'>
          <li className='ingredient-text'>{ingredient.text}</li>
          <li className='ingredient-weight'>
            Weight: {Math.round(ingredient.weight)}
          </li>
        </ul>
      </div>
    );
  });
};

export default Ingredients;
