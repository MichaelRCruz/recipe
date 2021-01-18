import React from 'react';
import RealTimeApi from './RealTimeApi.js';
import SessionContext from './SessionContext.js';
// import {throttling} from './utils.js';

const api = new RealTimeApi();

class SessionProvider extends React.Component {

  state = {
    recipesPayload: [],
    specialsPayload: [],
    recipes: {},
    specials: {},
    specialIngredients: {}
  };

  updateRecipe = uid => {
    console.log(uid);
  };

  initializeApp = async () => {
    const recipesPayload = await api.getRecipes();
    const specialsPayload = await api.getSpecials();
    let specialIngredients = {};
    let recipes = {};
    let specials = {};
    Object.values(recipesPayload).forEach(recipe => {
      recipes[recipe.uuid] = recipe;
    });
    Object.values(specialsPayload).forEach(special => {
      specials[special.uuid] = special;
      specialIngredients[special.ingredientId] = special;
    });
    this.setState({ recipesPayload, specialsPayload, recipes, specials, specialIngredients });
  };

  componentDidMount() {
    this.initializeApp();
  };

  render() {
    return (
      <SessionContext.Provider value={{
        state: this.state,
        updateRecipe: key => {
          this.updateRecipe(key);
        }
      }}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export default SessionProvider;
