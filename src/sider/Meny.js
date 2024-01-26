import strings from './../strings.json';
import { NavLink } from "react-router-dom";
import React from "react";
const Meny = () => {
    return (
        <div>
            <div className="menu-content">
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/profil">{strings.menytekst1}</NavLink>
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/startside">{strings.menytekst2}</NavLink>
            </div>
        </div>
    );
};

export default Meny;