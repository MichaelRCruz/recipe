import React, { useContext } from 'react';
import SessionContext from './SessionContext.js';

const RecipeDetail = props => {

  const sessionContext = useContext(SessionContext);
  
  const { state } = sessionContext;
  const recipe = state.recipes[props.uuid];
  const specialIngredients = Object.keys(state.specialIngredients);


  return (
    <div>
      <div onClick={() => props.handleClick(false)}>
        <p>
          {props.uuid}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;