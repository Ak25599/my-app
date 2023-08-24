
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';


function App() {
function App() {
  const [generatedEscuse, setGeneratedExcuse] = useState("")


function App() {
  const [generatedEscuse, setGeneratedExcuse] = useState("")

  const fetchExcuse = (excuse) => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };
  
  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button  onClick={() => fetchExcuse("office")}> Office </button>
       

        </Switch>
      </Router>
      </div>
  );
} 

export default App;
