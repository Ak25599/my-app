import logo from './logo.svg';
import './App.css';
import { User } from './User'

function App() {
  const users = [
    { name:"Akshay", age: 24},
    { name:"Vino", age: 26},
    { name:"Akash", age: 20},
    { name:"Rubby", age: 20},
    ];

return (
<div className="App">
  {users.map((user, key) => {
    return <User name={user.name} age={user.age} />;
  })
  }
</div>
);
  }
export default App;
