import {Link} from "react-router-dom";
import React from "react";

export const Header = () => {
    return <>
        <h1>Santa Gifts App</h1>
        Menu:
        <Link to={"/gift"}>Gifts</Link> |
        <Link to={"/test"}>Test</Link> |
        <hr/>
    </>
}