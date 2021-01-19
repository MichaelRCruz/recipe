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

  updateRecipe = async (uuid, payload) => {
    const updateResponse = await api.updateRecipe(uuid, payload);
    console.log(uuid, payload, 'in Provider update');
    this.initializeApp();
  };

  deleteRecipe = async (uuid, payload) => {
    const updateResponse = await api.deleteRecipe(uuid);
    console.log(uuid, 'in Provider delete');
    this.initializeApp();
  };

  initializeApp = async () => {
    console.log('init');
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
        updateRecipe: (uuid, payload) => {
          this.updateRecipe(uuid, payload);
        },
        deleteRecipe: uuid => {
          this.deleteRecipe(uuid);
        }
      }}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export default SessionProvider;
