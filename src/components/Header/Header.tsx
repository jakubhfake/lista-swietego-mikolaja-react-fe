import {Link, NavLink} from "react-router-dom";
import React from "react";

export const Header = () => {
    const colorOfActiveLink = ({isActive}: {isActive: boolean}) => ({color: isActive ? 'green' : 'red'});

    return <>
        <h1>Santa Gifts App</h1>
        Menu:
        <NavLink style={colorOfActiveLink} to={"/gift"}>Gifts</NavLink> |
        <Link to={"/test"}>Test</Link> |
        <hr/>
    </>
}