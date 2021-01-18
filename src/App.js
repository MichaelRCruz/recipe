import React from 'react';
import Recipes from './Recipes.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="formContainer">
        <Recipes />
      </main>
    );
  }
}

export default App;
