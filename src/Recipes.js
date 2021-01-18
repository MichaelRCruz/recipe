import React from 'react';
import SessionContext from './SessionContext.js';
import Recipe from './Recipe.js';

class Recipes extends React.Component {

  static contextType = SessionContext;

  state = {
    activeRecipe: false
  }

  handleClick = uuid => {
    console.log(uuid);
    this.setState({
      activeRecipe: uuid
    });
  }

  render() {
    const { recipesPayload } = this.context.state;
    console.log(recipesPayload);
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
          <h1>not</h1>
        </div>
      );
  }
};

export default Recipes;