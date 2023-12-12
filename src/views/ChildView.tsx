import React from "react";
import {useParams} from "react-router-dom";
import {ChildrenList} from "../components/Children/ChildrenList";
import {ChildAdd} from "../components/Children/ChildAdd";

export const ChildView = () => (

        <>
            <ChildrenList/>
            <ChildAdd/>
        </>
);
