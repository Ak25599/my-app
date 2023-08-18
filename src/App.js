import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Axios from "axios";


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
       

       <p> {generatedEscuse} </p>
      </div>


  
  );
} 

export default App;
