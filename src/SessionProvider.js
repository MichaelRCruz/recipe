import React from 'react';
import RealTimeApi from './RealTimeApi.js';
import SessionContext from './SessionContext.js';
// import {throttling} from './utils.js';

const api = new RealTimeApi();

class SessionProvider extends React.Component {

  updateRecipe = uid => {
      console.log(uid);
  };

  state = {
      recipes: []
  };

  initializeApp = async () => {
      const payload = await api.getRecipes();
      this.setState({ recipes: payload });
  };

  componentDidMount() {
      // const { foreignState } = this.props;
      this.initializeApp();
  };

//   static getDerivedStateFromProps(props, state) {
//     const { rm: roomId } = props.foreignState;
//     if (roomId !== state.prevRoomId) {
//       return {
//         prevRoomId: roomId
//       };
//     }
//     return null;
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.foreignState.rm !== prevState.prevRoomId) {
//       this.updateActiveRoom(this.props.foreignState.rm);
//     }
//   }

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
