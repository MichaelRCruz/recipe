import React from 'react';
import Recipes from './Recipes.js';
import SessionProvider from './SessionProvider.js';

class App extends React.Component {

  render() {
    return (
      <main>
        <SessionProvider>
          <Recipes />
        </SessionProvider>
      </main>
    );
  }
}

export default App;
