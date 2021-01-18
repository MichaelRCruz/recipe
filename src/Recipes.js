import React from 'react';
import SessionContext from './SessionContext.js';
import Recipe from './Recipe.js';

class Recipes extends React.Component {

  static contextType = SessionContext;

  // handleChange = e => {
  //   this.props.history.push(`/chat/rooms/?rm=${e.target.value}`);
  // }

  render() {
    const { recipesPayload } = this.context.state;
    console.log(recipesPayload);
    const recipes = recipesPayload.map(recipe => {
      return(
        <Recipe key={recipe.uuid} {...recipe} />
      );
    });

    return true
      ? <div><ul>{recipes}</ul></div>
      : (
        <div>
          <h1>not</h1>
        </div>
      );
  }
};

export default Recipes;