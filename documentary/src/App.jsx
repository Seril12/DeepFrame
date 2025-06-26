import Search from "./Search.jsx";
import "./App.css";
import Home from "./Home.jsx";
import { useState } from "react";


function App() {
  const [query,setQuery] = useState("");
  return (
    <>
    <Home setQuery = {setQuery}/>
    <Search query={query} setQuery={setQuery}/>
    </>
  );
}

export default App;
