import {NavLink} from "react-router-dom";
import React from "react";

export const Header = () => {
    const colorOfActiveLink = ({isActive}: {isActive: boolean}) => ({color: isActive ? 'green' : 'red'});

    return <>
        <h1>Santa Gifts App</h1>
        Menu:
        <NavLink style={colorOfActiveLink} to={"/gift"}>Gifts</NavLink> |
        <NavLink style={colorOfActiveLink} to={""}>Children</NavLink> |
        <hr/>
    </>
}