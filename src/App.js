import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    { name:"Akshay", age: 24},
    { name:"Vino", age: 26},
    { name:"Akash", age: 20},
    { name:"Rubby" age: 20},
    ];

return (
<div className="App">
  {names.map((name, key) => {
    return <h1 key={key}> {name} </h1>;
  })
  }
</div>
);
  }
export default App;
