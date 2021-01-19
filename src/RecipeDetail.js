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
      <li key={ingredient.uuid} >
        <Ingredient
          specialIngredientsIds={specialIngredientsIds}
          {...ingredient}
        />
      </li>
    );
  });

  return (
    <div>
      <div onClick={() => props.handleClick(false)}>
        X
      </div>
      <h1>{recipe.title}</h1>
      <p>{recipe.postDate}</p>
      <p>{recipe.editDate}</p>
      <ul>{ingredients}</ul>
    </div>
  );
};

export default RecipeDetail;

// [
//   Recipe {
//     uuid: String
//     title: String
//     description: String
//     images: {
//       full: String
//       medium: String,
//       small: String
//     }
//     servings: Number
//     prepTime: Number
//     cookTime: Number
//     postDate: Date
//     editDate: Date
//     ingredients: [
//       Ingredient {
//         uuid: String
//         amount: Number
//         measurement: String
//         name: String
//       }
//     ]
//     directions: [
//       Direction {
//         instructions: String
//         optional: Boolean
//       }
//     ]
//   }
// ]