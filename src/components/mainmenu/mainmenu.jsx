import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                    <li> <Link to={'/'} >Home</Link></li>
                    <li> <Link to={'/search'} >Search</Link></li>
                    <li> <Link to={'/about'} >About</Link></li>
                </ul>
            </div>
        </>
    );
}
export default MainMenu;
