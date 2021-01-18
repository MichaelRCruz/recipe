import React, { useContext } from 'react';
import SessionContext from './SessionContext.js';

const Recipes = () => {
  const sessionContext = useContext(SessionContext);
  console.log('sessionContext: ', sessionContext.state.recipes);
  const recipes = sessionContext.state.recipes.map((recipe, index) => {
    return (
      <li key={index}>
        {recipe.title}
      </li>
    );
  });

  return (
    <div className="menuComponent">
      <h1>Recipes</h1>
      <ul>{ recipes }</ul>
    </div>
  );
};

export default Recipes;