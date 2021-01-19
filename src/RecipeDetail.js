import React, { useContext } from 'react';
import Ingredient from './Ingredient.js';
import SessionContext from './SessionContext.js';

const RecipeDetail = props => {

  const sessionContext = useContext(SessionContext);
  
  const { state } = sessionContext;
  const recipe = state.recipes[props.uuid];
  const specialIngredientsIds = Object.keys(state.specialIngredients);
  const ingredients = recipe.ingredients.map(ingredient => {
    return (
      <li>
        <Ingredient {...ingredient} />
      </li>
    );
  });

  return (
    <div>
      <div onClick={() => props.handleClick(false)}>
        <p>
          {props.uuid}
        </p>
        <ul>
        {ingredients}
      </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;