import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Search from "./components/search/search";
import Listing from "./pages/listing/listing";

function App() {
  const [inputval, setInputVal] = useState('');
  console.log(inputval);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="logo"><Link to="/">Linked logo</Link></div>
        
          <Route path="/">
            <Search change={setInputVal} />

          </Route>
          <Route exact path="/search">
            <Listing inputval={inputval} />
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
