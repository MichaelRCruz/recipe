import React from 'react';
import RealTimeApi from './RealTimeApi.js';
import './App.css';

const api = new RealTimeApi();

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(userInput) {
    this.setState({ value: userInput });
  }

  componentDidMount = async () => {
    const payload = await api.getRecipes();
    console.log(payload);
    this.setState({ payload });
  }

  render() {
    const recipes = this.state.payload.map((recipe, index) => {
      return (
        <li key={index}>
          <p>{recipe.title}</p>
        </li>
      );
    });
    return (
      <div className="formContainer">
        <ul>{recipes}</ul>
      </div>
    );
  }
}

export default Recipes ;
