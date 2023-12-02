import React from "react";
import {GiftsList} from "../components/Gifts/GiftsList";
import {GiftAdd} from "../components/Gifts/GiftAdd";
import {Link} from "react-router-dom";

export const TestView = () => (
    <>
        <h1>
            Test!
        </h1>
        <Link to={"/gift"}>Switch to gifts</Link>
    </>
);