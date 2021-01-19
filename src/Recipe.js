import React from 'react';

import './Recipe.css';

const Recipe = props => {

  const { cookTime, prepTime, title } = props;

  return (
    <div className='recipe'>
      <h3 className='recipeTitle'>{title}</h3>
      <div className='timeContainer'>
        <p className='time'>cook time: {cookTime}</p>
        <p className='time'>prep time: {prepTime}</p>
      </div>
    </div>
  );
};
 
export default Recipe;