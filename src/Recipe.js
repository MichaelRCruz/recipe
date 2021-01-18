import React from 'react';

const Recipe = recipe => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>cook time: {recipe.cookTime}</p>
      <p>prep time: {recipe.prepTime}</p>
    </div>
  );
};
 
export default Recipe;