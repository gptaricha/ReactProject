//Components
import Header from "./components/organisms/Header";
import Home from "./components/templates/HomePage";
// Other imports
import "./css/style.css";
import information from "./information.json";

function App() {

  {/* console.log('hello: '+{Cards});
 for (const i=0; i< information.length;i++) {
    Cards.push(<Card data={information[i]})
  */  }

  return (
    <div className="App">
      <Home information ={information}/>
    </div>
  );
}

export default App;
