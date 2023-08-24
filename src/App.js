
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
// import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navabar } from './Navbar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


function App() { 
  const client  = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

  return (
    <div className="App">
     <QueryClientProvider client={client}>
      <Router>
      <Navabar />
      <Switch>
       <Route exact path="/"> <Home /> </Route> 
       {/* <Route exact path="/profile"> <Profile /> </Route> */}
       <Route exact path="/contact"> <Contact /> </Route>
       <Route path="*"> <h1> PAGE NOT FOUND</h1> </Route> 
      </Switch>
      </Router>
      </QueryClientProvider>
      </div>
  );
} 

export default App;