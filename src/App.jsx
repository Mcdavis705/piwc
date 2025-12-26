import AppRouter from "./router/AppRouter";
import React from "react";
import userContext from "./contexts/userContext.js";

function App() {
  //data from nocodb with the token
  const userData = {
    name: 'Mcdavis',
    token: import.meta.env.VITE_NOCODB_API_TOKEN,
  }

  return (
    <userContext.Provider value={userData}>
      <AppRouter />
    </userContext.Provider>
  )
}

export default App;
