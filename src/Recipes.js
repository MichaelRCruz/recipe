import React from 'react';
import SessionContext from './SessionContext.js';
import Recipe from './Recipe.js';
import RecipeDetail from './RecipeDetail.js';

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
        <li
          key={recipe.uuid}
          onClick={e => {
            e.preventDefault();
            this.handleClick(recipe.uuid);
          }}
        >
          <Recipe {...recipe} />
        </li>
      );
    });

    return !this.state.activeRecipe
      ? <div><ul>{recipes}</ul></div>
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