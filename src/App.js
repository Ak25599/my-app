import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [textColor, setTextColor] = useState("Black");
  
  return (
    <div className="App">
      <button
      onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}
      >
        Show?Hide
      </button>
      <h1 style={{color: textColor}}> Hi My name is AK</h1>
    </div>
  );
  } 
export default App;
