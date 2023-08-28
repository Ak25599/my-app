import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./components/Cat"; // Import Cat as a named export
import { useCount } from "./useCount";

function App() {
  const { count, increase, decrease, restart } = useCount(120);
  return (
    <div className="App">
      {count}
      <button onClick={increase}> increase</button>
      <button onClick={decrease}> decrease</button>
      <button onClick={restart}> restart</button>
      </div>

  );
}

 

export default App;



