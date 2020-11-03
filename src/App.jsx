
//Components
import Card from "./components/Card";

// Other imports
import "./css/style.css";
import information from "./information.json";
function App() {
  return (
    <div className="App">
      
     <h1>Video Site</h1>
     <Card data ={information[0]}/>
    </div>
  );
}

export default App;
