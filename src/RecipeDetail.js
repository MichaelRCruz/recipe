import React, { useContext } from 'react';
import Ingredient from './Ingredient.js';
import Direction from './Direction.js';
import SessionContext from './SessionContext.js';

import './RecipeDetail.css';

const RecipeDetail = props => {

  const sessionContext = useContext(SessionContext);
  
  const { state } = sessionContext;
  const recipe = state.recipes[props.uuid];
  const specialIngredientsIds = Object.keys(state.specialIngredients);

  const ingredients = recipe.ingredients.map(ingredient => {
    return (
      <li key={ingredient.uuid} >
        <Ingredient
          specialIngredientsIds={specialIngredientsIds}
          {...ingredient}
        />
      </li>
    );
  });
  
  const directions = recipe.directions.map((direction, index) => {
    return (
      <li key={index} >
        <Direction {...direction} />
      </li>
    );
  });

  return (
    <div className='recipeDetail'>
      <div className='titleBar'>
        <ul className='menuBar'>
          <li>Crescendo</li>
          <li>{recipe.title}</li>
          <li className='close' onClick={() => props.handleClick(false)}>CLOSE X</li>
        </ul>
      </div>
      <img src={'img/' + recipe.images.medium} alt="sup" />
      <h1>{recipe.title}</h1>
      <p>{recipe.postDate}</p>
      <p>{recipe.editDate}</p>
      <h3>Ingredients</h3>
      <ul>{ingredients}</ul>
      <h3>Directions</h3>
      <ol>{directions}</ol>
    </div>
  );
};

export default RecipeDetail;