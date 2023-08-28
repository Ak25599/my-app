import "./App.css";
import { Person } from "./components/Person";


function App() {
  return (
    <div className="App">
      <Person
      name="Akshay"
      email="akshay25599@gmail.com"
      age={24}
      isMarried={true}
      friends={[ "Akash", "Danny", "Kiran"]}
      />
      </div>

  );
  }

 

export default App;



