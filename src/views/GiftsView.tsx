import React from "react";
import {GiftsList} from "../components/Gifts/GiftsList";
import {GiftAdd} from "../components/Gifts/GiftAdd";
import {Link} from "react-router-dom";

export const GiftsView = () => (
    <>
        <GiftsList/>
        <GiftAdd/>
    </>
);