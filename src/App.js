import React from 'react';
import Recipes from './Recipes.js';
import SessionProvider from './SessionProvider.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="formContainer">
        <SessionProvider>
          <Recipes />
        </ SessionProvider>
      </main>
    );
  }
}

export default App;
