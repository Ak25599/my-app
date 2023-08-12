import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <User name= "Akshay" age={21} email= "akshay25599@gmail.com" />
      <User />
      <User />
    </div>
  );
}


const User = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.age}</h1>
      <h1> {props.email}</h1>
    </div>
  )

}
export default App;
