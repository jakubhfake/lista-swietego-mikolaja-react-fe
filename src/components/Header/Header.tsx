import {Link, NavLink} from "react-router-dom";
import React from "react";

export const Header = () => {
    return <>
        <h1>Santa Gifts App</h1>
        Menu:
        <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'red'})} to={"/gift"}>Gifts</NavLink> |
        <Link to={"/test"}>Test</Link> |
        <hr/>
    </>
}