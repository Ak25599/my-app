
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';

function App() { 
  return (
    <div className="App">
     home screen 
      <Router>
      <Switch>
       <Route exact path="/"> <Home /> </Route> 
       <Route exact path="/menu"> <Menu /> </Route>
       <Route exact path="/contact"> <Contact /> </Route>
       <Route path="*"> <h1> PAGE NOT FOUND</h1> </Route> 
      </Switch>
      </Router>
      </div>
  );
} 

export default App;