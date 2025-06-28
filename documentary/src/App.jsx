import Search from "./Search.jsx";
import "./App.css";
import Home from "./Home.jsx";
import { useState } from "react";
import Header from "./Header.jsx";


function App() {
  const [query,setQuery] = useState("");
  return (
    <>
    <Header />
    <Home setQuery = {setQuery}/>
    <Search query={query} setQuery={setQuery}/>
    </>
  );
}

export default App;