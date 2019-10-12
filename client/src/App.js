import React from 'react';
import axios from "axios";

import Toggle from "./components/Toggle.js";
import PlayerList from "./components/PlayerList.js";

class App extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         playerList: []
      };
   }

   async componentDidMount () {
      console.log("App Mounted!")

      const response = await axios.get("http://localhost:5000/api/players");
      await this.setState({
         playerList: response.data
      });
      console.log(this.state.playerList);
   }

   render () {
      return (
         <div className="App">
            <header className="App-header">
               <h1>This is an App!</h1>
               <Toggle 
                  mode="plDarkMode"
                  initialValue = {false}
                  cssClass="dark-mode" 
                  content="Dark Mode"
               />
            </header>
            
            {
               (this.state.playerList.length > 0)
               ?  <PlayerList players={this.state.playerList} />
               :  <h3 data-testid="loading">Loading...</h3>
            }
         </div>
      );
   }
}


// function App() {
//    return (
//       <div className="App">
//          <header className="App-header">
//             <h1>This is an App!</h1>
//          </header>
//       </div>
//    );
// }

export default App;
