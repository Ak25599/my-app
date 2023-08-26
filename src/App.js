import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./components/Cat"; // Import Cat as a named export

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Cat />
      </div>
    </QueryClientProvider>
  );
};

export default App;



