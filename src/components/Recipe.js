import { React, useState } from 'react';
import Ingredients from './Ingredients';
import HealthLabels from './HealthLabels';
import './Recipe.css';

const Recipe = ({
  label,
  url,
  title,
  calories,
  image,
  ingredients,
  dietLabels,
  healthLabels,
}) => {
  const [display, setDisplay] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  return (
    <div className='recipe'>
      <h1>{title}</h1>
      <img src={image} alt={label} />
      <p>Diet Label: {dietLabels[0]}</p>
      <p>{Math.round(calories)} Calories</p>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        Find out more
      </a>
      <div>
        <h3>Ingredients:</h3>
        <button
          className='ingredients_button'
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {display ? '-' : '+'}
        </button>
        {display && <Ingredients ingredients={ingredients} />}
      </div>
      <div className='health_labels'>
        <h3>Health labels:</h3>
        <button onClick={() => setShowLabels(!showLabels)}>
          {showLabels ? '-' : '+'}
        </button>
        {showLabels && <HealthLabels healthLabels={healthLabels} />}
      </div>
    </div>
  );
};

export default Recipe;
