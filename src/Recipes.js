import React from 'react';
import SessionContext from './SessionContext.js';
import Recipe from './Recipe.js';
import RecipeDetail from './RecipeDetail.js';

import './Recipes.css';

class Recipes extends React.Component {

  static contextType = SessionContext;

  state = {
    activeRecipe: false,
    toggled: false
  }

  handleClick = uuid => {
    this.setState({
      activeRecipe: uuid,
      toggled: !this.state.toggled
    });
  }

  handleUpdate = (uuid, payload) => {
    this.handleClick();
    this.context.updateRecipe(uuid, payload);
  }

  handleDelete = uuid => {
    this.handleClick();
    this.context.deleteRecipe(uuid);
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

    return !this.state.toggled && !this.state.activeRecipe
      ? <div className='recipesContainer'>
          <ul className='recipesList'>{recipes}</ul>
        </div>
      : (
        <div>
          <RecipeDetail
            uuid={this.state.activeRecipe}
            handleClick={this.handleClick}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete}
          />
        </div>
      );
  }
};

export default Recipes;