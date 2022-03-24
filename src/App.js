import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Route,Link,BrowserRouter } from "react-router-dom";
import "./App.css";
import Search from "./components/search/search";
import Listing from "./pages/listing/listing";

function App() {
  const [inputval, setInputVal] = useState('');
  console.log(inputval);
 
  return (
    <BrowserRouter>
      <div className="App">
        {
          inputval? <Redirect to={"/search/"+inputval} />:''
          }
       
          <Route path="/">
            <Search change={setInputVal} />
          </Route>

          <Route  path="/search/:id">
            <Listing />
          </Route>
         
       
      </div>
    </BrowserRouter>
  );
}

export default App;
