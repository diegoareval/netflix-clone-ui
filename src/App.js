import React, {useState} from "react"
import Home from "./components/Home";
import Login from "./components/Login";

const  App = () => {
  const [initScreen, setInitScreen] = useState(true);
  return <>{initScreen ? <Login change={setInitScreen}/> : <Home change={setInitScreen} />}</>;
}

export default App;
