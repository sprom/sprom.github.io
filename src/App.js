import React, { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainMenu from "./components/mainmenu/mainmenu";
import About from "./pages/about/about";
import HomePage from "./pages/homepage/homepage";
import PageNotFound from "./pages/pagenotfound/pagenotfound";
import Search from "./pages/search/search";
import Logo from "./resources/img/logo.svg";
function App() {
  const [inputval, setInputVal] = useState("");
  // console.log(inputval);
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });
  const dispatch = useDispatch();
  const wetherApi =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.6934591&lon=44.8014495&appid=c36856ae34b4e3e7fb9c1d1556dd2992";

  async function getWeather() {
    try {
      const response = await axios.get(wetherApi);
      dispatch({
        type: "SETWEATHER",
        payload: response.data.main.temp,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <button
          onClick={() =>
            dispatch({
              type: "INCRIMENT",
              payload:5
            })
          }
        >
          dddd
        </button> */}
        {/* {weather} */}
        {/* {
          inputval? <Redirect to={"/search/"+inputval} />:''
          }
       
          <Route path="/">
            <Search change={setInputVal} />
          </Route>

          <Route  path="/search/:id">
            <Listing />
          </Route> */}
        <MainMenu />

        <div className="content">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <Switch>
            <Route exact={true} path="/">
              <HomePage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/404">
              <PageNotFound />
            </Route>
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
