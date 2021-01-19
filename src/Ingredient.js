import React, { useContext } from 'react';
import SessionContext from './SessionContext.js';

import './Ingredient.css';

const Ingredient = props => {

  const sessionContext = useContext(SessionContext);
  const { uuid, name, specialIngredientsIds } = props;
  const { specialIngredients } = sessionContext.state;
  
  return specialIngredientsIds.includes(uuid)
      ? <div>
          <p>{name}</p>
          <div className='specialCard'>
            <h4>special</h4>
            <p>{specialIngredients[uuid].title}</p>
            <p>{specialIngredients[uuid].type}</p>
            <p>{specialIngredients[uuid].text}</p>
          </div>
        </div>
      : (
        <div>
          <p>{name}</p>
        </div>
      );
};

export default Ingredient;