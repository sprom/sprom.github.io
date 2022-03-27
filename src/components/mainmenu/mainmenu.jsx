import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './mainmenu.scss'

function MainMenu() {
    const weather = useSelector((state) => state.weather);
    return (
        <>
            <div className="sidebar">
                <div className="weather">
                    <div >
                        Weather
                    </div>
                    {
                        weather + '°c'
                    }
                </div>
                <ul>
                    <li> <NavLink activeClassName="active" exact={true} to={'/'} >Home</NavLink></li>
                    <li> <NavLink  activeClassName="active" to={'/search'} >Search</NavLink></li>
                    <li> <NavLink activeClassName="active" to={'/about'} >About</NavLink></li>
                </ul>
            </div>
        </>
    );
}
export default MainMenu;
