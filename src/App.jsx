//React core
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import HomePage from "./components/templates/HomePage";

//Components
import Home from "./components/templates/HomePage";
import VideoPage from "./components/templates/VidePage";
// Other imports
import "./css/style.css";
import information from "./information.json";

function App() {

  {/* console.log('hello: '+{Cards});
 for (const i=0; i< information.length;i++) {
    Cards.push(<Card data={information[i]})
  */  }

  return (
    
      <Router>
          <div className="App">
            {/*<Home information ={information}/> */}
            {/*<VideoPage information ={information[0]} /> */}
            <Switch>
                <Route 
                  path="/" 
                  exact
                  render={ () => <HomePage information ={information} />}
                  />
                <Route 
                  path="/video" 
                  render ={ () => <VideoPage information = {information[0]} />}
                />
            </Switch>
          </div>
      </Router>
    
  );
}

export default App;
