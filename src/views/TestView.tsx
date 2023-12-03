import React from "react";
import {useParams} from "react-router-dom";

export const TestView = () => {
    const {testId} = useParams();
    console.log(testId);

    return (
        <>
            <h1>
                Test!
            </h1>
        </>
    );
}
