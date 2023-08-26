import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Cat = () => {
  const { data: catData } = useQuery(["cat"], async () => {
    const response = await Axios.get("https://catfact.ninja/fact");
    return response.data;
  });

  return (
    <div>
      <h1>{catData?.fact}</h1>
    </div>
  );
};

export { Cat }; // Export the Cat component as a named export

