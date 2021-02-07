import React from 'react';
import './HealthLabels.css';
import { v4 as uuidv4 } from 'uuid';

const HealthLabels = ({ healthLabels }) => {
  return healthLabels.map((healthLabel) => {
    return (
      <div className='healthLabel_div'>
        <ul key={uuidv4()} className='healthLabel_ul'>
          <li className='healthLabel_li'>{healthLabel}</li>
        </ul>
      </div>
    );
  });
};

export default HealthLabels;
