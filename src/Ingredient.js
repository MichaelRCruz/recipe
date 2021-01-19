import React, { useContext } from 'react';
import SessionContext from './SessionContext.js';

const Ingredient = props => {

  const sessionContext = useContext(SessionContext);
  const { uuid, name, specialIngredientsIds } = props;
  const { specialIngredients } = sessionContext.state;
  
  return specialIngredientsIds.includes(uuid)
      ? <div>
          <p>{name} also on sale</p>
          <p>{specialIngredients[uuid].title}</p>
          <p>{specialIngredients[uuid].type}</p>
          <p>{specialIngredients[uuid].text}</p>
        </div>
      : (
        <div>
          <p>{name}</p>
        </div>
      );
};

export default Ingredient;