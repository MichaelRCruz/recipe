import React from 'react';
import SessionContext from './SessionContext.js';
import Recipe from './Recipe.js';
import RecipeDetail from './RecipeDetail.js';

import './Recipes.css';

class Recipes extends React.Component {

  static contextType = SessionContext;

  state = {
    activeRecipe: false
  }

  handleClick = uuid => {
    this.setState({
      activeRecipe: uuid
    });
  }

  render() {
    const { recipesPayload } = this.context.state;
    const recipes = recipesPayload.map(recipe => {
      return(
        <li className='recipe' key={recipe.uuid}>
          <Recipe {...recipe} handleClick={this.handleClick} />
        </li>
      );
    });

    return !this.state.activeRecipe
      ? <div className='recipesContainer'>
          <ul className='recipesList'>{recipes}</ul>
        </div>
      : (
        <div>
          <RecipeDetail
            uuid={this.state.activeRecipe}
            handleClick={this.handleClick}
          />
        </div>
      );
  }
};

export default Recipes;